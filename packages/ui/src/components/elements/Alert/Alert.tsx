import React from "react";
import cx from "clsx";

import AlertProps from "./Alert.props";
import { UI_CLASSNAME } from "../../..";
import { Icon, isIconName, isIconProps } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Alert({
  className,
  severity,
  icon,
  variant,
  children
}: AlertProps) {

  const getIcon = () => {
    let defaultIcon: JSX.Element = <Icon name="check"/>;
    if (severity === "error" || severity === "info") {
      defaultIcon = <Icon name="exclamation-circle"/>;
    } else if (severity === "warning") {
      defaultIcon = <Icon name="exclamation-triangle"/>;
    } else if (severity === "success") {
      defaultIcon = <Icon name="check"/>;
    }

    return typeof icon === "undefined" || icon === true ? (
      defaultIcon
    ) : icon === false ? (
      null
    ) : isIconName(icon) ? (
      <Icon name={icon} />
    ) : isIconProps(icon) ? (
      <Icon {...icon} />
    ) : (
      null
    );
  };

  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "alert",
        severity,
        variant,
        className
      )}
    >
      {getIcon()}
      {children}
    </div>
  );
}

export default Alert;
