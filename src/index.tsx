import { PropsWithChildren } from "react";

export * from "./components";

export const Thing = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center w-5/6 m-auto py-2 text-2xl text-center text-skin-success uppercase bg-skin-top shadow-xl rounded-3xl">
      {children || "Hello World! (❁´◡`❁)"}
    </div>
  );
};
