import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import Logo from "./Logo";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customColor, setCustomColor] = useState<string>(() => {
    const storedCustomColor = localStorage.getItem("customColor");
    return storedCustomColor || "#58b0df";
  });

  const { theme, toggleTheme } = useTheme();

  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/projects",
      label: "Projects",
    },
    {
      path: "/services",
      label: "Services",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  const preferencesDialog = useRef<HTMLDialogElement | null>(null);

  const openPreferences = () => {
    preferencesDialog.current?.showModal();
  };

  const closePreferences = () => {
    preferencesDialog.current?.close();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleCustomColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setCustomColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", customColor);
    localStorage.setItem("customColor", customColor);
  }, [customColor]);

  return (
    <header className="fixed top-0 left-0 w-screen z-100 p-4 bg-(--bg-color)/35 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-xl text-gray-400">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-(--primary-color) font-bold underline decoration-(--primary-color) decoration-2 underline-offset-6"
                      : "hover:text-(--text-color)"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 text-xl">
          {theme === "dark" ? (
            <i
              className="fa-solid fa-sun cursor-pointer hover:-translate-y-0.5 hover:text-yellow-200"
              title="Light Mode"
              onClick={() => toggleTheme("light")}
            ></i>
          ) : (
            <i
              className="fa-solid fa-moon cursor-pointer hover:-translate-y-0.5 hover:text-teal-400"
              title="Dark Mode"
              onClick={() => toggleTheme("dark")}
            ></i>
          )}
          <i
            title="Preferences"
            onClick={openPreferences}
            className="fa-solid fa-gear cursor-pointer hover:brightness-90 hover:-translate-y-0.5"
          ></i>
        </div>

        <button
          type="button"
          className="md:hidden text-2xl hover:brightness-90"
          onClick={toggleMenu}
          title={`${isMenuOpen ? "Close" : "Open"} Menu`}
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden fixed top-[60px] left-0 z-1 flex flex-col items-center gap-5 w-screen
             text-2xl text-gray-400 bg-(--bg-color) overflow-y-auto py-4
            ${
              isMenuOpen ? "h-[calc(100vh-60px)] opacity-100" : "h-0 opacity-0"
            }`}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-(--primary-color) font-bold underline decoration-(--primary-color) decoration-2 underline-offset-6"
                      : "hover:text-(--text-color)"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          <div className="flex items-center gap-4 mt-2">
            {theme === "dark" ? (
              <i
                className="fa-solid fa-sun cursor-pointer hover:-translate-y-0.5 hover:text-yellow-200"
                title="Light Mode"
                onClick={() => toggleTheme("light")}
              ></i>
            ) : (
              <i
                className="fa-solid fa-moon cursor-pointer hover:-translate-y-0.5 hover:text-teal-400"
                title="Dark Mode"
                onClick={() => toggleTheme("dark")}
              ></i>
            )}
            <i
              title="Preferences"
              onClick={openPreferences}
              className="fa-solid fa-gear cursor-pointer hover:brightness-90 hover:-translate-y-0.5"
            ></i>
          </div>
        </ul>
      </nav>

      <dialog
        ref={preferencesDialog}
        className="fixed top-1/2 left-1/2 -translate-1/2 bg-(--text-color) text-(--bg-color) backdrop:backdrop-blur-sm p-5 border-3 border-(--primary-color) rounded-lg shadow-2xl"
      >
        <button
          type="button"
          className="absolute top-0 right-0 bg-(--bg-color) text-(--text-color) rounded-full w-6 h-6 hover:brightness-90"
        >
          <i
            title="Close"
            onClick={closePreferences}
            className="fa-solid fa-xmark"
          ></i>
        </button>

        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-3">
          <i className="fa-solid fa-palette"></i> Preferences
        </h2>
        <div className="flex items-center gap-2 text-lg">
          <p>Choose a custom color: </p>
          <input
            type="color"
            name="color"
            id="color"
            defaultValue={customColor}
            onChange={(e) => toggleCustomColor(e)}
            className="w-32 h-8 hover:scale-105"
          />
        </div>
      </dialog>
    </header>
  );
};

export default Header;
