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
  return (
    <button
      className={cx(
        UI_CLASSNAME,
        "btn",
        { inverted: inverted, disabled: disabled },
        variant,
        className
      )}
      disabled={disabled || loading} // button disabled when loading is true
      {...htmlButtonProps}
    >
      {loading ? <Loader /> : label}
    </button>
  );
};

export default Button;
