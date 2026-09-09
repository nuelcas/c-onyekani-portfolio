// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react";

// import { Button } from "@/components/ui/button";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact Casmir Onyekani — Technical Writer & Developer" },
//       {
//         name: "description",
//         content:
//           "Get in touch with Casmir Onyekani for technical writing, API and SDK documentation, developer education, and software development projects.",
//       },
//       {
//         property: "og:title",
//         content: "Contact Casmir Onyekani — Technical Writer & Developer",
//       },
//       {
//         property: "og:description",
//         content:
//           "Get in touch for technical writing, API and SDK documentation, developer education, and software development projects.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: ContactPage,
// });

// const socialLinks = [
//   {
//     label: "LinkedIn",
//     icon: Linkedin,
//     url: "https://www.linkedin.com/in/casmir-onyekani/",
//   },
//   {
//     label: "X / Twitter",
//     icon: Twitter,
//     url: "https://x.com/casweb_dev",
//   },
//   {
//     label: "Facebook",
//     icon: null,
//     url: "https://web.facebook.com/nuelcas/",
//   },
// ];

// function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     const form = event.currentTarget;
//     const formData = new FormData(form);

//     try {
//       await fetch("/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams(formData as any).toString(),
//       });

//       setSubmitted(true);
//       form.reset();
//     } catch (error) {
//       console.error("Form submission failed:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <main className="page-shell py-16 lg:py-24">
//       <div className="grid gap-14 lg:grid-cols-12">
//         <header className="lg:col-span-5">
//           <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
//             Contact / get in touch
//           </p>

//           <h1 className="display-type mt-5 text-4xl font-semibold leading-tight md:text-6xl">
//             Have a technical project, product, or documentation challenge?
//           </h1>

//           <p className="mt-7 text-lg leading-8 text-mist">
//             Tell me what you are building, what you need documented, or where your users are getting
//             stuck. I’ll review your message and get back to you.
//           </p>

//           <div className="mt-10 border-t border-ink/10 pt-6">
//             <p className="mono-type text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
//               Keep in touch
//             </p>

//             <div className="mt-4 space-y-3">
//               {socialLinks.map(({ label, icon: Icon, url }) => (
//                 <a
//                   key={label}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-between border-b border-ink/10 pb-3 text-sm transition-colors hover:text-cobalt"
//                 >
//                   <span className="flex items-center gap-3 font-semibold text-ink">
//                     {Icon ? (
//                       <Icon className="size-4 text-cobalt" aria-hidden="true" />
//                     ) : (
//                       <span
//                         className="size-4 text-center font-semibold text-cobalt"
//                         aria-hidden="true"
//                       >
//                         f
//                       </span>
//                     )}

//                     {label}
//                   </span>

//                   <ArrowRight
//                     className="size-4 text-mist transition-transform group-hover:translate-x-1"
//                     aria-hidden="true"
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </header>

//         <section className="lg:col-span-7">
//           <form
//             name="contact"
//             method="POST"
//             data-netlify="true"
//             netlify-honeypot="bot-field"
//             onSubmit={handleSubmit}
//             className="rounded-xl bg-ink p-6 text-surface md:p-9"
//           >
//             <input type="hidden" name="form-name" value="contact" />

//             <p className="hidden">
//               <label>
//                 Don’t fill this out if you’re human: <input name="bot-field" />
//               </label>
//             </p>

//             <div className="mb-8">
//               <Mail className="size-6 text-cobalt" aria-hidden="true" />

//               <h2 className="display-type mt-6 text-2xl font-semibold">
//                 Let’s talk about your project.
//               </h2>

//               <p className="mt-3 text-sm leading-6 text-surface/60">
//                 Share a little context about what you need. I’ll review your message and respond by
//                 email.
//               </p>
//             </div>

//             {submitted && (
//               <div className="mb-6 rounded-md border border-cobalt/30 bg-cobalt/10 p-4 text-sm">
//                 <p className="font-semibold text-cobalt">Message sent successfully.</p>
//                 <p className="mt-1 text-surface/70">
//                   Thanks for reaching out. I’ll review your message and get back to you by email.
//                 </p>
//               </div>
//             )}

//             <div className="space-y-5">
//               <div>
//                 <label htmlFor="name" className="mb-2 block text-sm font-semibold">
//                   Name
//                 </label>

