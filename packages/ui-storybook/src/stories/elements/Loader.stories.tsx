import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "@cd/ui";
import "/home/peudey/ReactProjects/CD-Library/packages/ui-styles/scss/cdui.scss";
import { LoaderOptionsPlugin } from "webpack";

export default {
  title: "Elements/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: "loading",
};
