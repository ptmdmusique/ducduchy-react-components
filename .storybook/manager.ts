// .storybook/manager.js

import "@storybook/addon-links/register";
import { addons } from "@storybook/addons";
import brand from "./brand";

addons.setConfig({
  panelPosition: "right",
  theme: brand,
});
