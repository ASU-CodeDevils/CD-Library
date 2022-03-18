import React from "react";
import cx from "clsx";

import LoaderProps from "./Loader.props";
import { UI_CLASSNAME } from "../../..";

function Loader({
  className,
  text,
  disabled,
  inline,
  inverted,
  size,
}: LoaderProps) {
  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "loader",
        { disabled: disabled, inline: inline, inverted: inverted },
        size,
        className
      )}
    >
      <div className="icon"></div>
      <span>{text}</span>
    </div>
  );
}

export default Loader;
