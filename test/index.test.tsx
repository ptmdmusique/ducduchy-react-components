import React from "react";
import { createRoot } from "react-dom/client";
import { Default as Thing } from "../stories/Thing.stories";

describe("Thing", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const container = document.getElementById("app");
    const root = createRoot(container!); // createRoot(container!) if you use TypeScript

    root.render(<Thing />);
    root.unmount();
  });
});
