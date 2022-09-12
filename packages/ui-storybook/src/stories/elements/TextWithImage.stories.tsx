import { ComponentStory, ComponentMeta} from "@storybook/react";

import { TextWithImage } from "@cd/ui";
import "@cd/ui-styles/dist/cdui.css";

import Image from "./Image.stories";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Elements/TextWithImage",
  component: TextWithImage,
} as ComponentMeta<typeof TextWithImage>;

const Template: ComponentStory<typeof TextWithImage> = (args) => <TextWithImage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  image: Image.args,
};
