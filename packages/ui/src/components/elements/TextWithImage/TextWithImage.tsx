import React from "react";
import cx from "clsx";

import Image from "../Image/Image";
// import { UI_CLASSNAME } from "../../..";
import TextWithImageProps from "./TextWithImage.props";

function TextWithImage({
  image 
}: TextWithImageProps) {
  return (
    <div>
      <span>Hello World!</span>
      <Image {...image}/>
      <span>This is a test page of Image component.</span>
    </div>
  );
}

export default TextWithImage;
