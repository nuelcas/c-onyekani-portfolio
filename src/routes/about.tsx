import { createFileRoute } from "@tanstack/react-router";
import { Check, Code2, FileText, Terminal } from "lucide-react";

import headshotAsset from "@/assets/official-headshot.jpg";
import { stackGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Casmir Onyekani — Technical Writer for Developers" },
      {
        name: "description",
        content:
          "Learn how Casmir Onyekani combines software engineering and technical writing across APIs, SDKs, Qiskit, cloud, DevOps, and developer education.",
      },
      { property: "og:title", content: "About Casmir Onyekani — Technical Writer for Developers" },
      {
        property: "og:description",
        content:
          "Software engineering context meets clear, implementation-focused technical writing.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="page-shell py-16 lg:py-24">
      <header className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
            About / profile
          </p>
          <h1 className="display-type mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Software Engineer &amp; Technical Writer.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
            I combine software engineering and technical writing to create documentation developers
            can actually use. I build and test examples rather than writing from theory alone.
          </p>
        </div>
        <div className="flex items-center justify-center lg:col-span-5">
          <div className="aspect-square w-48 overflow-hidden rounded-full border-2 border-ink/10 bg-card shadow-sm md:w-56 lg:w-64">
            <img
              src={headshotAsset}
              alt="Casmir Onyekani, Software Engineer and Technical Writer"
              className="h-full w-full object-cover"
              loading="eager"
              width="400"
              height="400"
            />
          </div>
        </div>
      </header>
      <section className="mt-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
            The through-line
          </p>
          <h2 className="display-type mt-4 text-2xl font-semibold">
            I don’t just explain software. I understand what it takes to make the software work.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-mist lg:col-span-7">
          <p>
            My work sits between engineering systems and the people learning to use them: API
            references, SDK guides, quantum-computing tutorials, cloud and DevOps documentation, and
            code-heavy technical education.
          </p>
          <p>
            That means tracing the real path through a system, checking the assumptions in an
            example, and reducing the number of follow-up questions a developer has to ask before
            they can move.
          </p>
          <p>
            My technical writing has been published on freeCodeCamp, with work covering software
            development, Automation, DevOps Engineering, and quantum computing.
          </p>
        </div>
      </section>
      <section className="section-rule mt-20 pt-16">
        <div className="mb-9">
          <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
            Technical skills
          </p>
          <h2 className="display-type mt-3 text-2xl font-semibold">
            A working range across code and communication.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stackGroups.map((group) => (
            <article key={group.title} className="rounded-xl border border-ink/10 bg-card p-5">
              <h3 className="display-type text-base font-semibold">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-mist">
                    <Check className="size-4 text-cobalt" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section-rule mt-20 grid gap-5 pt-16 md:grid-cols-3">
        <article className="rounded-xl bg-ink p-6 text-surface">
          <Code2 className="size-5 text-cobalt" aria-hidden="true" />
          <h2 className="display-type mt-6 text-lg font-semibold">Engineering context</h2>
          <p className="mt-3 text-sm leading-6 text-surface/60">
            React, Node.js, Django, Python, TypeScript, SQL/MySQL, and the practical details behind
            a working implementation.
          </p>
        </article>
        <article className="rounded-xl bg-ink p-6 text-surface">
          <FileText className="size-5 text-cobalt" aria-hidden="true" />
          <h2 className="display-type mt-6 text-lg font-semibold">Writing discipline</h2>
          <p className="mt-3 text-sm leading-6 text-surface/60">
            Structure around developer questions, show the example early, and remove filler that
            does not help a reader ship.
          </p>
        </article>
        <article className="rounded-xl bg-ink p-6 text-surface">
          <Terminal className="size-5 text-cobalt" aria-hidden="true" />
          <h2 className="display-type mt-6 text-lg font-semibold">Verification habit</h2>
          <p className="mt-3 text-sm leading-6 text-surface/60">
            Spin up local environments, test endpoints, and verify the code examples before they
            become someone else’s debugging session.
          </p>
        </article>
      </section>
      <section className="section-rule mt-20 pt-16">
        <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
          Education &amp; credentials
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-mist">
          Educationist with an academic foundation in Computer Science and Education, strengthened
          by multiple professional certifications and ongoing development in modern software
          engineering, web development, and developer technologies.
        </p>
      </section>
    </main>
  );
}
