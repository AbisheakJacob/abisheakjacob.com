import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abisheak Jacob J",
  initials: "AJ",
  location: "Bengaluru, India",
  about: "Analytics Professional, building digital and optimization solutions",
  summary:
    "I am an analytics professional with 1.5 years of experience in managing digital and optimization projects, specializing in operations, supply chain, purchasing, and project management areas. I am skilled in data profiling, dimensional and relational data modeling, requirements gathering, risk & gap analysis, and process optimization. I am eager to leverage my strong data analysis, visualization, and programming skills to contribute to data-driven decision making and support digital transformation initiatives.",
  avatarUrl: "/abisheakjacob.jpg",
  personalWebsiteUrl: "https://PLACEHOLDER_WEBSITE.com",
  resumeUrl: "/PLACEHOLDER_RESUME.pdf",
  extendedBio: `
## My Professional Journey

I began my journey... PLACEHOLDER_BIO
`,
  contact: {
    email: "PLACEHOLDER_EMAIL@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/PLACEHOLDER_GITHUB",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/PLACEHOLDER_LINKEDIN/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/PLACEHOLDER_TWITTER",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Jagdish Sheth School of Management",
      degree: "PGDM, Analytics and Digital Business - (Area Topper), Marketing (Minor) - Dean and Directors Honor List",
      start: "2022",
      end: "2024",
    },
    {
      school: "Mepco Schlenk Engineering College",
      degree: "B.E. Mechanical Engineering (First Class with Distinction)",
      start: "2016",
      end: "2020",
    },
    {
      school: "Christuraja Matriculation Higher Secondary School",
      degree: "Higher Secondary Education",
      start: "",
      end: "2016",
    }
  ],
  work: [
    {
      company: "Impact Analytics",
      link: "https://placeholder-impact-url.com",
      badges: ["On Site"],
      title: "AI Analyst - Implementation",
      start: "Jun 2025",
      end: "Present",
      description: "Working as AI Analyst Implementation focus within the company.",
      roles: [
        {
          title: "AI Analyst - Implementation",
          start: "Nov 2025",
          end: "Present",
          description: "Working as AI Analyst Implementation focus.",
        },
        {
          title: "Business Analyst",
          start: "Jun 2025",
          end: "Nov 2025",
          description: "Business Analyst role.",
        }
      ]
    },
    {
      company: "Bosch Automotive Electronics India Pvt. Ltd.",
      link: "https://PLACEHOLDER_BOSCH_URL.com",
      badges: ["On Site"],
      title: "Management Trainee",
      start: "Jun 2024",
      end: "Jun 2025",
      description:
        "Purchasing Data Analytics role focused on designing and developing digital solutions. Techno-Commercial role in purchasing, managed connectors and Die Cast from local and global suppliers. Led end-to-end implementation of statistical component costing solution, which resulted in the reduction of costing lead time by 2 days and provided an increased data accuracy of more than 96%. Built project performance dashboards and Head Count trackers for executive reporting.",
    },
    {
      company: "Tata Insights and Quants",
      link: "https://PLACEHOLDER_TATA_URL.com",
      badges: ["Remote"],
      title: "Optimization Research Analyst",
      start: "Oct 2023",
      end: "Mar 2024",
      description:
        "Designed Array based crew scheduling and route optimization model in an Agile team that increased resource usage by 40% and model efficiency by 2.4x. Conducted requirement gathering from 15+ airline industry stakeholders and translated them into actionable insights.",
    }
  ],
  skills: [
    "MS Excel (VBA)",
    "Power BI (DAX)",
    "Python",
    "SQL",
    "Leadership",
    "Writing",
    "OR Tools"
  ],
  researchProjects: [
    {
      title: "PLACEHOLDER_ACADEMIC_PROJECT_1",
      techStack: ["PLACEHOLDER_TECH"],
      description: "PLACEHOLDER_DESCRIPTION_FOR_PROJECT",
    }
  ],
  open_source: [
    "https://github.com/adithya-s-k/PLACEHOLDER_REPO",
  ],
  projects: [
    {
      title: "PLACEHOLDER_PROJECT_1",
      techStack: ["PLACEHOLDER_TECH"],
      description: "PLACEHOLDER_DESCRIPTION",
    }
  ],
  extraCurricular: [
    {
      title: "PLACEHOLDER_EXTRA_CURRICULAR",
      description: "PLACEHOLDER_DESCRIPTION",
    }
  ],
  publications: [
    {
      title: "PLACEHOLDER_PUBLICATION_TITLE",
      description: "PLACEHOLDER_DESCRIPTION",
      publisher: "PLACEHOLDER_PUBLISHER",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://PLACEHOLDER_URL.com",
      resourceUrl: "https://PLACEHOLDER_URL.com",
      citation: "_",
      tags: ["placeholder tag"],
      showLinks: false,
    }
  ],
  achievements: [
    {
      title: "Lean Six Sigma Certification",
      date: "2024",
      description: "Council of Six Sigma Certification",
      tags: ["Certification"],
      fullDescription: "Obtained Lean Six Sigma Certification from the Council of Six Sigma Certification."
    }
  ],
  blogs: [
    {
      slug: "placeholder-blog",
      title: "PLACEHOLDER_BLOG_TITLE",
      date: "2025-01-01",
      excerpt: "PLACEHOLDER_EXCERPT",
      tags: ["Placeholder"],
      readingTime: "5 min read",
      published: true,
      content: "# PLACEHOLDER_BLOG_TITLE\nThis is a placeholder blog post."
    }
  ],
} as const;
