// .storybook/manager.js

import { addons } from "@storybook/addons";
import brand from "./brand";

addons.setConfig({
  panelPosition: "right",
  theme: brand,
});
