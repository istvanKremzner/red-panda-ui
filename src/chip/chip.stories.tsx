import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Chip } from './chip.component';

const meta: ComponentMeta<typeof Chip> = {
  title: "Chip",
  component: Chip,
};

export default meta;

export const DefaultChip: ComponentStoryObj<typeof Chip> = {
  args: {
    children: 'hello',
    onClick: undefined,
  },
};

export const ClickableChip: ComponentStoryObj<typeof Chip> = {
  args: {
    children: 'hello',
    onClick: () => { },
  },
};
