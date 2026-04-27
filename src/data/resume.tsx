import { Icons } from "@/components/icons";

export const DATA = {
  name: "Almog Kashany",
  initials: "AK",
  url: "https://almogkashany.com",
  location: "Kadima-Zoran, Israel",
  description: "Senior Software Engineer",
  summary: `I am a senior software engineer with a solid background in both front and back development, intending to be a leader on a
team with technical expertise, encouraging professional growth and allowing for impactful contributions to innovative projects.`,
  avatarUrl: "/me.jpg",
  skills: [
    "TypeScript",
    "JavaScript",
    "Java",
    "C#",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Node.js",
    "Redis",
    "Python",
    "Docker",
  ],
  navbar: [
    //{ href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "almogk012@gmail.com",
    tel: "+972543534172",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/almogk012",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/almog-kashany",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      id: "stealth",
      company: "Stealth Mode",
      href: "#",
      badges: [],
      location: "Remote · Israel",
      title: "Founding Engineer",
      logoUrl: "/me.jpg",
      start: "March 2026",
      end: "Present",
      year: "2026",
      chapter: "V",
      tagline: "Heads down. Stealth mode.",
      kicker: "The current chapter",
      stack: ["TypeScript", "React", "AI / LLM", "Cloud"],
      highlights: [
        "Founding-engineer territory on a new AI-native product",
        "Designing the product from architecture to UX",
        "AI/LLM doing real work — not party tricks",
        "More to share when the curtain lifts",
      ],
      description:
        "Heads down on a new product where AI does serious work. Building behind a closed door — design, architecture, frontend, backend, infra. The world hears about it when it ships.",
      theme: {
        background: "#04050a",
        surface: "#0a0e1c",
        ink: "#f1f5f9",
        muted: "#a5f3fc",
        accent: "#22d3ee",
        accent2: "#a78bfa",
        glow: "rgba(34, 211, 238, 0.55)",
      },
    },
    {
      id: "imperva",
      company: "Imperva",
      href: "https://www.imperva.com/",
      badges: [],
      location: "Tel Aviv",
      title: "Software Engineer · DSPM / FAM",
      logoUrl: "/imperva.png",
      start: "June 2024",
      end: "Present",
      description: `In this role, I reached a front-end position and advanced to develop core full-stack features from end to end,
         working in micro-service architecture, using technologies such as React and Java, based on AWS environment.`,
    },
    {
      id: "microsoft",
      company: "Microsoft",
      href: "https://www.microsoft.com/",
      badges: [],
      location: "Herzliya",
      title: "Software Engineer · Defender for IoT & Immune",
      logoUrl: "/msft.jpeg",
      start: "June 2020",
      end: "June 2024",
      description: `In this role, I led the planning and redesign product’s UI by migrating AngularJS to React, mentoring new
                    coworkers who joined to team, working with Azure services, Led development and design of a troubleshooting
                    tool, including working directly with customers, in addition, to installing the product at a corporation on a site
                    abroad as a representative of the development department, using technologies such as React, Java, Python,
                    MySql, Redis, Ubuntu(linux env).
            And had the chance to joined to A new product in Posture management area, which provides the ability of
      organizations to apply policies of their endpoints, I led core features end to end, including development
      and devops tasks on Microsoft pipelines, using technologies such as React, C#, .NET CORE, CosmosDB,
      Kusto.`,
    },
    {
      id: "cyberx",
      company: "CyberX",
      href: "https://www.linkedin.com/company/cyberx-labs/",
      badges: [],
      location: "Herzliya",
      title: "Software Engineer",
      logoUrl: "/cyberxLabs.jpeg",
      start: "May 2018",
      end: "June 2020",
      year: "2018",
      chapter: "II",
      tagline: "Signals on the wire",
      kicker: "Industrial security, on-prem grit",
      stack: ["Network Protocols", "Linux", "Python", "On-Prem"],
      highlights: [
        "Developed internal and external product modules end-to-end",
        "Built and maintained components powering operational workflows",
        "Worked deep with network protocols and on-prem production systems",
        "Drove operating-system upgrades and system-level improvements",
      ],
      description:
        "Industrial cybersecurity platform — internal and external product modules, end-to-end. Network-protocol fluency, on-prem production systems, and operating-system upgrades across customer fleets.",
      theme: {
        background: "#020a0a",
        surface: "#04161a",
        ink: "#ecfeff",
        muted: "#a7f3d0",
        accent: "#10b981",
        accent2: "#22d3ee",
        glow: "rgba(16, 185, 129, 0.55)",
      },
    },
    {
      id: "netcraft",
      company: "Netcraft",
      href: "https://netcraft.co.il/",
      badges: [],
      location: "Tel Aviv",
      title: "Software Engineer",
      logoUrl: "/netcraft.png",
      start: "June 2017",
      end: "May 2018",
      year: "2017",
      chapter: "I",
      tagline: "Where it all began",
      kicker: "First client work, real shipping",
      stack: ["AngularJS", "JavaScript", "HTML/CSS"],
      highlights: [
        "Built customer-facing web applications in AngularJS",
        "Collaborated with designers and backend devs on production UI",
        "Delivered responsive, brand-true interfaces under real deadlines",
      ],
      description:
        "First chapter. Customer-facing web apps in AngularJS, working hand-in-hand with designers and backend devs to deliver responsive, production-ready UI under real-world deadlines.",
      theme: {
        background: "#1a0c05",
        surface: "#2a1410",
        ink: "#fff7ed",
        muted: "#fed7aa",
        accent: "#fb923c",
        accent2: "#fbbf24",
        glow: "rgba(251, 146, 60, 0.55)",
      },
    },
  ],
  education: [
    {
      school: "Sela",
      href: "https://www.sela.co.il/",
      degree: "Full Stack Programming Development Studies",
      logoUrl: "/sela-black.svg",
      start: "Jan 2016",
      end: "Aug 2016",
    },
  ],
  projects: [
    {
      title: "Marzevim BaSharon",
      href: "http://www.marzevimbasharon.co.il",
      dates: "2015",
      active: true,
      description:
        "As a student, my first project was creating a marketing website for a local business, including development, domain management, and hosting.",
      technologies: ["AngularJs", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "http://www.marzevimbasharon.co.il",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/marzevim.png",
      video: "",
    },
    {
      title: "Notnim Yad",
      href: "https://notnim-yad.net",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A volunteer project to raise awareness of the abductees through mutual support among people",
      technologies: [
        "Vue",
        "Typescript",
        "Php",
        "Nuxt",
        "TailwindCSS",
        "Contentful",
      ],
      links: [
        {
          type: "Website",
          href: "https://notnim-yad.net",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/notnim.png",
      video: "",
    },
    {
      title: "Heseim",
      href: "https://www.heseim.com",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A volunteer project to implement a website for a local business, including development, domain management, and hosting.",
      technologies: [
        "Lovable",
        "React",
        "Typescript",
        "Netlify functions",
        "vite",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://heseim.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/heseim.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Microsoft Global Hackathon 2022 Award Winner",
      dates: "2022",
      location: "Herzeliya",
      description:
        "Developed set of music boxes which play the full song when the user matched the correct order of the music hints.",
      links: [],
      image: "",
    },
  ],
} as const;
