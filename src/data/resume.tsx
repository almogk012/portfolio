import { Icons } from "@/components/icons";

export const DATA = {
  name: "Almog Kashany",
  initials: "DV",
  url: "https://almogkashany.com",
  location: "San Francisco, CA",
  description: "Senior Software Engineer",
  summary: `I am a senior software engineer with a solid background in both front and back development, intending to be a leader on a
team with technical expertise, encouraging professional growth and allowing for impactful contributions to innovative projects.`,
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "JavaScript",
    "Java",
    "C#",
    "SQL",
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
      company: "Imperva",
      href: "https://www.imperva.com/",
      badges: [],
      location: "Tel aviv",
      title: "Software Engineer",
      logoUrl: "/imperva.png",
      start: "June 2024",
      end: "Present",
      description: `In this role, I reached a front-end position and advanced to develop core full-stack features from end to end,
         working in micro-service architecture, using technologies such as React and Java, based on AWS environment.`,
    },
    {
      company: "Microsoft",
      href: "https://www.microsoft.com/",
      badges: [],
      location: "Herzeliya",
      title: "Software Engineer (SDE II)",
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
      company: "CyberX",
      href: "https://www.linkedin.com/company/cyberx-labs/",
      badges: [],
      location: "Herzeliya",
      title: "Software developer",
      logoUrl: "/cyberxLabs.jpeg",
      start: "May 2018",
      end: "June 2020",
      description:
        "Assisted in developing a new product, gaining experience in network protocols and led processes for developing new modules end to end, including work on upgrading an operating system for on-prem systems.",
    },
    {
      company: "Netcraft",
      href: "https://netcraft.co.il/",
      badges: [],
      location: "Tel Aviv",
      title: "Frontend Developer",
      logoUrl: "/netcraft.png",
      start: "June 2017",
      end: "May 2018",
      description:
        "Implementing full modules for esteemed clients including DELL-EMC, Marvell, Bezeq144, and mPrest.",
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
