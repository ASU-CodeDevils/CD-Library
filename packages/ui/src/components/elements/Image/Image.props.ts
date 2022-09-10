import { ImgHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** The image can show it is disabled and cannot be selected */
  disabled?: boolean;
  /** The image may include a border */
  bordered?: boolean;
  /** The image can take up the width of its container */
  fluid?: boolean;
  /** The image may appear rounded */
  rounded?: boolean;
  /** The image may appear circular */
  circular?: boolean;
  /** The image can specify its vertical alignment */
  verticallyAligned?: "bottom" | "middle" | "top";
  /** The image can appear to the left or right of other content */
  centered?: boolean;
  /** The image can specify that it needs an additional spacing
   * to separate it from nearby content. */
  spaced?: boolean | "right" | "left";
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
