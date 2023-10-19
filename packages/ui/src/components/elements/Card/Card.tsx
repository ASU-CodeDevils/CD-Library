import React from "react";
import cx from "clsx";

import CardProps from "./Card.props";
import { UI_CLASSNAME } from "../../..";

const Card = ({
  className,
  size,
  variant,
  color,
  imageFilled,
  videoFilled,
  title,
  content,
  image,
  video,
}: CardProps) => {
  return (
    <div
      className={cx(UI_CLASSNAME, "card", size, variant, color, className, {
        imageFilled: imageFilled,
        videoFilled: videoFilled,
      })}
    >
      <div className="card__image">
        {/* <div className="image"> */}
        {typeof image === "string" ? (
          <img src={image} alt="Placeholder image" />
        ) : (
          image
        )}
        {/* </div> */}
      </div>
      <div className="card__content">
        <div className="card-content-title">{title}</div>
        <div className="card-content">{content}</div>
      </div>
    </div>
  );
};

export default Card;
