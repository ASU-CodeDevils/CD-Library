import React from "react";
import cx from "clsx";

import ImageProps from "./Image.props";
import { UI_CLASSNAME } from "../../..";

function Image({
  className,
  disabled,
  avatar,
  bordered,
  fluid,
  rounded,
  circular,
  aligned,
  centered,
  spaced,
  floated,
  size,
  src,
  alt = "image",
  hidden,
  href,
  ...imageHTMLProps
}: ImageProps) {
  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "image",
        {
          disabled: disabled,
          avatar: avatar,
          bordered: bordered,
          fluid: fluid,
          rounded: rounded,
          circular: circular,
          centered: centered,
        },
        aligned,
        spaced,
        floated,
        size,
        className
      )}
    >
      <a href={href} >
        <img
          src={src}
          alt={alt}
          hidden={hidden}
          {...imageHTMLProps}
        />
      </a>
    </div>
  );
}

export default Image;
