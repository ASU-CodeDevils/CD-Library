import React from "react";
import cx from "clsx";

import CardProps from "./Card.props";
import { UI_CLASSNAME } from "../../..";

const Card = ({
  className,
  size,
  variant,
  color,
  isFilled,
  isImage,
  imgTitle,
  isNormal,
  title,
  content,
  image,
  video,
}: CardProps) => {
  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "card",
        { isFilled, isNormal },
        size,
        variant,
        color,
        className
      )}
    >
      <div className="card__image">
        <div className="image">
          {isNormal ? null : isImage ? (
            typeof image === "string" ? (
              <img src={image} alt={imgTitle} />
            ) : (
              image
            )
          ) : typeof video === "string" ? (
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            video
          )}
        </div>
      </div>
      <div className="card__content">
        <div className="card__content-title">{title}</div>
        <div className="card__content-description">{content}</div>
      </div>
    </div>
  );
};

export default Card;
