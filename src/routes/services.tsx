import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Braces, Cloud, Cpu, FileText, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { capabilities } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — API, SDK & Developer Documentation" },
      {
        name: "description",
        content:
          "Documentation and developer education services for API, SDK, quantum, cloud, DevOps, and docs-as-code teams.",
      },
      { property: "og:title", content: "Services — API, SDK & Developer Documentation" },
      {
        property: "og:description",
        content:
          "Implementation-focused documentation for engineering teams and developer-tool products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const serviceIcons: [LucideIcon, LucideIcon, LucideIcon, LucideIcon] = [
  Braces,
  Cpu,
  BookOpen,
  Cloud,
];

function ServicesPage() {
  return (
    <main className="page-shell py-16 lg:py-24">
      <header className="max-w-3xl">
        <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
          Services / capabilities
        </p>
        <h1 className="display-type mt-5 text-4xl font-semibold leading-tight md:text-6xl">
          Documentation that helps engineering work move.
        </h1>
        <p className="mt-7 text-lg leading-8 text-mist">
          Specialist support for teams building APIs, SDKs, technical products, and developer
          education — not an agency menu.
        </p>
      </header>
      <section className="mt-20 grid gap-4 md:grid-cols-2">
        {capabilities.map((service, index) => {
          const Icon = serviceIcons[index];
          if (!Icon) return null;
          return (
            <article
              key={service.title}
              className="group rounded-xl border border-ink/10 bg-card p-6 transition-colors hover:border-cobalt/60 md:p-8"
            >
              <Icon className="size-6 text-cobalt" aria-hidden="true" />
              <p className="mono-type mt-8 text-xs font-semibold text-cobalt">{service.number}</p>
              <h2 className="display-type mt-3 text-xl font-semibold">{service.title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-mist">{service.description}</p>
              <p className="mono-type mt-7 text-[0.65rem] uppercase tracking-[0.12em] text-ink/50">
                {service.keywords}
              </p>
            </article>
          );
        })}
      </section>
      <section className="section-rule mt-20 grid gap-12 pt-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
            Engagement shape
          </p>
          <h2 className="display-type mt-4 text-2xl font-semibold">
            A focused path from gap to usable documentation.
          </h2>
        </div>
        <ol className="space-y-6 lg:col-span-7">
          {[
            "Review the repository, product context, and current documentation.",
            "Identify one high-friction reader path and the missing explanation around it.",
            "Write, build, and test the examples that make that path clear.",
            "Hand over documentation that is easier to maintain in a Docs-as-Code workflow.",
          ].map((step, index) => (
            <li key={step} className="flex gap-4 border-b border-ink/10 pb-5">
              <span className="mono-type text-xs font-semibold text-cobalt">0{index + 1}</span>
              <span className="leading-7 text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-20 rounded-xl bg-ink p-8 text-surface md:p-12">
        <FileText className="size-6 text-cobalt" aria-hidden="true" />
        <h2 className="display-type mt-6 max-w-xl text-2xl font-semibold md:text-3xl">
          Have a technical product that needs better documentation?
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-surface/60">
          Send a link to the API repo or SDK docs. I’ll flag one specific gap at no cost or
          obligation.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contact">
            Send the link <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
