import { motion } from "motion/react";
import ServiceCard, { type Service } from "../components/ServiceCard";

type ServicesProps = {};

const Services = ({}: ServicesProps) => {
  const services: Service[] = [
    {
      title: "Frontend Development",
      description:
        "Designing and developing modern, responsive, and accessible user interfaces with an emphasis on performance, seamless user experience, and efficient API integration.",
      img: <i className="fas fa-code text-3xl"></i>,
      items: [
        "TypeScript, JavaScript",
        "HTML5, CSS3",
        "React, Tailwind CSS",
        "Server State Management (TanStack Query)",
        "Form State Management (TanStack Form) & Schema Validation (Zod)",
        "RESTful API Integration & Data Fetching Strategies",
        "Caching, Mutations & Optimistic Updates",
        "Responsive & Adaptive Design",
        "UI/UX & Accessibility Best Practices",
      ],
    },

    {
      title: "Backend Development",
      description:
        "Developing robust, secure, and scalable server-side applications and APIs that bridge frontend and backend effectively. Experienced with modern deployment, testing, and JWT-based authentication.",
      img: <i className="fa-solid fa-server text-3xl"></i>,
      items: [
        "Java, TypeScript, C#, C, C++, Python",
        "NestJS, Spring Boot, Express.js, Node.js",
        "PostgreSQL, MySQL",
        "Authentication & Authorization (JWT)",
        "Database Design & Management & Caching",
        "RESTful API Architecture & Testing",
        "Containerization: Docker",
      ],
    },

    {
      title: "DevOps & Deployment",
      description:
        "Implementing efficient deployment workflows and containerization strategies to ensure scalability, reliability, and seamless integration across environments.",
      img: <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>,
      items: [
        "Containerization & Orchestration: Docker, Docker Compose",
        "Cloud Platforms: AWS (S3, CloudFront, Route 53, ECS, ECR), Netlify, Render, Neon",
        "Version Control & Collaboration: Git & GitHub",
        "CI/CD Pipelines: GitHub Actions",
      ],
    },

    {
      title: "Tools & Environment",
      description:
        "Technologies and platforms that streamline collaboration, enhance automation, and maintain code quality across the development lifecycle.",
      img: <i className="fa-solid fa-wrench text-3xl"></i>,
      items: [
        "Version Control: Git & GitHub",
        "API Testing & Documentation: Postman, Swagger",
        "UI Collaboration: Figma",
        "Development Tools: VS Code, IntelliJ IDEA",
        "Operating Systems: Linux",
      ],
    },

    {
      title: "Personal & Soft Skills",
      description:
        "Soft skills that complement my technical expertise, fostering strong collaboration, adaptability, and continuous growth in dynamic environments.",
      img: <i className="fa-solid fa-comments text-3xl"></i>,
      items: [
        "Problem-Solving",
        "Teamwork & Collaboration",
        "Adaptability & Open-Mindedness",
        "Self-Motivation & Independence",
        "Time Management",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-2"
    >
      <header>
        <h1 className="text-4xl font-bold text-center py-2 border-y-2 border-(--primary-color)">
          <i className="fa-solid fa-folder-open mr-2"></i> Services
        </h1>
      </header>

      <main className="mt-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.8,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <ServiceCard key={`service-${i}`} service={service} />
          ))}
        </motion.div>
      </main>
    </motion.section>
  );
};

export default Services;
