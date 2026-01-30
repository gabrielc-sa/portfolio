import { render, screen } from "@testing-library/react";
import { HomeSection } from "./HomeSection";

describe("HomeSection", () => {
  it("renders the main heading", () => {
    render(<HomeSection />);
    expect(
      screen.getByRole("heading", { name: /solution architect & product manager/i })
    ).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<HomeSection />);
    expect(screen.getByText(/AI, Data & Software/)).toBeInTheDocument();
  });

  it("renders get in touch link", () => {
    render(<HomeSection />);
    const link = screen.getByRole("link", { name: /get in touch/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");
  });
});
