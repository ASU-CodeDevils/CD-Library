import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "@cd/ui";
import "@cd/ui-styles/dist/cdui.css";

export default {
  title: "Elements/Loader",
  component: Loader,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Loading",
  disabled: false,
  inline: false,
  inverted: false,
  size: "medium",
};
