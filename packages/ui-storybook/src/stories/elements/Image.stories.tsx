import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "@cd/ui";
import "@cd/ui-styles/dist/cdui.css";

// import imageFile from "../assets/sundevil.png";
const imageFile = require("../assets/sundevil.png");

// default link of the image
const imageLink = "https://www.google.com";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Elements/Image",
  component: Image,
  argTypes: {
    aligned: {
      control: { type: "select" },
      options: ["bottom aligend", "middle aligned", "top aligned"],
    },
    spaced: {
      control: { type: "select" },
      options: ["spaced", "left spaced", "right spaced"],
    },
    floated: {
      control: { type: "select" },
      options: ["left floated", "right floated"],
    },
    size: {
      control: { type: "select" },
      options: ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"],
    },
  },
} as ComponentMeta<typeof Image>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  avatar: false,
  bordered: false,
  fluid: false,
  rounded: false,
  circular: false,
  centered: false,
  size: "small",
  src: imageFile,
  alt: "image",
  hidden: false,
  href: imageLink,
};
