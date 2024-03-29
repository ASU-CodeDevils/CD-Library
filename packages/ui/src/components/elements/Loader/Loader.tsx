import React from "react";
import cx from "clsx";

import LoaderProps from "./Loader.props";
import { UI_CLASSNAME } from "../../..";

function Loader({
  className,
  text = "Loading",
  disabled,
  inline,
  inverted,
  size,
}: LoaderProps) {
  return (
    <>
      <div
        className={cx(
          UI_CLASSNAME,
          "spinner",
          { disabled: disabled, inline: inline, inverted: inverted },
          size,
          className
        )}
      ></div>
      <span>{text}</span>
    </>
  );
}

export default Loader;
