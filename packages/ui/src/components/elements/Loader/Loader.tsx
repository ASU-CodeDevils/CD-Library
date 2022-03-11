import React from "react";
import cx from "clsx";

import LoaderProps from "./Loader.props";
import { UI_CLASSNAME } from "../../..";

function Loader({ loading, className }: LoaderProps) {
  return (
    <div
      className={cx(UI_CLASSNAME, "loader", { loading: loading }, className)}
    ></div>
  );
}

export default Loader;
