import { render, screen } from "@testing-library/react";
import { ProjectsSection } from "./ProjectsSection";

describe("ProjectsSection", () => {
  it("renders the projects heading", () => {
    render(<ProjectsSection />);
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
  });

  it("renders project cards", () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/AI Platform & Data Pipelines/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Strategy & Roadmaps/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise Software Solutions/i)).toBeInTheDocument();
  });
});
