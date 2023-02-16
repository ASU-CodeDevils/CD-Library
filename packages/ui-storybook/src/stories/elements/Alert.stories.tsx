import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Alert } from "@cd/ui";
import "@cd/ui-styles/dist/cdui.css";

export default {
  title: "Elements/Alert",
  component: Alert,
  argTypes: {
    severity: {
      control: { type: "select" },
      options: ["error", "warning", "info", "success"],
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled"],
    }
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>This is an example alert</Alert>
);

export const Primary = Template.bind({});

Primary.args = {
  severity: "error",
  icon: true,
};
