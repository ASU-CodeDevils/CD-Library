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
  loading = false, ///added new prop loading and det default value to false.  
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
      disabled={disabled || loading} // button disabled when loading is true. 
      {...htmlButtonProps}
    >
      {loading ? <i className="fa fa-spinner fa-spin"></i> : label}
    </button>
  );
};

export default Button;
