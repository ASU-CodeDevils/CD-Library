import { ReactElement } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface ICardProps {
  /** Whether the card is small, medium or large */
  size?: "sm" | "md" | "lg";
  /** Whether the card is Plain, Outlined or Dropshadow */
  variant?: "plain" | "outlined" | "dropshadow";
  /** Whether the card color is default, inverted or gold */
  color?: "default" | "inverted" | "gold";
  /** Whether the card image is fill */
  imageFilled?: boolean;
  /** Whether the card video is fill */
  videoFilled?: boolean;
  /** Text on card */
  title?: string;
  /** Content on card */
  content?: string;
  /** Image on card */
  image?: string | ReactElement;
  /** Video on card */
  video?: string | ReactElement;
}

type CardProps = BaseComponentWithoutAs<ICardProps>;
export default CardProps;
