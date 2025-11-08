import { Link } from "react-router-dom";

type LogoProps = {};

const Logo = ({}: LogoProps) => {
  return (
    <Link
      to="/"
      className="text-2xl font-bold cursor-pointer tracking-tight hover:text-shadow-[0_0_25px_0px_var(--primary-color)] hover:scale-105"
    >
      <span className="text-(--primary-color)">E</span>lad{" "}
      <span className="text-(--primary-color)">R</span>euveny
    </Link>
  );
};

export default Logo;
