import { ImgHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** The image can show it is disabled and cannot be selected */
  disabled?: boolean;
  /** The image may be formatted to appear inline with text as an avatar */
  avatar?: boolean;
  /** The image may include a border */
  bordered?: boolean;
  /** The image can take up the width of its container */
  fluid?: boolean;
  /** The image may appear rounded */
  rounded?: boolean;
  /** The image may appear circular */
  circular?: boolean;
  /** The image can specify its vertical alignment */
  verticallyAligned?: "bottom aligned" | "middle aligned" | "top aligned";
  /** The image can appear centered in a content block */
  centered?: boolean;
  /** The image can specify that it needs an additional spacing
   * to separate it from nearby content. */
  spaced?: boolean | "right spaced" | "left spaced";
  /** The image can sit to the left or right of other content */
  floated?: "left floated" | "right floated";
  /** The size of the image */
  size?:
    | "mini"
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | "massive";
  /** The path of the image */
  src?: string;
  /** The alt text of the image */
  alt?: string;
  /** The image can be hidden */
  hidden?: boolean;
  /** The image can be formatted to link to other content */
  href?: string;
}

type ImageProps = BaseComponentWithoutAs<IImageProps>;
export default ImageProps;
