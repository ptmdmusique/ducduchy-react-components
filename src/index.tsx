import { FC } from "react";
import "./components/assets/styles/index.scss";
import "./components/assets/styles/theme.scss";
import { initializeIconList } from "./utils/iconInit";

initializeIconList();

export * from "./components";

export const Thing: FC = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-5/6 m-auto py-2 text-2xl text-center text-skin-success uppercase bg-skin-top shadow-xl rounded-3xl">
      {children || "Hello World! (❁´◡`❁)"}
    </div>
  );
};
