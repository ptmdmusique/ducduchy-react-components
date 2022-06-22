import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProp {
  children: React.ReactNode;
  containerId: string;
}
export const Portal = ({ children, containerId }: PortalProp) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById(containerId));
  }, [containerId]);

  return container && ReactDOM.createPortal(children, container);
};
