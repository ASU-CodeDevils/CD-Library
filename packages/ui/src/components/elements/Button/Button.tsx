import React from "react";
import cx from "clsx";

import ButtonProps from "./Button.props";
import { UI_CLASSNAME } from "../../..";

function Button({
  className,
  variant,
  inverted,
  disabled,
  onHover,
  label,
}: ButtonProps) {
  //TODO: Add your code here
  return (
    <div
      className={
        (cx(UI_CLASSNAME, "button"),
        { inverted: inverted, disabled: disabled, onHover: onHover },
        variant,
        className)
      }
    >
      <span>{label}</span>
    </div>
  );
}

export default Button;
