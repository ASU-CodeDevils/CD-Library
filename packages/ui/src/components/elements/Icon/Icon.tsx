import React from "react";
import cx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconProps from "./Icon.props";
import { UI_CLASSNAME } from "../../..";

function Icon({
    className,
    name
}: IconProps) {
    return (
        <FontAwesomeIcon
            className={cx(
                UI_CLASSNAME,
                "icon",
                className
            )}
            icon={name}
        />
    );
}

export default Icon;