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
  loading, //added new prop
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
      disabled={disabled || loading} // disable the button when loading is true
      {...htmlButtonProps}
    >
      {loading ? <i className="fa fa-spinner fa-spin"></i> : label} // show loading icon when loading = TRUE. 
    </button>
  );
};

export default Button;
