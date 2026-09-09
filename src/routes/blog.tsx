import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";

import { publications } from "@/lib/portfolio-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Writing — Technical Documentation & Developer Education" },
      {
        name: "description",
        content:
          "Published technical writing by Casmir Onyekani covering software development, API documentation, Azure DevOps, quantum computing, and developer education.",
      },
      {
        property: "og:title",
        content: "Writing — Technical Documentation & Developer Education",
      },
      {
        property: "og:description",
        content:
          "Technical articles, tutorials, and documentation focused on software development, developer education, cloud, DevOps, and quantum computing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="page-shell py-16 lg:py-24">
      <header className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
            Writing / publications
          </p>

          <h1 className="display-type mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Technical writing for people who need to make the thing work.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
            Published tutorials, technical documentation, and explainers across software
            development, APIs, cloud and DevOps, quantum computing, and developer education.
          </p>
        </div>

        <aside className="rounded-xl bg-ink p-5 text-surface lg:col-span-4">
          <BookOpen className="size-5 text-cobalt" aria-hidden="true" />

          <p className="display-type mt-6 text-lg font-semibold">Published technical writer</p>

          <p className="mt-3 text-sm leading-6 text-surface/60">
            Technical tutorials, documentation, and explainers written for developers, students, and
            technical audiences.
          </p>

          <p className="mono-type mt-5 text-xs font-semibold text-signal-soft">
            Published · developer education
          </p>
        </aside>
      </header>

      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
              Selected publications
            </p>

            <h2 className="display-type mt-3 text-2xl font-semibold">
              Developer-focused technical writing
            </h2>
          </div>

          <span className="mono-type text-xs text-mist">{publications.length} entries</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {publications.map((publication, index) => (
            <article
              key={publication.title}
              className="group rounded-xl border border-ink/10 bg-card p-6 transition-colors hover:border-cobalt/60"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="mono-type text-xs font-semibold text-cobalt">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mono-type text-[0.65rem] uppercase tracking-[0.12em] text-mist">
                  {publication.category}
                </span>
              </div>

              <h3 className="display-type mt-8 text-lg font-semibold leading-7">
                {publication.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-mist">{publication.summary}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-type rounded-md bg-ink/5 px-2 py-1 text-[0.65rem] text-mist"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="mono-type text-xs font-semibold text-ink">
                  {publication.platform}
                </span>

                {publication.url ? (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt"
                  >
                    Read article
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs text-mist">
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    Link to be added
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-rule mt-20 grid gap-10 pt-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
            Editorial standard
          </p>

          <h2 className="display-type mt-4 text-2xl font-semibold">
            Examples first. Minimal filler. No hand-waving.
          </h2>
        </div>

        <p className="leading-7 text-mist">
          Every article is structured around what a developer needs to understand or do next. When
          the subject is code, the code is part of the explanation.
        </p>
      </section>
    </main>
  );
}
