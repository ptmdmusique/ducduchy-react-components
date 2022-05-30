// .storybook/manager.js

import "@storybook/addon-actions/register";
import { addons } from "@storybook/addons";
import brand from "./brand";

addons.setConfig({
  panelPosition: "right",
  theme: brand,
});
