import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/Project";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  const projects: Project[] = [
    {
      id: 1,
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
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="Tailwind CSS"
                className="w-12 h-12"
              />
            ),
          },
        ],
        backend: [
          {
            name: "NestJS",
            logo: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-12 h-12"
              >
                {" "}
                <path
                  fill="#DF234F"
                  d="M75.4.3c-.9 0-1.8.2-2.6.5 1.7 1.1 2.6 2.6 3.1 4.3 0 .2.1.4.1.6 0 .2.1.4.1.6.1 2.9-.8 3.3-1.4 5-1 2.2-.7 4.6.5 6.5.1.2.2.5.4.7-1.3-8.4 5.7-9.6 7-12.2.1-2.3-1.8-3.8-3.3-4.9C77.8.5 76.6.3 75.4.3zm10.5 1.8c-.1.8 0 .6-.1 1 0 .3 0 .6-.1.9-.1.3-.1.5-.2.8-.1.3-.2.5-.3.8-.1.2-.2.4-.3.7-.1.1-.2.3-.3.4-.1.1-.1.2-.2.3-.2.2-.3.5-.5.7l-.6.6c-.2.2-.4.4-.6.5-.7.5-1.5.9-2.2 1.4-.2.2-.5.3-.7.5-.2.2-.4.3-.6.5l-.6.6c-.2.2-.4.4-.5.7-.2.2-.3.5-.5.7-.1.3-.2.5-.4.8-.1.3-.2.5-.3.8-.1.3-.2.6-.2.8 0 .1 0 .3-.1.4 0 .1 0 .3-.1.4v1.4c0 .3 0 .5.1.8 0 .3.1.5.2.8.1.3.2.5.3.8.1.2.2.3.2.5l-7.6-2.9c-1.3-.4-2.5-.7-3.8-1-.7-.2-1.4-.3-2.1-.5-2-.4-4-.7-6-.9h-.2c-2-.2-3.9-.3-5.9-.3-1.5 0-2.9.1-4.3.2-2 .1-4 .4-6 .7l-1.5.3c-1 .2-2 .4-3 .7-.5.1-1 .3-1.5.4-.5.2-1 .4-1.4.6-.4.2-.7.3-1.1.5-.1 0-.1 0-.2.1-.3.2-.6.3-.9.5-.1 0-.2.1-.2.1-.4.2-.7.4-1 .5-.2.1-.5.2-.7.3-.1.1-.2.1-.3.2-.3.2-.6.3-.9.5-.3.2-.6.3-.8.5-.2.2-.5.3-.7.5 0 0-.1 0-.1.1-.2.1-.4.3-.6.5l-.1.1c-.2.1-.3.3-.5.4-.1 0-.1.1-.2.1-.2.1-.3.3-.5.4 0 .1-.1.1-.1.1l-.6.6-.1.1-.6.6s0 .1-.1.1l-.5.5c-.1.1-.2.1-.2.2l-.6.6c0 .1-.1.1-.1.2l-.8.8-.1.1c-.5.6-1.1 1.1-1.7 1.6-.6.5-1.2 1-1.9 1.5s-1.3.9-2 1.3-1.4.7-2.1 1c-.7.3-1.4.6-2.1.8-1.4.3-2.8.9-4 1 0-.5-.3-.4-.6-.4-.3.1-.6.1-.8.2-.3.1-.5.2-.8.3-.3.1-.5.2-.8.4-.2.2-.5.3-.7.5-.2.2-.5.4-.7.6-.2.2-.5.4-.7.6-.2.2-.4.4-.6.7-.2.3-.4.5-.5.8-.2.2-.3.5-.5.8-.1.3-.3.6-.4.9l-.3.9c-.1.3-.1.5-.2.8v.1c-.1.3-.1.7-.1.9.1-.1.1.1.1.3v.4c0 .2.1.4.1.6.1.2.1.4.2.6.1.2.2.4.4.6.1.2.3.4.4.6.2.2.4.4.6.5.2.2.4.4.6.5.8.7 1 .9 2 1.5.2.1.3.2.5.3h.1v.2c0 .3.1.5.2.8.1.3.2.6.3.8l.3.6c0 .1.1.1.1.2.1.3.3.5.4.7.2.2.3.5.5.7l.6.6.6.6H8c.2.2.4.3.6.5.2.2.5.3.7.4.2.1.5.3.8.4.2.1.4.2.7.2 0 0 .1 0 .1.1.1 0 .3.1.4.1-.1 1.8-.1 3.5.1 4.1.3.7 1.8-1.4 3.2-3.7-.2 2.3-.3 5 0 5.8.4.8 2.3-1.8 4.1-4.6 23.4-5.4 44.8 10.8 47.1 33.7-.4-3.6-4.8-5.6-6.9-5.1-1 2.4-2.7 5.6-5.4 7.5.2-2.2.1-4.4-.3-6.6-.7 3-2.1 5.9-4.1 8.3-3.1.2-6.3-1.3-7.9-3.6-.1-.1-.2-.3-.3-.4-.1-.2-.2-.5-.3-.7-.1-.2-.2-.5-.2-.7v-.7-.5c0-.2.1-.5.2-.7.1-.2.1-.5.2-.7.1-.2.2-.5.4-.7.6-1.6.6-2.9-.5-3.6l-.6-.3c-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.3-.1-.2-.1-.5-.1-.7-.2-.2-.1-.5-.1-.7-.1-.2 0-.5-.1-.7-.1h-.5c-.3 0-.5 0-.7.1-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2-.2.1-.4.2-.7.3l-.6.3c-7.7 5-3.1 16.8 2.1 20.2-2 .4-4 .8-4.6 1.2l-.1.1c1.4.9 2.9 1.6 4.5 2.2 2.1.7 4.4 1.3 5.4 1.6 2.7.6 5.5.8 8.3.6 14.6-1 26.6-12.2 28.8-26.8.1.3.1.6.2.9.1.6.2 1.2.3 1.9.1.3.1.6.1.9v.1c0 .3.1.6.1.9 0 .4.1.7.1 1.1V91.6c0 .3-.1.5-.1.8v.3c0 .3-.1.6-.1 1-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1l-.3.9v.1c-.1.3-.2.7-.3 1-.1.3-.2.6-.4 1-.1.3-.2.7-.4 1-.1.3-.3.6-.4 1-.1.3-.3.6-.4.9 0 .1-.1.2-.1.2s0 .1-.1.1c-2.1 4.3-5.3 8.1-9.3 11.1-.3.2-.5.4-.8.6-.1.1-.2.1-.2.2-.2.2-.5.3-.7.5l.1.2c.5-.1.9-.1 1.4-.2.9-.1 1.7-.3 2.6-.5.2 0 .5-.1.7-.2.2 0 .3-.1.5-.1s.5-.1.7-.1c.2-.1.4-.1.6-.2 3.3-.8 6.5-1.9 9.6-3.2-5.3 7.2-12.3 13-20.5 16.8 3.8-.3 7.6-.9 11.3-2 13.3-3.9 24.5-12.9 31.2-25-1.4 7.6-4.4 14.9-8.9 21.3 3.2-2.1 6.1-4.6 8.8-7.3 7.4-7.7 12.3-17.6 13.9-28.1 1.1 5.2 1.5 10.6 1 15.9 23.9-33.3 2-67.8-7.2-76.9 0-.1-.1-.1-.1-.2v0c0 .4 0 .8-.1 1.2-.1.8-.2 1.5-.3 2.2-.2.7-.4 1.5-.6 2.2-.2.7-.5 1.4-.8 2.1-.3.7-.6 1.4-1 2-.4.6-.8 1.3-1.2 1.9-.4.6-.9 1.2-1.4 1.8-.5.6-1 1.1-1.6 1.7-.3.3-.6.6-1 .8-.3.2-.5.4-.8.7-.6.5-1.2.9-1.9 1.3-.6.4-1.3.8-2 1.1l-2.1.9c-.7.3-1.4.5-2.1.7-.7.2-1.5.4-2.2.5-.8.1-1.5.2-2.2.3-.5 0-1.1.1-1.6.1-.8 0-1.5-.1-2.2-.1-.8-.1-1.5-.2-2.2-.3-.8-.1-1.5-.3-2.2-.6.7-.1 1.5-.1 2.2-.3.8-.1 1.5-.3 2.2-.5.7-.2 1.5-.4 2.1-.7l2.1-.9c.7-.3 1.3-.7 2-1.1.6-.4 1.3-.9 1.9-1.3.6-.5 1.2-1 1.7-1.5.6-.5 1.1-1.1 1.6-1.6.5-.6 1-1.2 1.4-1.8.1-.1.1-.2.2-.3.3-.5.7-1.1 1-1.6.4-.7.7-1.3 1-2 .3-.7.6-1.4.8-2.1l.6-2.1c.1-.8.3-1.5.3-2.2.1-.8.1-1.5.1-2.2 0-.5 0-1.1-.1-1.6-.1-.8-.2-1.5-.3-2.2-.1-.8-.3-1.5-.5-2.2-.2-.7-.5-1.4-.7-2.1-.3-.7-.6-1.4-.9-2-.4-.7-.7-1.3-1.1-2-.4-.6-.9-1.2-1.3-1.8-.5-.6-1-1.1-1.5-1.7-.3-.3-.6-.6-.9-.8-1.5-1.2-3-2.2-4.6-3.2-.2-.1-.4-.2-.7-.3-1.3-1.1-2.3-1.4-3.3-1.8z"
                />{" "}
              </svg>
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
        frontend: "https://github.com/EladReuveny/football-api-manager",
        backend: "https://github.com/EladReuveny/football-api-manager",
      },
      liveDemo: "https://football-api-manager.netlify.app",
    },

    {
      id: 2,
      title: "Electronics - E-Commerce Platform",
      description:
        "A full-stack e-commerce platform that allows users to browse, purchase, and manage electronic products with authentication, order tracking, and an optimized shopping experience.",
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
      id: 3,
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
      id: 4,
      title: "Pokémon Search App",
      description:
        "Search Pokémons and their evolutions by ID or name. Built with React and Vite. Deployed on Netlify.",
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
      id: 5,
      title: "TicTacToe",
      description: "TicTacToe game using React and Vite. Deployed on Netlify.",
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
      id: 6,
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
    <section className="mt-16 px-2">
      <header>
        <h1 className="text-4xl font-bold text-center py-2 border-y-2 border-(--primary-color)">
          <i className="fa-solid fa-folder-open mr-2"></i> Projects
        </h1>
      </header>

      <main className="mt-5">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Projects;
