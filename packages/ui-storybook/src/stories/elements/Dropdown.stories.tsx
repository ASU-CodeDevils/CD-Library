import { StoryObj, Meta } from "@storybook/react";
import { Dropdown } from "@codedevils/ui";
import "@codedevils/ui-styles/dist/cdui.css";
const meta: Meta = {
  title: "Elements/Dropdown",
  component: Dropdown,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    inverted: {
      control: { type: "boolean" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    label: "Dropdown",
    disabled: false,
    tabIndex: 0,
    isSelection: false,
    inverted: false,
  },
};
