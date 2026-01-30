import { render, screen } from "@testing-library/react";
import { AboutSection } from "./AboutSection";

describe("AboutSection", () => {
  it("renders the about heading", () => {
    render(<AboutSection />);
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  });

  it("renders content about solution architect and product manager", () => {
    render(<AboutSection />);
    expect(screen.getByText(/solution architect/i)).toBeInTheDocument();
    expect(screen.getByText(/product manager/i)).toBeInTheDocument();
  });
});
