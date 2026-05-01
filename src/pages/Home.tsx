import { motion } from "motion/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import SliddingDashArrowIcon from "../components/SliddingDashArrowIcon";
import SocialLinks from "../components/SocialLinks";

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
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-2"
    >
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
          <p className="text-(--text-color)/60">
            I'm a dedicated <strong>Full Stack Developer</strong> &{" "}
            <strong>Software Engineer</strong> with a B.Sc. in Computer Science
            from The Open University of Israel. Passionate about
            problem-solving, web development, and exploring new technologies.
          </p>
          <p className="text-(--text-color)/60">
            I specialize in building backend services using{" "}
            <strong>NestJS</strong>, and have experience working with{" "}
            <strong>Spring Boot</strong>. On the frontend, I work with{" "}
            <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
            <strong>Tailwind CSS</strong> to create modern, responsive user
            interfaces. I use <strong>TanStack Query</strong> for server state
            management, <strong>Zustand & Jotai</strong> for client state
            management, and <strong>TanStack Form</strong> with{" "}
            <strong>Zod</strong> for robust form state management and schema
            validation. For data management and environment consistency, I use{" "}
            <strong>PostgreSQL</strong> as the database, along with{" "}
            <strong>Redis</strong> for caching and fast data access, and{" "}
            <strong>Docker</strong> for containerization and deployment.
            Development and collaboration are supported by{" "}
            <strong>Git & GitHub</strong> for version control,{" "}
            <strong>Swagger</strong> for comprehensive API documentation, and{" "}
            <strong>Postman</strong> for API testing. My deployment workflow
            includes <strong>Netlify</strong> for frontend delivery,{" "}
            <strong>Render</strong> for backend hosting, and{" "}
            <strong>Neon</strong> for managed serverless PostgreSQL. Familiar
            with <strong>AWS</strong> services such as <strong>S3</strong>{" "}
            (Storage), <strong>CloudFront</strong> (CDN),{" "}
            <strong>Route 53</strong> (DNS), <strong>ECS</strong> (Container
            Orchestration), <strong>RDS</strong> (Relational Database Service),{" "}
            <strong>IAM</strong> (Identity and Access Management), and{" "}
            <strong>CloudWatch</strong> (Monitoring & Observability) to ensure
            scalable, secure, and efficient deployment of applications in the
            cloud.
          </p>
          <p className="text-(--text-color)/60">
            Strong foundation in RESTful API design, microservices architecture
            (message-driven systems), real-time systems, caching strategies, and
            database management, responsive UI/UX, and deploying apps on modern
            cloud platforms. Familiar with CI/CD pipelines and automated
            deployment workflows. A fast, self-driven learner with strong
            problem-solving skills, effective both independently and in team
            environments, and passionate about delivering high-quality,
            user-focused solutions using modern AI-driven development workflows.
          </p>
        </div>

        <div className="mt-8">
          <SocialLinks />
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
            <i className="fa-solid fa-paper-plane animate-[bounce_2s_linear_infinite]"></i>
          </Link>
        </div>
      </main>
    </motion.section>
  );
};

export default Home;
