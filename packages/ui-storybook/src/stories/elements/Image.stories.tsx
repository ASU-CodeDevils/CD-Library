import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "@cd/ui";
import "@cd/ui-styles/dist/cdui.css";

// import imageFile from "../assets/sundevil.png";
const imageFile = require("../assets/sundevil.png");

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Elements/Image",
  component: Image,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"],
    },
    spaced: {
      control: { type: "select" },
      options: [true, "left", "right"],
    },
    verticallyAligned: {
      control: { type: "select" },
      options: ["bottom", "middle", "top"],
    },
  },
} as ComponentMeta<typeof Image>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  bordered: false,
  fluid: false,
  rounded: false,
  circular: false,
  verticallyAligned: "middle",
  centered: false,
  spaced: true,
  size: "small",
  src: imageFile,
  alt: "image",
  hidden: false,
};
