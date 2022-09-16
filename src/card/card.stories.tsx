import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Card } from "./card.component";

const meta: ComponentMeta<typeof Card> = {
  title: "Card",
  component: Card,
};

export default meta;

export const DefaultCard: ComponentStoryObj<typeof Card> = {
  args: {
    children: <div>Default</div>,
  },
};
