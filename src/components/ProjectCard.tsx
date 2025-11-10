import type { Project } from "../types/Project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className="relative group py-6 px-2 text-center bg-(--text-color)/10 rounded-lg shadow-2xl">
      <span className="absolute top-2 right-2 text-sm text-gray-500">
        #{index + 1}
      </span>
      <h2 className="font-bold text-2xl text-(--primary-color)">
        {project.title}
      </h2>
      <p className="text-gray-400">{project.description}</p>
      <div className="space-y-4 mt-2">
        {project.technologies.frontend && (
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-bold text-lg text-(--primary-color)">
              Frontend
            </h3>
            <div className="flex flex-wrap items-center gap-5">
              {project.technologies.frontend?.map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  {tech.logo}
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.technologies.backend && (
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-bold text-lg text-(--primary-color)">
              Backend
            </h3>
            <div className="flex flex-wrap items-center gap-5">
              {project.technologies.backend?.map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  {tech.logo}
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="absolute w-full h-0 opacity-0 bottom-0 left-0 rounded-lg bg-(--primary-color)/80 text-(--bg-color) flex items-center justify-center gap-6 group-hover:h-full group-hover:opacity-100">
        {project.sourceCode.backend && (
          <a
            href={project.sourceCode.backend}
            target="_blank"
            title="Backend Source Code"
            className="text-2xl hover:-translate-y-1 hover:scale-105"
          >
            <i className="fas fa-server"></i>
          </a>
        )}
        {project.sourceCode.frontend && (
          <a
            href={project.sourceCode.frontend}
            target="_blank"
            title="Frontend Source Code"
            className="text-2xl hover:-translate-y-1 hover:scale-105"
          >
            <i className="fas fa-code"></i>
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            title="Live Demo"
            className="text-2xl hover:-translate-y-1 hover:scale-105"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
