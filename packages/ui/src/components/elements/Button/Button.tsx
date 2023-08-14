import React from "react";
import cx from "clsx";

import ButtonProps from "./Button.props";
import { UI_CLASSNAME } from "../../..";
import { Loader } from "../Loader"; // Loading loader

const Button = ({
  className,
  variant,
  inverted,
  disabled,
  label,
  loading,
  ...htmlButtonProps
}: ButtonProps) => {
  disabled = disabled || loading;

  const innerText = loading ? <Loader size="xs" text="Loading..." /> : label;

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
      {innerText}
    </button>
  );
};

export default Button;