//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   autoComplete="name"
//                   required
//                   className="w-full rounded-md border border-surface/15 bg-surface/5 px-4 py-3 text-sm text-surface outline-none placeholder:text-surface/35 focus:border-cobalt focus:ring-2 focus:ring-cobalt/30"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="mb-2 block text-sm font-semibold">
//                   Email
//                 </label>

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="w-full rounded-md border border-surface/15 bg-surface/5 px-4 py-3 text-sm text-surface outline-none placeholder:text-surface/35 focus:border-cobalt focus:ring-2 focus:ring-cobalt/30"
//                   placeholder="you@company.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="mb-2 block text-sm font-semibold">
//                   Message
//                 </label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={6}
//                   className="w-full resize-y rounded-md border border-surface/15 bg-surface/5 px-4 py-3 text-sm text-surface outline-none placeholder:text-surface/35 focus:border-cobalt focus:ring-2 focus:ring-cobalt/30"
//                   placeholder="Tell me about your project, documentation needs, or the problem you want to solve."
//                 />
//               </div>

//               <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "Send message"}
//                 {!isSubmitting && <ArrowRight aria-hidden="true" />}
//               </Button>
//             </div>
//           </form>
//         </section>
//       </div>
//     </main>
//   );
// }

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Casmir Onyekani — Technical Writer & Developer",
      },
      {
        name: "description",
        content:
          "Get in touch with Casmir Onyekani for technical writing, API and SDK documentation, developer education, and software development projects.",
      },
      {
        property: "og:title",
        content: "Contact Casmir Onyekani — Technical Writer & Developer",
      },
      {
        property: "og:description",
        content:
          "Get in touch for technical writing, API and SDK documentation, developer education, and software development projects.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: ContactPage,
});

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/casmir-onyekani/",
  },
  {
    label: "X / Twitter",
    icon: Twitter,
    url: "https://x.com/casweb_dev",
  },
  {
    label: "Facebook",
    icon: null,
    url: "https://web.facebook.com/nuelcas/",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const body = new URLSearchParams();

      formData.forEach((value, key) => {
        body.append(key, value.toString());
      });

      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell py-16 lg:py-24">
      <div className="grid gap-14 lg:grid-cols-12">
        <header className="lg:col-span-5">
          <p className="mono-type text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
            Contact / get in touch
          </p>

          <h1 className="display-type mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Have a technical project, product, or documentation challenge?
          </h1>

          <p className="mt-7 text-lg leading-8 text-mist">
            Tell me what you are building, what you need documented, or where your users are getting
            stuck. I’ll review your message and get back to you.
          </p>

          <div className="mt-10 border-t border-ink/10 pt-6">
            <p className="mono-type text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
              Keep in touch
            </p>

            <div className="mt-4 space-y-3">
              {socialLinks.map(({ label, icon: Icon, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-ink/10 pb-3 text-sm transition-colors hover:text-cobalt"
                >
                  <span className="flex items-center gap-3 font-semibold text-ink">
                    {Icon ? (
                      <Icon className="size-4 text-cobalt" aria-hidden="true" />
                    ) : (
                      <span
                        className="size-4 text-center font-semibold text-cobalt"
                        aria-hidden="true"
                      >
                        f
                      </span>
                    )}

                    {label}
                  </span>

                  <ArrowRight
                    className="size-4 text-mist transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className="lg:col-span-7">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-xl bg-ink p-6 text-surface md:p-9"
          >
            <input type="hidden" name="form-name" value="contact" />

            <p className="hidden">
              <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" />
              </label>
            </p>

            <div className="mb-8">
              <Mail className="size-6 text-cobalt" aria-hidden="true" />

              <h2 className="display-type mt-6 text-2xl font-semibold">
                Let’s talk about your project.
              </h2>

              <p className="mt-3 text-sm leading-6 text-surface/60">
                Share a little context about what you need. I’ll review your message and respond by
                email.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 rounded-md border border-cobalt/30 bg-cobalt/10 p-4 text-sm">
                <p className="font-semibold text-cobalt">Message sent successfully.</p>

                <p className="mt-1 text-surface/70">
                  Thanks for reaching out. I’ll review your message and get back to you by email.
                </p>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-md border border-surface/15 bg-surface/5 px-4 py-3 text-sm text-surface outline-none placeholder:text-surface/35 focus:border-cobalt focus:ring-2 focus:ring-cobalt/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-surface/15 bg-surface/5 px-4 py-3 text-sm text-surface outline-none placeholder:text-surface/35 focus:border-cobalt focus:ring-2 focus:ring-cobalt/30"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-y rounded-md border border-surface/15 bg-surface/5 px-4 py-3 text-sm text-surface outline-none placeholder:text-surface/35 focus:border-cobalt focus:ring-2 focus:ring-cobalt/30"
                  placeholder="Tell me about your project, documentation needs, or the problem you want to solve."
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}

                {!isSubmitting && <ArrowRight aria-hidden="true" />}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
