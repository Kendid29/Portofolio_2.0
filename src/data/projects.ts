export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  challenge: string;
  learning: string;
  features: { title: string; description: string }[];
  cover: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "schoolcanteen",
    title: "SchoolCanteen",
    category: "Digital Canteen Ordering & Pickup System",
    description: "A web application that helps students order food and manage pickup processes digitally.",
    role: "Frontend Developer",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    challenge: "Building reusable interfaces and integrating frontend with backend services.",
    learning: "Frontend architecture and real product workflow.",
    cover: "/images/projects/schoolcanteen/overviewcanteen.webp",
    gallery: [
      "/images/projects/schoolcanteen/feature1canteen.webp",
      "/images/projects/schoolcanteen/feature2canteen.webp",
    ],
    features: [
      { title: "Food ordering", description: "Seamless selection of meals." },
      { title: "Pickup verification", description: "QR-based pickup flow." },
    ],
  },
  {
    slug: "it-clinic",
    title: "IT Clinic",
    category: "Hardware & Software Service Management",
    description: "A service management system for handling hardware and software repair workflows.",
    role: "Frontend Developer",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    challenge: "Representing system states clearly through interface design.",
    learning: "Workflow-based UI development.",
    cover: "/images/projects/it-clinic/overviewit.webp",
    gallery: [
      "/images/projects/it-clinic/overviewit.webp",
    ],
    features: [
      { title: "Multi-role dashboard", description: "Dashboards for admin and staff." },
      { title: "Service tracking", description: "Realtime tracking of repair states." },
    ],
  },
  {
    slug: "wedding",
    title: "Wedding Invitation",
    category: "Interactive Web Invitation",
    description: "A personal project focused on interactive wedding invitation experience.",
    role: "Independent Developer",
    technologies: ["HTML", "CSS", "JavaScript"],
    challenge: "Creating an engaging visual web experience.",
    learning: "Frontend interaction and visual design.",
    cover: "/images/projects/wedding/overviewwedding.webp",
    gallery: [
      "/images/projects/wedding/feature1wedding.webp",
    ],
    features: [
      { title: "Countdown", description: "Live countdown to the event." },
      { title: "Guest message", description: "Interactive guestbook." },
    ],
  }
];
