import { StoryObj, Meta } from "@storybook/react";

import { Input } from "@codedevils/ui";
import "@codedevils/ui-styles/dist/cdui.css";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Elements/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Hello",
    loading: false,
    placeholder: "Input...",
    disabled: false,
    error: false,
    icon: "search",
    tabIndex: 0,
  },
};
