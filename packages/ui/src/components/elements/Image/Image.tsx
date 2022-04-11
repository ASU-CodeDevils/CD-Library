import React from "react";
import cx from "clsx";

import ImageProps from "./Image.props";
import { UI_CLASSNAME } from "../../..";

function Image({
  className,
  verticalAlign,
  spaced,
  size,
  alt = "image",
  ...imageHTMLProps
}: ImageProps) {
  /** returns the part of the classname for vertical alignment */
  // const getverticalAlignWord = () => {
  //   return typeof verticalAlign === "string"
  //     ? verticalAlign + " aligned"
  //     : false;
  // };

  /** returns the part of the classname for spacing */
  // const getspacedWord = () => {
  //   return (spaced === "left" || spaced === "right")
  //     ? (spaced + " spaced")
  //     : spaced === true
  //     ? "spaced"
  //     : false;
  // };

  /** returns the px values of resized image */
  // const getResizedPixel = () => {
  //   var img = new Image();

  // }

  return (
    <img
      className={cx(
        UI_CLASSNAME,
        "image",
        // getverticalAlignWord(),
        // getspacedWord(),
        {
          verticalAlign: verticalAlign,
          spaced: spaced
        },
        size,
        className
      )}
      alt={alt}
      {...imageHTMLProps}
    />
  );
}

export default Image;
