import React from "react";
import cx from "clsx";

import ImageProps from "./Image.props";
import { UI_CLASSNAME } from "../../..";

function Image({
  className,
  disabled,
  bordered,
  fluid,
  rounded,
  circular,
  verticallyAligned,
  centered,
  spaced,
  size,
  src,
  alt = "image",
  hidden,
  ...imageHTMLProps
}: ImageProps) {
  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "image",
        {
          disabled: disabled,
          bordered: bordered,
          fluid: fluid,
          rounded: rounded,
          circular: circular,
          verticallyAligned: verticallyAligned,
          centered: centered,
          spaced: spaced,
        },
        size,
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        hidden={hidden}
        {...imageHTMLProps}
      />
    </div>
  );
}

export default Image;
