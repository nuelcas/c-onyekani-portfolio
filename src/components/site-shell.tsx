import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Writing", to: "/blog" as const },
  { label: "Contact", to: "/contact" as const },
];

const externalLinks = [
  {
    label: "GitHub",
    url: "https://github.com/nuelcas",
  },
  {
    label: "freeCodeCamp",
    url: "https://www.freecodecamp.org/news/author/Casmir/",
  },
  {
    label: "Casblog",
    url: "https://casblog.hashnode.dev/",
  },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-surface text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-surface/95 backdrop-blur-sm">
        <nav className="page-shell flex h-16 items-center justify-between" aria-label="Primary">
          <Link
            to="/"
            className="display-type text-[0.95rem] font-semibold tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            Casmir Onyekani <span className="mono-type text-xs font-medium text-mist">/ docs</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-ink/5 text-ink" }}
                inactiveProps={{
                  className: "text-mist hover:bg-ink/5 hover:text-ink",
                }}
                className="rounded-md px-3 py-2 text-[0.8rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-ink text-surface hover:bg-ink/85">
              <Link to="/contact">
                Send an audit link <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="border-ink/15 bg-transparent text-ink md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </nav>

        {mobileOpen ? (
          <div className="border-t border-ink/10 bg-surface md:hidden">
            <div className="page-shell flex flex-col gap-1 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-ink/5 text-ink" }}
                  inactiveProps={{ className: "text-mist" }}
                  className="rounded-md px-3 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {children}

      <footer className="border-t border-ink/10 bg-surface">
        <div className="page-shell flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="display-type text-sm font-semibold">Casmir Onyekani</p>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">
              Software Engineer &amp; Technical Writer making complex systems clearer to the people
              who build with them.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-mist transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav
              className="flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-4 text-sm"
              aria-label="External links"
            >
              {externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <p className="mono-type text-xs text-mist">© {currentYear} Casmir Onyekani</p>
        </div>
      </footer>
    </div>
  );
}
