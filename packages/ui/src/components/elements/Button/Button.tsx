import React from "react";
import cx from "clsx";

import ButtonProps from "./Button.props";
import { UI_CLASSNAME } from "../../..";


function Button() {
    //TODO: Add your code here
    return (
        <div className={cx(UI_CLASSNAME, "button")}></div>
    );
}

export default Button;
