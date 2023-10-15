import { Meta, StoryObj } from "@storybook/react";
import { Card } from "@codedevils/ui";
import "@codedevils/ui-styles/dist/cdui.css";

const meta: Meta<typeof Card> = {
  title: "Elements/Card",
  component: Card,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["plain", "outlined", "dropshadow"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "inverted", "gold"],
    },
    imageFilled: {
      control: { type: "boolean" },
    },
    videoFilled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    content: "Card Content",
    image: "https://placeimg.com/640/480/any",
    size: "md",
    variant: "plain",
    color: "default",
    imageFilled: false,
    videoFilled: false,
  },
};
