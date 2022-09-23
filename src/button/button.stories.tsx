import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./button.component";

const meta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

export const DefaultButton: ComponentStoryObj<typeof Button> = {
  args: {
    color: "primary",
    small: false,
    large: false,
    fullWidth: false,
    children: "Click me",
  },
};
