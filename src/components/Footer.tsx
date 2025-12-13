import SocialLinks from "./SocialLinks";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer className="text-center text-gray-400 bg-(--text-color)/10 py-5 mt-20">
      <SocialLinks />

      <code>
        Created by Elad Reuveny | <i className="fa-regular fa-copyright"></i>{" "}
        {new Date().getFullYear()} All Rights Reserved
      </code>
    </footer>
  );
};

export default Footer;
