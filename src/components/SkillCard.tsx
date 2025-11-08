import { type JSX } from "react";

export type Skill = {
  name: string;
  url: string;
  logo: JSX.Element;
};

type SkillCardProps = {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
};

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  return (
    <div className="pt-3 pb-10 px-10 bg-(--primary-color)/25 border-l-4 border-(--primary-color) flex flex-col items-center hover:backdrop-brightness-200">
      <h2 className="text-3xl text-center font-bold mb-4">
        {icon}
        {title}
      </h2>
      <div className="flex items-center flex-wrap gap-10 whitespace-nowrap">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            title={skill.name}
            className="flex flex-col items-center gap-2 hover:scale-105"
          >
            {skill.logo}
            <span className="text-sm text-cente">{skill.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
