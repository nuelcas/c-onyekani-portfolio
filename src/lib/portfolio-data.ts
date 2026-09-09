export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  status: string;
  tags: string[];
  url?: string;
};

export type Publication = {
  title: string;
  summary: string;
  category: string;
  platform: string;
  tags: string[];
  url?: string;
};

export const capabilities = [
  {
    number: "01",
    title: "API & SDK documentation",
    description:
      "Endpoint references, authentication flows, payloads, SDK usage, and integration paths built around the questions developers ask.",
    keywords: "API reference · SDK guide · auth",
  },
  {
    number: "02",
    title: "Quantum & deep-tech documentation",
    description:
      "Qiskit tutorials, IBM Quantum integrations, simulators, hardware connectivity, and 1D/2D architecture concepts.",
    keywords: "Qiskit · circuits · hardware",
  },
  {
    number: "03",
    title: "Code-heavy technical tutorials",
    description:
      "Implementation-focused guides with working examples that readers can reproduce, inspect, and adapt.",
    keywords: "Python · JavaScript · tested code",
  },
  {
    number: "04",
    title: "Cloud, DevOps & docs-as-code",
    description:
      "CI/CD, Azure, Markdown, Git, static documentation systems, and engineering workflows.",
    keywords: "Azure · CI/CD · Markdown",
  },
];

