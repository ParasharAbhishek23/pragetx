import IntegrationDiagram from "./IntegrationDiagram";

export default function IntegrationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-task2-hero" />
      <div className="pointer-events-none absolute inset-0 bg-task2-grid bg-task2Grid opacity-60" />

      <div className="relative">
        <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <header className="max-w-3xl md:max-w-4xl">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-normal text-white">
              <span className="font-semibold">
                Connect to existing systems.
              </span>{" "}
              <span className="text-gray-300">
                Orchestrate payments across multiple processors, build custom
                workflows, and connect to third parties using APIs, partner apps
                or pre-built integrations.
              </span>
            </span>
          </header>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-8">
          <div className="max-w-6xl sm:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <IntegrationDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
