import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ThemeSwitcherButton } from "./theme-switcher-button.component";

const meta: ComponentMeta<typeof ThemeSwitcherButton> = {
  title: "Theme Switchers",
  component: ThemeSwitcherButton,
};

export default meta;

export const SwitchTheme: ComponentStoryObj<typeof ThemeSwitcherButton> = {
  args: {},
};
