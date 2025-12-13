import { motion } from "motion/react";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";
import type { Skill } from "../components/SkillCard";
import SkillCard from "../components/SkillCard";
import SliddingDashArrowIcon from "../components/SliddingDashArrowIcon";

type AboutProps = {};

const About = ({}: AboutProps) => {
  const programmingLanguages: Skill[] = [
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Java",
      url: "https://www.java.com",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
          alt="Java"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "C#",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
          alt="C#"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "C",
      url: "https://www.c-language.org/",
      logo: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/c-1.svg"
          alt="C"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "C++",
      url: "https://isocpp.org",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
          alt="C++"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Python",
      url: "https://www.python.org",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          alt="Python"
          className="w-12 h-12"
        />
      ),
    },
  ];

  const frontend: Skill[] = [
    {
      name: "React",
      url: "https://reactjs.org/",
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
      url: "https://www.typescriptlang.org/",
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
      url: "https://tailwindcss.com/",
      logo: (
        <img
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="Tailwind CSS"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "HTML5",
      url: "https://www.w3.org/html/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="HTML5"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "CSS3",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="CSS3"
          className="w-12 h-12"
        />
      ),
    },
  ];

  const backend: Skill[] = [
    {
      name: "NestJS",
      url: "https://nestjs.com/",
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
      name: "Spring Boot",
      url: "https://spring.io/projects/spring-boot",
      logo: (
        <img
          src="https://spring.io/img/projects/spring-boot.svg"
          alt="Spring Boot"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Express.js",
      url: "https://expressjs.com/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
          alt="Express.js"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Node.js",
      url: "https://nodejs.org/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="Node.js"
          className="w-12 h-12"
        />
      ),
    },
  ];

  const databaseAndCaching: Skill[] = [
    {
      name: "PostgreSQL",
      url: "https://www.postgresql.org",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
          alt="PostgreSQL"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
          alt="MySQL"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Redis",
      url: "https://redis.io/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
          alt="Redis"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Neon",
      url: "https://neon.tech/",
      logo: (
        <img
          src="https://neon.tech/favicon.ico"
          alt="Neon"
          className="w-12 h-12"
        />
      ),
    },
  ];

  const devOpsAndCloud: Skill[] = [
    {
      name: "Git",
      url: "https://git-scm.com/",
      logo: (
        <img
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          alt="Git"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      logo: (
        <img
          src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
          alt="GitHub"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Docker",
      url: "https://www.docker.com/",
      logo: (
        <img
          src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
          alt="Docker"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "AWS",
      url: "https://aws.amazon.com/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          alt="AWS"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Netlify",
      url: "https://www.netlify.com/",
      logo: (
        <img
          src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
          alt="Netlify"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Render",
      url: "https://render.com/",
      logo: (
        <svg
          viewBox="0 0 110 21"
          className={`w-20 h-12 fill-(--text-color)`}
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Render"
        >
          {" "}
          <path d="M38.1801 3.45902C41.7067 3.45902 43.9994 5.45905 43.9994 8.67133C43.9994 11.0232 42.6512 12.7708 40.5375 13.5165L44.6811 20.6218H41.6077L37.7421 13.8798H33.4728V20.6218H30.8259V3.45902H38.1801ZM33.469 5.84911V11.5165H38.0544C40.1567 11.5165 41.2421 10.3387 41.2421 8.67133C41.2421 6.96576 40.1605 5.84911 38.0544 5.84911H33.469Z"></path>{" "}
          <path d="M51.4145 8.22773C54.9412 8.22773 57.2339 10.8587 57.2339 14.1093C57.2339 14.4878 57.2073 14.8817 57.1349 15.2718H47.7508C47.865 17.0921 49.4151 18.5223 51.506 18.5223C53.0179 18.5223 54.2252 17.876 55.1316 16.4496L56.9711 17.7919C55.8514 19.8149 53.6463 20.878 51.506 20.878C47.8536 20.878 45.1686 18.1705 45.1686 14.5682C45.1686 10.9467 47.7508 8.22773 51.4145 8.22773ZM54.7013 13.398C54.5489 11.6924 53.1284 10.4878 51.3879 10.4878C49.537 10.4878 48.124 11.6886 47.8117 13.398H54.7013Z"></path>{" "}
          <path d="M59.5495 20.6218V8.48012H62.0555V10.0098C62.4592 9.39027 63.6055 8.22773 65.7725 8.22773C69.0973 8.22773 70.8492 10.3004 70.8492 13.2488V20.6218H68.3547V13.7804C68.3547 11.7689 67.2578 10.6063 65.3803 10.6063C63.5408 10.6063 62.044 11.7689 62.044 13.7804V20.6218H59.5495Z"></path>{" "}
          <path d="M78.9766 8.22773C81.0293 8.22773 82.389 8.98491 83.284 10.136V2.81274H85.7785V20.6218H83.284V18.9659C82.389 20.117 81.0293 20.8742 78.9766 20.8742C75.5375 20.8742 72.9058 18.2164 72.9058 14.4878C72.9058 10.7555 75.5375 8.22773 78.9766 8.22773ZM75.3966 14.4878C75.3966 16.725 76.9466 18.6217 79.2774 18.6217C81.6082 18.6217 83.2687 16.725 83.2687 14.4878C83.2687 12.2507 81.593 10.4801 79.2774 10.4801C76.9466 10.4763 75.3966 12.2469 75.3966 14.4878Z"></path>{" "}
          <path d="M94.1382 8.22773C97.6648 8.22773 99.9575 10.8587 99.9575 14.1093C99.9575 14.4878 99.9309 14.8817 99.8585 15.2718H90.4744C90.5886 17.0921 92.1387 18.5223 94.2295 18.5223C95.7415 18.5223 96.9488 17.876 97.8552 16.4496L99.6947 17.7919C98.575 19.8149 96.3699 20.878 94.2295 20.878C90.5772 20.878 87.8922 18.1705 87.8922 14.5682C87.8884 10.9467 90.4706 8.22773 94.1382 8.22773ZM97.4249 13.398C97.2725 11.6924 95.852 10.4878 94.1115 10.4878C92.2606 10.4878 90.8476 11.6886 90.5353 13.398H97.4249Z"></path>{" "}
          <path d="M102.368 20.6218V8.48012H104.874V10.136C105.556 8.809 106.702 8.22773 108.024 8.22773C108.968 8.22773 109.688 8.52983 109.688 8.52983L109.425 10.832C109.288 10.7823 108.744 10.5528 107.952 10.5528C106.615 10.5528 104.878 11.2603 104.878 14.006V20.6218H102.368Z"></path>{" "}
          <path d="M15.6491 0.00582604C12.9679 -0.120371 10.7133 1.81847 10.3286 4.373C10.3134 4.49154 10.2905 4.60627 10.2715 4.72099C9.67356 7.90268 6.88955 10.3119 3.5457 10.3119C2.35364 10.3119 1.23395 10.006 0.258977 9.47058C0.140914 9.40557 0 9.4897 0 9.62354V10.3081V20.6218H10.2677V12.8894C10.2677 11.4668 11.4178 10.3119 12.8346 10.3119H15.4015C18.3074 10.3119 20.6458 7.89121 20.5315 4.94662C20.4287 2.29649 18.2884 0.132023 15.6491 0.00582604Z"></path>{" "}
        </svg>
      ),
    },
  ];

  const apiDesignAndSecurity: Skill[] = [
    {
      name: "Postman",
      url: "https://postman.com",
      logo: (
        <img
          src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          alt="Postman"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Swagger",
      url: "https://swagger.io",
      logo: (
        <img
          src="https://svgstack.com/media/img/swagger-logo-xTUe014050.webp"
          alt="Swagger"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "JWT",
      url: "https://jwt.io/",
      logo: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
          alt="JWT"
          className="w-12 h-12"
        />
      ),
    },
  ];

  const buildAndDevTools: Skill[] = [
    {
      name: "Vite",
      url: "https://vitejs.dev/",
      logo: (
        <img
          src="https://vitejs.dev/logo.svg"
          alt="Vite"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "npm",
      url: "https://www.npmjs.com/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg"
          alt="npm"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Maven",
      url: "https://maven.apache.org/",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg"
          alt="Maven"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Linux",
      url: "https://www.linux.org/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
          alt="Linux"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "VS Code",
      url: "https://code.visualstudio.com/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg"
          alt="VS Code"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "IntelliJ IDEA",
      url: "https://www.jetbrains.com/idea/",
      logo: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg"
          alt="IntelliJ IDEA"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
      logo: (
        <img
          src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          alt="Figma"
          className="w-12 h-12"
        />
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-16 px-2"
    >
      <header>
        <h1 className="text-4xl font-bold text-center py-2 border-y-2 border-(--primary-color)">
          <i className="fa-solid fa-address-card mr-2"></i> About{" "}
          <span className="text-(--primary-color)">Me</span>
        </h1>
      </header>

      <main className="mt-5">
        <p className="text-gray-400 text-center">
          I'm a dedicated Full Stack Developer/Software Engineer with a B.Sc. in
          Computer Science from The Open University of Israel. I have a
          versatile skill set, enabling me to contribute across both frontend
          and backend development. Highly motivated and hardworking, I bring a
          strong work ethic and a commitment to the precise execution of tasks.
          Skilled at working independently and thriving under pressure in tight
          schedules. I enjoy building high-performance, seamless web
          applications and always eager to learn and stay current with emerging
          technologies.
        </p>

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
          className="flex flex-col gap-4 mt-5"
        >
          <SkillCard
            title="Programming Languages"
            icon={<i className="material-symbols-outlined text-4xl!">code</i>}
            skills={programmingLanguages}
          />

          <SkillCard
            title="Frontend"
            icon={<i className="fa-solid fa-code"></i>}
            skills={frontend}
          />

          <SkillCard
            title="Backend"
            icon={<i className="fa-solid fa-server"></i>}
            skills={backend}
          />

          <SkillCard
            title="Database & Caching"
            icon={<i className="fa-solid fa-database"></i>}
            skills={databaseAndCaching}
          />

          <SkillCard
            title="DevOps & Cloud"
            icon={<i className="fa-solid fa-cloud-arrow-up"></i>}
            skills={devOpsAndCloud}
          />

          <SkillCard
            title="API Design & Security"
            icon={<i className="fa-solid fa-shield"></i>}
            skills={apiDesignAndSecurity}
          />

          <SkillCard
            title="Build & Development Tools"
            icon={<i className="fa-solid fa-wrench"></i>}
            skills={buildAndDevTools}
          />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <Link
            to={"/projects"}
            className="relative group flex items-center justify-center gap-2 py-4 px-16 text-xl border-2 border-(--primary-color) bg-(--primary-color) text-(--bg-color) rounded-full shadow-[0_0_25px_0px_var(--primary-color)] hover:shadow-[0_0_25px_10px_var(--primary-color)] hover:scale-105"
          >
            My Projects
            <SliddingDashArrowIcon />
          </Link>
          <a
            href={resume}
            target="_blank"
            title="Download CV"
            download
            className="flex items-center justify-center gap-2 py-4 px-16 text-xl border-2 border-(--primary-color) text-(--primary-color) rounded-full shadow-[0_0_25px_0px_var(--primary-color)] hover:shadow-[0_0_25px_10px_var(--primary-color)] hover:scale-105"
          >
            View CV{" "}
            <i className="fa fa-download animate-[bounce_2s_linear_infinite]"></i>
          </a>
        </div>
      </main>
    </motion.section>
  );
};

export default About;
