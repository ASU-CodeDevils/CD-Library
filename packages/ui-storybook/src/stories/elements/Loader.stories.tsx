import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "@cd/ui";
import "@cd/ui-styles/dist/cdui.css";

export default {
  title: "Elements/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  loading: true,
};
