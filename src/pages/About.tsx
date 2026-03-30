import { motion } from "motion/react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";
import type { Skill } from "../components/SkillsCard";
import SkillsCard from "../components/SkillsCard";
import SliddingDashArrowIcon from "../components/SliddingDashArrowIcon";

type AboutProps = {};

const About = ({}: AboutProps) => {
  const skillsCards: { title: string; icon: JSX.Element; skills: Skill[] }[] = [
    {
      title: "Programming Languages",
      icon: <i className="material-symbols-outlined text-4xl!">code</i>,
      skills: [
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
      ],
    },
    {
      title: "Frontend",
      icon: <i className="fa-solid fa-code"></i>,
      skills: [
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
          name: "Tailwind CSS",
          url: "https://tailwindcss.com/",
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
          name: "React Query",
          url: "https://tanstack.com/query/latest",
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
          url: "https://zustand-demo.pmnd.rs/",
          logo: (
            <img
              src="https://logo.svgcdn.com/devicon/zustand-original.png"
              alt="Zustand"
              className="w-12 h-12"
            />
          ),
        },
        {
          name: "Jotai",
          url: "https://jotai.org/",
          logo: (
            <img
              src="https://cdn.candycode.com/jotai/jotai-mascot.png"
              alt="Jotai"
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
      ],
    },
    {
      title: "Backend",
      icon: <i className="fa-solid fa-server"></i>,
      skills: [
        {
          name: "NestJS",
          url: "https://nestjs.com/",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg"
              alt="NestJS"
              className="w-12 h-12"
            />
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
      ],
    },
    {
      title: "Databases",
      icon: <i className="fa-solid fa-database"></i>,
      skills: [
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
      ],
    },
    {
      title: "API & Security",
      icon: <i className="fa-solid fa-shield"></i>,
      skills: [
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
        {
          name: "Socket.io",
          url: "https://socket.io",
          logo: (
            <img
              src="https://cdn.worldvectorlogo.com/logos/socket-io.svg"
              alt="Socket.io"
              className="w-12 h-12"
            />
          ),
        },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <i className="fa-solid fa-cloud-arrow-up"></i>,
      skills: [
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
              className="w-20 h-12 fill-(--text-color)"
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
        {
          name: "Neon",
          url: "https://neon.tech/",
          logo: (
            <img
              src="https://neon.com/brand/neon-logomark-dark-color.svg?updated=2026-01-21&dpl=dpl_FCcLm8Lf8CLdXLeDhCFs1uXXgHUJ"
              alt="Neon"
              className="w-12 h-12"
            />
          ),
        },
      ],
    },
    {
      title: "Tools",
      icon: <i className="fa-solid fa-wrench"></i>,
      skills: [
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-20 h-12 fill-(--text-color)"
            >
              <g fill="#181616">
                <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" />
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
              </g>
            </svg>
          ),
        },
        {
          name: "GitHub Copilot",
          url: "https://github.com/features/copilot",
          logo: (
            <img
              src="https://github.githubassets.com/images/modules/site/copilot/copilot.png"
              alt="GitHub Copilot"
              className="w-12 h-12"
            />
          ),
        },
        {
          name: "Windsurf",
          url: "https://windsurf.ai/",
          logo: (
            <img
              src="https://windsurf.ai/favicon.ico"
              alt="Windsurf"
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
      ],
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
        <p className="text-(--text-color)/60 text-center">
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
          {skillsCards.map((skillsCard, i) => (
            <SkillsCard key={`skills-card-${i}`} {...skillsCard} />
          ))}
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
