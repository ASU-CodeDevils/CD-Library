import { StoryObj, Meta } from "@storybook/react";

import { Alert } from "@codedevils/ui";
import "@codedevils/ui-styles/dist/cdui.css";

const meta: Meta<typeof Alert> = {
  title: "Elements/Alert",
  component: Alert,
  argTypes: {
    type: {
        control: { type: "select" },
        options: [
            "normal",
            "informational",
            "error",
            "warning",
            "sucess"
        ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    label: "Test",
    type: "normal",
  },
};
