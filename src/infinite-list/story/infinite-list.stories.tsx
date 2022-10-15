import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ExampleList } from "./example-list.component";

const meta: ComponentMeta<typeof ExampleList> = {
  title: "Infinite List",
  component: ExampleList,
};

export default meta;

export const DefaultInfiniteList: ComponentStoryObj<typeof ExampleList> = {
  args: {},
};
