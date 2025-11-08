type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer className="text-center text-gray-400 bg-(--text-color)/10 py-5 mt-20">
      <div className="flex justify-center items-center gap-3 mb-3 text-(--primary-color)">
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

      <code>
        Created by Elad Reuveny | <i className="fa-regular fa-copyright"></i>{" "}
        {new Date().getFullYear()} All Rights Reserved
      </code>
    </footer>
  );
};

export default Footer;
