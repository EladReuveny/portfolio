import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/Project";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Intellectify - Full Stack Social Media Platform",
      description:
        "Intellectify is a scalable full-stack knowledge-sharing platform built using a microservices architecture, enabling users to read, write, and explore knowledge across various topics.",
      technologies: {
        frontend: [
          {
            name: "React",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "TypeScript",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "React Query",
            logo: (
              <img
                src="https://raw.githubusercontent.com/bestofjs/bestofjs/master/apps/web/public/logos/react-query.svg"
                alt="TanStack Query"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Tailwind CSS",
            logo: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className={`w-20 h-12 fill-(--text-color)`}
              >
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                />
              </svg>
            ),
          },
        ],
        backend: [
          {
            name: "NestJS",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg"
                alt="NestJS"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "PostgreSQL",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="PostgreSQL"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Docker",
            logo: (
              <img
                src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
                alt="Docker"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "JWT",
            logo: (
              <img
                src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
                alt="JWT"
                className="w-12 h-12"
              />
            ),
          },
        ],
      },
      sourceCode: {
        frontend: "https://github.com/EladReuveny/intellectify",
        backend: "https://github.com/EladReuveny/intellectify",
      },
    },

    {
      id: 2,
      title: "Football API Manager",
      description:
        "A full-stack web application that enables users to manage and visualize football team and player data through a secure JWT-based authentication system, RESTful API, and interactive interface.",
      technologies: {
        frontend: [
          {
            name: "React",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "TypeScript",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Tailwind CSS",
            logo: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className={`w-20 h-12 fill-(--text-color)`}
              >
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                />
              </svg>
            ),
          },
        ],
        backend: [
          {
            name: "NestJS",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg"
                alt="NestJS"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "PostgreSQL",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="PostgreSQL"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Redis",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
                alt="Redis"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Docker",
            logo: (
              <img
                src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
                alt="Docker"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "JWT",
            logo: (
              <img
                src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
                alt="JWT"
                className="w-12 h-12"
              />
            ),
          },
        ],
      },
      sourceCode: {
        frontend: "https://github.com/EladReuveny/football-api-manager",
        backend: "https://github.com/EladReuveny/football-api-manager",
      },
      liveDemo: "https://football-api-manager.netlify.app",
    },

    {
      id: 3,
      title: "Electronics - E-Commerce Platform",
      description:
        "An advanced Full-Stack E-Commerce Web Application for electronics, built with a modern tech stack and a focus on performance, scalability, and user experience.",
      technologies: {
        frontend: [
          {
            name: "React",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "TypeScript",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "React Query",
            logo: (
              <img
                src="https://raw.githubusercontent.com/bestofjs/bestofjs/master/apps/web/public/logos/react-query.svg"
                alt="TanStack Query"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Zustand",
            logo: (
              <img
                src="https://logo.svgcdn.com/devicon/zustand-original.png"
                alt="Zustand"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Tailwind CSS",
            logo: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className={`w-20 h-12 fill-(--text-color)`}
              >
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                />
              </svg>
            ),
          },
        ],
        backend: [
          {
            name: "Spring Boot",
            logo: (
              <img
                src="https://spring.io/img/projects/spring-boot.svg"
                alt="Spring Boot"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "PostgreSQL",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="PostgreSQL"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Docker",
            logo: (
              <img
                src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
                alt="Docker"
                className="w-12 h-12"
              />
            ),
          },
        ],
      },
      sourceCode: {
        frontend: "https://github.com/EladReuveny/electronics-store-ui",
        backend: "https://github.com/EladReuveny/electronics-store-api",
      },
      liveDemo: "https://electronics-store-app.netlify.app",
    },

    {
      id: 4,
      title: "Art Talks - Full Stack Real-Time Art Platform",
      description:
        "Art Talks is a full-stack real-time art platform that combines a visual art gallery with a live discussion forum. The app allows art enthusiasts to share artwork and have interactive conversations in real time.",
      technologies: {
        frontend: [
          {
            name: "React",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "TypeScript",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "React Query",
            logo: (
              <img
                src="https://raw.githubusercontent.com/bestofjs/bestofjs/master/apps/web/public/logos/react-query.svg"
                alt="TanStack Query"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Tailwind CSS",
            logo: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className={`w-20 h-12 fill-(--text-color)`}
              >
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                />
              </svg>
            ),
          },
          {
            name: "Socket.io",
            logo: (
              <img
                src="https://cdn.worldvectorlogo.com/logos/socket-io.svg"
                alt="Socket.io"
                className="w-12 h-12"
              />
            ),
          },
        ],
        backend: [
          {
            name: "NestJS",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg"
                alt="NestJS"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "PostgreSQL",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="PostgreSQL"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Socket.io",
            logo: (
              <img
                src="https://cdn.worldvectorlogo.com/logos/socket-io.svg"
                alt="Socket.io"
                className="w-12 h-12"
              />
            ),
          },
          {
            name: "Docker",
            logo: (
              <img
                src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
                alt="Docker"
                className="w-12 h-12"
              />
            ),
          },
        ],
      },
      sourceCode: {
        frontend: "https://github.com/EladReuveny/art-talks",
        backend: "https://github.com/EladReuveny/art-talks",
      },
      liveDemo: "https://art-talks.netlify.app",
    },

    {
      id: 5,
      title: "Assembly Project",
      description: "Converts assembly code to machine code using C language.",
      technologies: {
        backend: [
          {
            name: "C",
            logo: (
              <img
                src="https://cdn.worldvectorlogo.com/logos/c-1.svg"
                alt="C"
                className="w-12 h-12"
              />
            ),
          },
        ],
      },
      sourceCode: {
        backend: "https://github.com/EladReuveny/assembly-project",
      },
    },

    {
      id: 6,
      title: "Pokémon Search App",
      description: "Search Pokémons and their evolutions by ID or name.",
      technologies: {
        frontend: [
          {
            name: "React",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                className="w-12 h-12"
              />
            ),
          },
        ],
      },
      sourceCode: {
        frontend: "https://github.com/EladReuveny/pokemon-search-app",
      },
      liveDemo: "https://pokemon-search-web-app.netlify.app",
    },

    {
      id: 7,
      title: "TicTacToe",
      description:
        "TicTacToe game supports both singleplayer (against A.I.) and multiplayer modes.",
      technologies: {
        frontend: [
          {
            name: "React",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                className="w-12 h-12"
              />
            ),
          },
        ],
      },
      sourceCode: {
        frontend: "https://github.com/EladReuveny/TicTacToe",
      },
      liveDemo: "https://tic-tac-toe-online-app.netlify.app",
    },

    {
      id: 8,
      title: "Restaurant Menu Manager",
      description:
        "Manage and interact with a restaurant menu using Java and JavaFX.",
      technologies: {
        backend: [
          {
            name: "Java",
            logo: (
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java"
                className="w-12 h-12"
              />
            ),
          },
        ],
      },
      sourceCode: {
        backend: "https://github.com/EladReuveny/restaurant-menu-manager",
      },
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
          <i className="fa-solid fa-folder-open mr-2"></i> Projects
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
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </main>
    </motion.section>
  );
};

export default Projects;
