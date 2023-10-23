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
    isFilled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Yosemite",
    content:
      "Yosemite National Park is in California’s Sierra Nevada mountains.",
    image: "https://picsum.photos/200/300",
    imgTitle: "Yosemite",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    size: "md",
    variant: "plain",
    color: "default",
    isImage: true,
    isFilled: false,
    isNormal: false,
  },
};
