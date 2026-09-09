import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Casmir Onyekani" },
      {
        name: "description",
        content:
          "Selected and earlier builds from Casmir Onyekani's software engineering portfolio, presented alongside his technical writing focus.",
      },
      { property: "og:title", content: "Projects — Casmir Onyekani" },
      {
        property: "og:description",
        content: "An honest archive of selected and earlier software projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const selected = projects[0];
  const earlier = projects.slice(1);

  if (!selected) {
    return null;
  }

  return (
    <main className="page-shell py-16 lg:py-24">
      <header className="max-w-3xl">
        <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
          Projects / evidence
        </p>
        <h1 className="display-type mt-5 text-4xl font-semibold leading-tight md:text-6xl">
          A work archive, without inflated claims.
        </h1>
        <p className="mt-7 text-lg leading-8 text-mist">
          The portfolio brings together hands-on software projects spanning web applications,
          business platforms, automation, and developer-focused engineering. Each project
          demonstrates practical problem-solving, implementation decisions, and the ability to turn
          real-world requirements into working software.
        </p>
      </header>
      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
              Selected Projects
            </p>
            <h2 className="display-type mt-3 text-2xl font-semibold">Current positioning</h2>
          </div>
          <span className="mono-type text-xs text-mist">Implementation</span>
        </div>
        <article className="rounded-xl bg-ink p-7 text-surface md:p-10">
          <p className="mono-type text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
            {selected.category}
          </p>
          <h3 className="display-type mt-4 max-w-2xl text-2xl font-semibold md:text-3xl">
            {selected.title}
          </h3>
          <p className="mt-5 max-w-2xl leading-7 text-surface/65">{selected.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {selected.tags.map((tag) => (
              <span
                key={tag}
                className="mono-type rounded-md bg-surface/10 px-2.5 py-1.5 text-xs text-surface/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mono-type mt-8 text-xs text-signal-soft">{selected.status}</p>
        </article>
      </section>
      <section className="section-rule mt-20 pt-16">
        <div className="mb-8">
          <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
            Featured build
          </p>
          <h2 className="display-type mt-3 text-2xl font-semibold">Product & Application Builds</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {earlier.map((project) => (
            <article key={project.title} className="rounded-xl border border-ink/10 bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="mono-type text-xs font-semibold uppercase tracking-[0.12em] text-cobalt">
                  {project.category}
                </p>
                <span className="mono-type text-[0.65rem] text-mist">{project.status}</span>
              </div>
              <h3 className="display-type mt-5 text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-type rounded-md bg-ink/5 px-2 py-1 text-[0.65rem] text-mist"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.url ? (
                <a
                  href={project.url}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cobalt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : (
                <p className="mono-type mt-6 text-[0.65rem] text-mist">
                  Software Development + Technical Writing + Developer Education
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="mt-20 text-center">
        <h2 className="display-type text-2xl font-semibold">Looking for the writing evidence?</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-mist">
          The published work is the strongest current proof of technical depth. Browse the quantum
          and developer-education publications.
        </p>
        <Button asChild className="mt-7">
          <Link to="/blog">
            Read the writing <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
