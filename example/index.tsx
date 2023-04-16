import "react-app-polyfill/ie11";
import { createRoot } from "react-dom/client";
import { Thing } from "../src/index";

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
