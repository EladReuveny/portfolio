import type { JSX } from "react";

type SocialLinksProps = {};

type Link = {
  title: string;
  url: string;
  icon: JSX.Element;
};

const SocialLinks = ({}: SocialLinksProps) => {
  const socialLinks: Link[] = [
    {
      title: "GitHub Profile",
      url: "https://github.com/EladReuveny",
      icon: <i className="fa-brands fa-github"></i>,
    },
    {
      title: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/eladreuveny/",
      icon: <i className="fa-brands fa-linkedin"></i>,
    },
  ];

  return (
    <div className="flex justify-center items-center gap-3 mb-3 text-(--primary-color)">
      {socialLinks.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          title={link.title}
          className="flex items-center justify-center w-14 h-14 border-2 border-(--primary-color) rounded-full text-3xl hover:text-(--bg-color) hover:bg-(--primary-color) hover:-translate-y-1 hover:shadow-[0_0_25px_0px_var(--primary-color)]"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
