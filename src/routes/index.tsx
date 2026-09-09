import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  FileCode2,
  GitBranch,
  RadioTower,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { capabilities, stackGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casmir Onyekani — API & SDK Documentation" },
      {
        name: "description",
        content:
          "Software Engineer & Technical Writer creating API references, SDK guides, Qiskit tutorials, and code-heavy developer documentation.",
      },
      { property: "og:title", content: "Casmir Onyekani — API & SDK Documentation" },
      {
        property: "og:description",
        content:
          "Software Engineer & Technical Writer creating API references, SDK guides, Qiskit tutorials, and code-heavy developer documentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <section className="soft-grid relative overflow-hidden border-b border-ink/10">
        <div
          className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-cobalt/10 blur-[7rem]"
          aria-hidden="true"
        />
        <div className="page-shell relative grid gap-12 pb-20 pt-16 lg:grid-cols-12 lg:items-start lg:gap-10 lg:pb-24 lg:pt-24">
          <div className="portfolio-reveal lg:col-span-7">
            <p className="mono-type mb-6 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mist">
              <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
              Software Engineer <span className="text-ink/30">×</span> Technical Writer
            </p>
            <h1 className="display-type max-w-[18ch] text-[clamp(2.35rem,6vw,4.65rem)] font-semibold leading-[1.02] text-ink">
              Documentation developers can actually implement.
            </h1>
            <p className="mt-7 max-w-[48ch] text-base leading-8 text-mist md:text-lg">
              I write API references, SDK guides, and code-heavy technical tutorials—and I build and
              test the examples myself. My work spans APIs, quantum computing, Qiskit, cloud/DevOps,
              and developer education.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request an API audit <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-ink/15 bg-transparent">
                <Link to="/projects">View my work</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist">
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-cobalt" aria-hidden="true" /> Examples built and
                tested
              </span>
              <span className="inline-flex items-center gap-2">
                <RadioTower className="size-4 text-cobalt" aria-hidden="true" /> Published on
                freeCodeCamp
              </span>
            </div>
          </div>

          <aside
            className="portfolio-reveal lg:col-span-5 lg:pt-5"
            style={{ animationDelay: "120ms" }}
          >
            <div className="rounded-xl bg-ink p-5 text-surface shadow-xl shadow-ink/15">
              <div className="mb-5 flex items-center justify-between">
                <span className="mono-type text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-surface/55">
                  Proof of method
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-signal-soft">
                  <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />{" "}
                  build-ready
                </span>
              </div>
              <div className="space-y-2.5">
                {[
                  ["Read the repo", "understand the system"],
                  ["Build the examples", "find the gaps"],
                  ["Test the code", "verify the path"],
                  ["Ship the docs", "reduce guesswork"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-md bg-surface/5 px-3 py-3 text-sm"
                  >
                    <span className="text-surface/80">
                      <span className="mono-type mr-3 text-xs text-cobalt">0{index + 1}</span>
                      {label}
                    </span>
                    <span className="text-right text-xs text-surface/50">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-surface/10 pt-4 text-sm leading-6 text-surface/60">
                Technical writing grounded in implementation—not theory alone.
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-24">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
              What I do
            </p>
            <h2 className="display-type mt-3 text-2xl font-semibold text-ink md:text-3xl">
              Four capability areas
            </h2>
          </div>
          <span className="mono-type hidden text-xs text-mist sm:block">where I operate</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <article
              key={capability.number}
              className="group rounded-xl border border-ink/10 bg-card p-5 transition-colors hover:border-cobalt/50"
            >
              <span className="mono-type text-xs font-semibold text-cobalt">
                {capability.number}
              </span>
              <h3 className="display-type mt-4 text-base font-semibold text-ink">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-mist">{capability.description}</p>
              <p className="mono-type mt-5 text-[0.63rem] font-medium uppercase tracking-[0.1em] text-ink/50">
                {capability.keywords}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-surface">
        <div className="page-shell py-20 lg:py-24">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
                Featured work
              </p>
              <h2 className="display-type mt-3 text-2xl font-semibold md:text-3xl">
                Published, runnable, evidence-led.
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden text-sm font-semibold text-signal-soft hover:text-surface sm:block"
            >
              Read the writing <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Code2,
                label: "Seenode API",
                title: "Automated CI/CD Pipeline",
                copy: "Automated Slangify deployments with GitHub Actions and the Seenode API, replacing manual deployments with CI/CD.",
              },
              {
                icon: FileCode2,
                label: "Azure DevOps",
                title: "Software Architecture",
                copy: "A scalable Azure Repos framework to address repository sprawl, inconsistent structures, and governance gaps.",
              },
              {
                icon: GitBranch,
                label: "Technical systems",
                title: "Connectivity & Architecture",
                copy: "Making coupling maps, routing, SWAP gates, circuit depth, and 1D/2D architectures easier to reason about.",
              },
            ].map(({ icon: Icon, label, title, copy }) => (
              <article
                key={title}
                className="rounded-xl border border-surface/10 bg-surface/[0.04] p-5 transition-colors hover:border-cobalt/60"
              >
                <Icon className="size-5 text-cobalt" aria-hidden="true" />
                <p className="mono-type mt-7 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-signal-soft">
                  {label}
                </p>
                <h3 className="display-type mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-surface/60">{copy}</p>
                <p className="mono-type mt-6 text-xs text-surface/45">
                  Developer-Focused Technical Writing
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule page-shell py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
              How I work
            </p>
            <h2 className="display-type mt-3 max-w-[14ch] text-2xl font-semibold md:text-3xl">
              Clear docs begin with working code.
            </h2>
            <p className="mt-5 max-w-[38ch] leading-7 text-mist">
              I combine engineering context with technical writing so the final guide answers the
              implementation question, not just the marketing question.
            </p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {[
              "Read the repo and current docs end to end.",
              "Spin up the local environment and test the path.",
              "Write examples around real implementation decisions.",
              "Ship a clear next action with minimal filler.",
            ].map((step, index) => (
              <li key={step} className="flex gap-4 border-b border-ink/10 pb-5">
                <span className="mono-type text-xs font-semibold text-cobalt">0{index + 1}</span>
                <span className="text-sm leading-6 text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stackGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-ink/10 bg-card p-4">
              <h3 className="display-type text-sm font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="mono-type rounded-md bg-ink/5 px-2 py-1 text-[0.65rem] text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-20 lg:pb-24">
        <div className="rounded-xl bg-ink p-8 text-surface md:flex md:items-center md:justify-between md:gap-10 md:p-12">
          <div>
            <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
              The audit
            </p>
            <h2 className="display-type mt-3 max-w-[25ch] text-2xl font-semibold leading-tight md:text-3xl">
              Send me a link to your API repo or SDK docs, and I’ll flag one specific gap.
            </h2>
            <p className="mt-4 text-sm leading-6 text-surface/60">
              No cost, no obligation. If it’s useful, we can talk about the rest.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-7 shrink-0 bg-cobalt text-ink hover:bg-signal-soft md:mt-0"
          >
            <Link to="/contact">
              Start the conversation <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
