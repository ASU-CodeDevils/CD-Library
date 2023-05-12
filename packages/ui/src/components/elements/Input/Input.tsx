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
  // BUG: error TS2746: This JSX tag's 'children' prop expects a single child
  // of type 'ReactNode', but multiple children were provided.

  // restricting to have getIcon return only a single type
  // This resolves initial error of multiple components
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
      <input tabIndex={computeTabIndex()} {...inputHTMLProps} />
      {children}
      {getIcon()}
    </div>
    // Input tag does not supports closing tag.
    // Input is a void element and cannot have any children.
  );
}

export default Input;
