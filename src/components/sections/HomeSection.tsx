export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] flex-col items-center justify-center bg-gradient-to-b from-palette-light to-palette-light-muted px-4 py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-palette-dark-deep sm:text-5xl md:text-6xl">
          Solution Architect & Product Manager
        </h1>
        <p className="mb-6 text-lg text-palette-dark sm:text-xl">
          AI, Data & Software — designing and delivering solutions that scale.
        </p>
        <a
          href="#contact"
          className="inline-flex rounded-lg bg-palette-dark-deep px-6 py-3 text-sm font-medium text-palette-light transition hover:bg-palette-dark"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
