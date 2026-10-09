import { motion } from "motion/react";
import { type JSX, type ReactNode } from "react";

export type Skill = {
  name: string;
  url: string;
  logo: JSX.Element;
};

type SkillsCardProps = {
  title: string;
  Icon: ReactNode;
  skills: Skill[];
};

const SkillsCard = ({ title, Icon, skills }: SkillsCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      className="pt-3 pb-10 px-4 bg-(--primary-color)/25 border-l-4 border-(--primary-color) hover:backdrop-brightness-200"
    >
      <h2 className="text-3xl font-bold text-(--primary-color) flex items-center justify-center gap-4 mb-5">
        {Icon}
        {title}
      </h2>
      <div className="flex items-center flex-wrap gap-6 whitespace-nowrap">
        {skills.map((skill, i) => (
          <a
            key={`skill-${i}`}
            href={skill.url}
            target="_blank"
            title={skill.name}
            className="flex flex-col items-center gap-2 hover:scale-105"
          >
            {skill.logo}
            <span className="text-sm text-center">{skill.name}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
