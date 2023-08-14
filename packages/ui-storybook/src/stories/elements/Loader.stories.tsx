import { StoryObj, Meta } from "@storybook/react";

import { Loader } from "@codedevils/ui";
import "@codedevils/ui-styles/dist/cdui.css";

const meta: Meta<typeof Loader> = {
  title: "Elements/Loader",
  component: Loader,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {
    text: "Loading...",
    disabled: false,
    inline: false,
    inverted: false,
    size: "md",
  },
};
