import type { JSX } from "react";

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: {
    frontend?: {
      name: string;
      logo: JSX.Element;
    }[];
    backend?: {
      name: string;
      logo: JSX.Element;
    }[];
  };
  sourceCode: {
    frontend?: string;
    backend?: string;
  };
  liveDemo?: string;
};
