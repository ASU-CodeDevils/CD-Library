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
  isFilled?: boolean;
  /** Whether the card has image or video */
  isImage?: boolean;
  /** Whether the card has image, video or not */
  isNormal?: boolean;
  /** Text on card */
  title?: string;
  /** Alt of image */
  imgTitle?: string;
  /** Content on card */
  content?: string;
  /** Image on card */
  image?: string | ReactElement;
  /** Video on card */
  video?: string | ReactElement;
}

type CardProps = BaseComponentWithoutAs<ICardProps>;
export default CardProps;
