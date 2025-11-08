import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import Logo from "./Logo";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [customColor, setCustomColor] = useState<string>(() => {
    const storedCustomColor = localStorage.getItem("customColor");
    return storedCustomColor || "#58b0df";
  });

  const { theme, toggleTheme } = useTheme();

  const preferencesDialog = useRef<HTMLDialogElement | null>(null);

  const openPreferences = () => {
    preferencesDialog.current?.showModal();
  };

  const closePreferences = () => {
    preferencesDialog.current?.close();
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

        <ul className="flex items-center gap-6 text-lg text-gray-400">
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-(--primary-color) font-bold underline decoration-(--primary-color) decoration-2 underline-offset-6"
                    : "hover:text-(--text-color)"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-(--primary-color) font-bold underline decoration-(--primary-color) decoration-2 underline-offset-6"
                    : "hover:text-(--text-color)"
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-(--primary-color) font-bold underline decoration-(--primary-color) decoration-2 underline-offset-6"
                    : "hover:text-(--text-color)"
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-(--primary-color) font-bold underline decoration-(--primary-color) decoration-2 underline-offset-6"
                    : "hover:text-(--text-color)"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          {theme === "dark" ? (
            <span
              className="material-symbols-outlined light-mode cursor-pointer hover:-translate-y-0.5 hover:text-yellow-200"
              title="Light Mode"
              onClick={() => toggleTheme("light")}
            >
              light_mode
            </span>
          ) : (
            <span
              className="material-symbols-outlined dark-mode cursor-pointer hover:-translate-y-0.5 hover:text-teal-400"
              title="Dark Mode"
              onClick={() => toggleTheme("dark")}
            >
              dark_mode
            </span>
          )}
          <i
            title="Preferences"
            onClick={openPreferences}
            className="fa-solid fa-gear cursor-pointer hover:brightness-90 hover:-translate-y-0.5"
          ></i>
        </div>

        <dialog
          ref={preferencesDialog}
          className="absolute top-1/2 left-1/2 -translate-1/2 backdrop:backdrop-blur-sm w-1/2 py-3 px-4 border-3 border-(--primary-color) rounded-lg text-center"
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

          <h2 className="text-3xl text-(--primary-color) font-bold mb-3">
            <i className="fa-solid fa-palette mr-2"></i> Preferences
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <p>Choose a custom color: </p>
            <input
              type="color"
              name="color"
              id="color"
              defaultValue={customColor}
              onChange={(e) => toggleCustomColor(e)}
              className="w-20 h-6 hover:scale-105"
            />
          </div>
        </dialog>
      </nav>
    </header>
  );
};

export default Header;
