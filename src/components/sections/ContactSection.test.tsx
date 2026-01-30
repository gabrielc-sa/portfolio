import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactSection } from "./ContactSection";

const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv };
});

afterAll(() => {
  process.env = originalEnv;
});

describe("ContactSection", () => {
  it("renders contact heading", () => {
    render(<ContactSection />);
    expect(screen.getByRole("heading", { name: /contact/i })).toBeInTheDocument();
  });

  it("renders email link with mailto", () => {
    render(<ContactSection />);
    const emailLink = screen.getByRole("link", { name: /email me/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", expect.stringContaining("mailto:"));
  });

  it("renders LinkedIn link", () => {
    render(<ContactSection />);
    const linkedInLink = screen.getByRole("link", { name: /linkedin profile/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
  });

  it("renders contact form with name, email, message", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/you@example\.com/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("submits form and shows success message when Web3Forms succeeds", async () => {
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = "test-key";
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    global.fetch = mockFetch;

    const user = userEvent.setup();
    render(<ContactSection />);
    await user.type(screen.getByPlaceholderText(/your name/i), "Jane");
    await user.type(screen.getByPlaceholderText(/you@example\.com/i), "jane@example.com");
    await user.type(screen.getByPlaceholderText(/your message/i), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thanks! your message has been sent/i)).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("shows error message when Web3Forms returns success: false", async () => {
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = "test-key";
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: false }),
    });

    const user = userEvent.setup();
    render(<ContactSection />);
    await user.type(screen.getByPlaceholderText(/your name/i), "Jane");
    await user.type(screen.getByPlaceholderText(/you@example\.com/i), "jane@example.com");
    await user.type(screen.getByPlaceholderText(/your message/i), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(/something went wrong/i);
    });
  });

  it("shows error when access key is missing", async () => {
    const prev = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    delete process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    const user = userEvent.setup();
    render(<ContactSection />);
    await user.type(screen.getByPlaceholderText(/your name/i), "Jane");
    await user.type(screen.getByPlaceholderText(/you@example\.com/i), "jane@example.com");
    await user.type(screen.getByPlaceholderText(/your message/i), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(/something went wrong/i);
    });

    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = prev;
  });

  it("shows loading state while submitting", async () => {
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = "test-key";
    let resolveSubmit!: (value: { success: true }) => void;
    const submitPromise = new Promise<{ success: true }>((resolve) => {
      resolveSubmit = resolve;
    });
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => submitPromise,
    });

    const user = userEvent.setup();
    render(<ContactSection />);
    await user.type(screen.getByPlaceholderText(/your name/i), "Jane");
    await user.type(screen.getByPlaceholderText(/you@example\.com/i), "jane@example.com");
    await user.type(screen.getByPlaceholderText(/your message/i), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("button", { name: /sending/i })).toBeInTheDocument();
    resolveSubmit({ success: true });
    await waitFor(() => {
      expect(screen.getByText(/thanks! your message has been sent/i)).toBeInTheDocument();
    });
  });
});
