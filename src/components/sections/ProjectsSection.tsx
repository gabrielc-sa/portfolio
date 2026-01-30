const projects = [
  {
    title: "AI Platform & Data Pipelines",
    description:
      "Architected and delivered an AI platform with data pipelines, model serving, and MLOps practices for production workloads.",
    tags: ["AI/ML", "Data", "Architecture"],
  },
  {
    title: "Product Strategy & Roadmaps",
    description:
      "Led product strategy, discovery, and roadmaps for data and software products used by enterprise customers.",
    tags: ["Product", "Strategy", "Roadmap"],
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Designed and managed delivery of enterprise software solutions integrating cloud, APIs, and data services.",
    tags: ["Software", "Cloud", "APIs"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-palette-light-muted bg-palette-light px-4 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-palette-dark-deep">
          Projects
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="rounded-xl border border-palette-light-muted bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-palette-dark-deep">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-palette-dark">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-palette-muted/40 px-3 py-1 text-xs font-medium text-palette-dark-deep"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
