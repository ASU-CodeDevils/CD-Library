import { StoryObj, Meta } from "@storybook/react";
import { Dropdown } from "@codedevils/ui";
import "@codedevils/ui-styles/dist/cdui.css";
const meta: Meta = {
  title: "Elements/Dropdown",
  component: Dropdown,
  argTypes: {
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
    tabIndex: 0,
    maxLength: 10,
    isSelection: false,
    inverted: false,
    items: [
      {
        value: "Option 1",
        onClick: () => {
          // Custom logic for Option 1
          alert("Option 1 clicked!");
        },
      },
      {
        value: "Option 2",
        onClick: () => {
          // Custom logic for Option 2
          console.log("Option 2 clicked!");
        },
      },
      { value: "Option 3" },
      { value: "Option 4" },
    ],
  },
};
