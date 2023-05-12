import React from "react";
import cx from "clsx";

import ButtonProps from "./Button.props";
import { UI_CLASSNAME } from "../../..";

const Button = ({
  className,
  variant,
  inverted,
  disabled,
  label,
  ...htmlButtonProps
}: ButtonProps) => {
  return (
    <button
      className={cx(
        UI_CLASSNAME,
        "btn",
        { inverted: inverted, disabled: disabled },
        variant,
        className
      )}
      {...htmlButtonProps}
    >
      {label}
    </button>
  );
};

export default Button;
