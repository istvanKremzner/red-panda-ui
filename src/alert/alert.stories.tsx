import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Alert } from "./alert.component";

const meta: ComponentMeta<typeof Alert> = {
  title: "Alert",
  component: Alert,
};

export default meta;

export const DefaultAlert: ComponentStoryObj<typeof Alert> = {
  args: {
    type: "info",
    size: "normal",
    inverted: false,
    children: <div>Hi mom!</div>,
  },
};
