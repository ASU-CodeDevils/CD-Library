import React from "react";
import cx from "clsx";

import ButtonProps from "./Button.props";
import { UI_CLASSNAME } from "../../..";

function Button({
  className,
  variant,
  inverted,
  disabled,
  label,
}: ButtonProps) {
  //TODO: Add your code here
  return (
    <div>
      <button
        className={cx(
          UI_CLASSNAME,
          "btn",
          { inverted: inverted, disabled: disabled },
          variant,
          className
        )}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
