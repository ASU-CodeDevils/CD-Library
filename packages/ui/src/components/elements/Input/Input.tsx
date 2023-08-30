import React from "react";
import cx from "clsx";

import InputProps from "./Input.props";
import { UI_CLASSNAME } from "../../..";
import { Icon, isIconName, isIconProps } from "..";

function Input({
  children,
  className,
  disabled,
  error,
  icon = "search",
  loading,
  tabIndex,
  ...inputHTMLProps
}: InputProps) {
  /**
   * Computes the tab index based on the props passed. If disabled, the tab
   * index will be turned off. Otherwise, either the value of `tabIndex` is
   * returned (defined or not).
   *
   * @returns The tab index value.
   */
  const computeTabIndex = () => {
    return disabled ? -1 : tabIndex;
  };

  /**
   * Computes the icon to display in the input.
   *
   * @returns The icon to display.
   */
  const getIcon = () => {
    if (isIconName(icon)) {
      return <Icon name={icon} />;
    }

    if (isIconProps(icon)) {
      return <Icon {...icon} />;
    }

    return null;
  };

  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "input",
        {
          disabled: disabled,
          error: error,
          loading: loading,
        },
        className
      )}
      {...inputHTMLProps}
    >
            <input
        tabIndex={computeTabIndex()}
        disabled={disabled || loading} // Disable input when loading is true or disabled is true
        {...inputHTMLProps}
      />
      {loading && <div>Loading...</div>} {/* Show loading state */}
      {error && <div>Error: {error}</div>} {/* Show error state */}
      {children}
      {getIcon()}
    </div>
  );
}

export default Input;
