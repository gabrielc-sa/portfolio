export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-palette-light-muted bg-palette-light-muted/30 px-4 py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold text-palette-dark-deep">
          About
        </h2>
        <div className="space-y-4 text-palette-dark">
          <p className="text-lg leading-relaxed">
            I work at the intersection of architecture, product, and engineering — shaping AI, data, and software initiatives from strategy to delivery.
          </p>
          <p className="leading-relaxed">
            As a Solution Architect, I design scalable systems and technical roadmaps. As a Product Manager, I prioritize outcomes, align stakeholders, and ship value. My focus areas include AI/ML adoption, data platforms, and enterprise software.
          </p>
        </div>
      </div>
    </section>
  );
}
