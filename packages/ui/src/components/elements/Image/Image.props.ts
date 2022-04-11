import { ImgHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** The path of the image */
  src?: string;
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
  /** The image can specify that it needs an additional spacing
   * to separate it from nearby content. */
  spaced?: boolean | "right" | "left";
  /** The image can specify its vertical alignment */
  verticalAlign?: "bottom" | "middle" | "top";
  /** The image can be hidden */
  hidden?: boolean;
  /** The image may include a border */
  bordered?: boolean;
  /** The image can show it is disabled and cannot be selected */
  disabled?: boolean;
  /** The alt text of the image */
  alt?: string;
}

type ImageProps = BaseComponentWithoutAs<IImageProps>;
export default ImageProps;
