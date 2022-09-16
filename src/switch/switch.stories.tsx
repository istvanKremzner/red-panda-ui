import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Switch } from "./switch.component";

const meta: ComponentMeta<typeof Switch> = {
  title: "Switch",
  component: Switch,
};

export default meta;

export const DefaultSwitch: ComponentStoryObj<typeof Switch> = {
  args: {
    color: "primary",
    small: false,
    large: false,
  },
};