export const stackGroups = [
  { title: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL / MySQL"] },
  { title: "Web & services", items: ["React", "Node.js", "Django", "Tailwind CSS"] },
  { title: "Quantum", items: ["Qiskit", "IBM Quantum", "Simulators", "Hardware connectivity"] },
  { title: "Cloud & infrastructure", items: ["Azure", "CI/CD", "Developer workflows"] },
  { title: "Documentation", items: ["Markdown", "Git", "Static site generators", "Docs-as-Code"] },
];

export const projects: PortfolioProject[] = [
  {
    title: "Built to solve real problems",
    category: "Selected build",
    description:
      "Projects that demonstrates product thinking, thoughtful implementation choices, practical problem-solving, and a clear technical approach from concept through development. They highlights how real-world requirements are translated into functional features, with attention to usability, architecture, and maintainable code.",
    status: "Record Reserved",
    tags: ["Project archive", "User adoption"],
  },
  {
    title: "D'Luxe Beauty Suites",
    category: "Featured",
    description:
      "A beauty and wellness platform for salons, spas, and wellness centers, featuring services, bookings, content publishing, customer and membership management.",
    status: "Live",
    url: "https://dluxebeautysuite.netlify.app/",
    tags: ["React", "Supabase", "MongoDB"],
  },
  {
    title: "Clean-Up",
    category: "Featured",
    description:
      "A cleaning-services platform connecting clients with cleaners through service matching, scheduling, pricing negotiation, and secure payments.",
    status: "Live",
    url: "https://clean-up-app.vercel.app/",
    tags: ["TypeScript", "Node.js", "Cleaning Service"],
  },
  {
    title: "High-Ranking SEO Landing Page",
    category: "Featured",
    description:
      "Build a high-ranking SEO landing page that pull traffic and convert, tailored for affiliate marketers",
    status: "Live",
    url: "https://ecorunningshoes.netlify.app/",
    tags: ["TypeScript", "SEO-Landing Page", "GitHub Actions"],
  },
  {
    title: "PingTask",
    category: "Featured",
    description:
      "An interactive web application demonstrating frontend development, application logic, responsive design, and practical JavaScript implementation.",
    status: "Live",
    url: "https://pingtask.netlify.app/",
    tags: ["JavaScript", "React", "Frontend"],
  },
  {
    title: "Alpha Plus Cleaning Products",
    category: "Featured",
    description:
      "A product-focused web application created for showcasing and presenting Alpha Plus cleaning products through a dedicated digital storefront.",
    status: "Live",
    url: "https://nuelcas.github.io/alpha-plus-cleaning-products/",
    tags: ["React", "Web Development", "Business"],
  },
  {
    title: "Nuel Cas Cleaners",
    category: "Featured",
    description:
      "A cleaning-services web platform built to present cleaning services, connect customers with service offerings, and support a professional online presence.",
    status: "Live",
    url: "https://nuelcas.github.io/Nuel-cas-cleaners/",
    tags: ["React", "Web Development", "Services"],
  },
];

export const publications: Publication[] = [
  {
    title: "Automated CI/CD Pipeline",
    summary:
      "Automated Slangify deployments with GitHub Actions and the Seenode API, replacing manual deployments with a streamlined CI/CD workflow.",
    category: "Seenode API",
    platform: "Published",
    tags: ["GitHub Actions", "Seenode API", "CI/CD"],
    url: "https://casblog.hashnode.dev/continuous-deployment-made-easy-automate-nodejs-deployments-on-seenode-using-github-actions",
  },
  {
    title: "Software Architecture",
    summary:
      "A scalable Azure Repos framework designed to address repository sprawl, inconsistent structures, and governance gaps.",
    category: "Azure DevOps",
    platform: "Published",
    tags: ["Azure DevOps", "Azure Repos", "Software Architecture"],
    url: "https://www.freecodecamp.org/news/how-to-organize-and-maintain-azure-repositories-at-scale/",
  },
  {
    title: "Connectivity & Architecture",
    summary:
      "Making coupling maps, routing, SWAP gates, circuit depth, and 1D/2D quantum architectures easier to understand and reason about.",
    category: "Technical systems",
    platform: "Published",
    tags: ["Qiskit", "Connectivity", "Architecture"],
    url: "https://www.freecodecamp.org/news/why-2d-trapped-ion-quantum-computers-could-be-easier-to-scale-than-1d-architectures/",
  },
  {
    title: "How to Structure Your README File – README Template Example",
    summary:
      "A practical guide to structuring README files with a clear template that helps developers understand, use, and contribute to a project.",
    category: "Developer education",
    platform: "Published",
    tags: ["README", "GitHub", "Documentation"],
    url: "https://www.freecodecamp.org/news/how-to-structure-your-readme-file/",
  },
  {
    title: "How to Build a MERN Stack To-Do App",
    summary:
      "A hands-on tutorial that walks developers through building a full-stack To-Do application using MongoDB, Express, React, and Node.js.",
    category: "Software development",
    platform: "Published",
    tags: ["MERN", "React", "Node.js"],
    url: "https://www.freecodecamp.org/news/how-to-build-a-mern-stack-to-do-app/",
  },
  {
    title: "Introduction to Data Structures: Tips and Tricks for Efficient Programming",
    summary:
      "An introduction to fundamental data structures and practical techniques for choosing and using them efficiently when solving programming problems.",
    category: "Developer education",
    platform: "Published",
    tags: ["Data Structures", "Programming", "Algorithms"],
    url: "https://casblog.hashnode.dev/introduction-to-data-structures-tips-and-tricks-for-efficient-programming",
  },
  {
    title: "Why Your Quantum Circuit Works in a Simulator but Fails on Real Hardware",
    summary:
      "A practical guide to noise, execution differences, and the realities of moving a circuit from simulation to quantum hardware.",
    category: "Quantum computing",
    platform: "Published",
    tags: ["Qiskit", "Hardware", "Noise"],
    url: "https://www.freecodecamp.org/news/why-your-quantum-circuit-works-in-a-simulator-but-fails-on-real-hardware-full-handbook/",
  },
  {
    title: "How to Build High-Ranking SEO Landing Pages that Pull Traffic and Convert",
    summary:
      "This guide walks you through how I researched, structured, built, and deployed a real SEO landing page tailored for affiliate marketers.",
    category: "SEO & marketing",
    platform: "Published",
    tags: ["SEO", "Landing Pages", "Affiliate Marketing"],
    url: "https://www.freecodecamp.org/news/how-to-build-high-ranking-seo-landing-pages-that-pull-traffic-and-convert/",
  },
  {
    title: "How to Write Your First Quantum Circuit in Python: A Beginner's Step-by-Step Guide",
    summary:
      "A practical introduction to building quantum circuits in Python with an emphasis on code that new quantum computing learners can run and understand.",
    category: "Developer education",
    platform: "Published",
    tags: ["Python", "Qiskit", "Tutorial"],
    url: "https://www.freecodecamp.org/news/how-to-write-your-first-quantum-circuit-in-python-a-beginner-s-step-by-step-guide/",
  },
  {
    title: "How Quantum Connectivity Shapes What Your Quantum Computer Can Actually Compute",
    summary:
      "A technical look at coupling maps, routing, SWAP gates, circuit depth, and the relationship between circuit design and hardware topology.",
    category: "Quantum computing",
    platform: "Published",
    tags: ["Connectivity", "Qiskit", "Circuits"],
    url: "https://www.freecodecamp.org/news/how-quantum-connectivity-shapes-what-your-quantum-computer-can-actually-compute/",
  },
];
