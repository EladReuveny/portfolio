import { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import SliddingDashArrowIcon from "../components/SliddingDashArrowIcon";

type HomeProps = {};

const Home = ({}: HomeProps) => {
  useEffect(() => {
    const typed = new Typed(".type-writer", {
      strings: ["Full Stack Developer", "Software Engineer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="mt-16 px-2">
      <header className="font-bold text-center mb-5">
        {" "}
        <h1 className="text-4xl font-bold">
          It's <span className="text-(--primary-color)">Elad</span>
        </h1>
        <h2 className="text-3xl font-bold">
          I'm a{" "}
          <span className="type-writer text-stroke whitespace-nowrap"></span>
        </h2>
      </header>

      <main className="text-center">
        <div className="space-y-3">
          <p className="text-gray-400">
            I'm a dedicated <b>Full Stack Developer</b> &{" "}
            <b>Software Engineer</b> with a B.Sc. in Computer Science from The
            Open University of Israel. Passionate about problem-solving, web
            development, and exploring new technologies.
          </p>
          <p className="text-gray-400">
            I primarily work with <b>NestJS</b> or <b>Spring Boot</b> on the
            backend, integrated with <b>React</b>, <b>TypeScript</b>, and{" "}
            <b>Tailwind CSS</b> on the frontend. For data management and
            environment consistency, I use <b>PostgreSQL</b> along with{" "}
            <b>Redis</b> for caching and fast data access, and <b>Docker</b> for
            containerization and deployment. Development and collaboration are
            supported by <b>Git & GitHub</b> for version control, <b>Postman</b>{" "}
            for API testing, and <b>Swagger</b> for comprehensive API
            documentation. My deployment workflow includes <b>Netlify</b> for
            frontend delivery, <b>Render</b> for backend hosting, and{" "}
            <b>Neon</b> for cloud storage. I also work with <b>AWS</b> services
            such as <b>S3</b>, <b>CloudFront</b>, <b>Route 53</b>, and
            container-based deployments using <b>ECS</b> and <b>ECR</b>.
          </p>
          <p className="text-gray-400">
            Skilled in RESTful API design, database management, responsive
            UI/UX, and deploying applications on modern cloud platforms.
            Familiar with microservices architecture (HTTP and message-broker
            patterns), caching with Redis, and CI/CD fundamentals. A fast,
            self-driven learner with strong problem-solving skills, effective
            independently or in teams, and passionate about delivering
            high-quality, user-focused solutions.
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 mb-3 text-(--primary-color) mt-8">
          <a
            href="https://github.com/EladReuveny"
            target="_blank"
            title="GitHub Profile"
            className="flex items-center justify-center w-14 h-14 border-2 border-(--primary-color) rounded-full text-3xl hover:text-(--bg-color) hover:bg-(--primary-color) hover:-translate-y-1 hover:shadow-[0_0_25px_0px_var(--primary-color)]"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/eladreuveny/"
            target="_blank"
            title="LinkedIn Profile"
            className="flex items-center justify-center w-14 h-14 border-2 border-(--primary-color) rounded-full text-3xl hover:text-(--bg-color) hover:bg-(--primary-color) hover:-translate-y-1 hover:shadow-[0_0_25px_0px_var(--primary-color)]"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <Link
            to={"/about"}
            className="relative group flex items-center justify-center gap-2 py-4 px-16 text-xl border-2 border-(--primary-color) bg-(--primary-color) text-(--bg-color) rounded-full shadow-[0_0_25px_0px_var(--primary-color)] hover:shadow-[0_0_25px_10px_var(--primary-color)] hover:scale-105"
          >
            About <SliddingDashArrowIcon />
          </Link>
          <Link
            to={"/contact"}
            className="flex items-center justify-center gap-2 py-4 px-16 text-xl border-2 border-(--primary-color) text-(--primary-color) rounded-full shadow-[0_0_25px_0px_var(--primary-color)] hover:shadow-[0_0_25px_10px_var(--primary-color)] hover:scale-105"
          >
            Contact
            <i className="fa-solid fa-paper-plane animate-bounce"></i>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Home;
