import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@cd/ui";
import "@cd/ui-styles/dist/cdui.css";

export default {
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
  variant: "primary",
  disabled: false,
  inverted: false,
};
