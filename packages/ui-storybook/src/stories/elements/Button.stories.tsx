import { StoryObj, Meta } from "@storybook/react";
import { Button } from "@codedevils/ui";
import "@codedevils/ui-styles/dist/cdui.css";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    inverted: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
    disabled: false,
    inverted: false,
  },
};
