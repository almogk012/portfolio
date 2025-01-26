import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Almog Kashany",
  initials: "DV",
  url: "https://almogkashany.com",
  location: "San Francisco, CA",
  description: "Senior Software Engineer",
  summary:
    "I am a senior developer with a solid background in both front-end and back-end development, intending to be a leader on a team with technical expertise, encouraging professional growth and allowing for impactful contributions to innovative projects.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Docker",
    "Java",
    "C#",
    "Python",
    "SQL",
    "MongoDB",
    "Redis",
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
      description:
        "In this role, I designed and implemented new modules for a new integration product with core products on the corporate and cloud services",
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
      description: `In this role, I led the planning and redesign of a product, including the implementation of React,
       mentoring new people who arrived, working with cloud services, developing and designing a tool for troubleshooting network and configuration issues,
        including working directly with customers, in addition to installing the product at a corporation on a site abroad as a representative of the development department.
      And had the chance to Setting up a new product, which had just completed POC, end-to-end including connecting the product to Microsoft pipelines and creating communication channels with colleagues in parallel groups.`,
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
      start: "2016",
      end: "2016",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
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
