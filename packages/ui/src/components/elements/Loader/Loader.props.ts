import { BaseComponentWithoutAs } from "../../..";

export interface ILoaderProps {
  /** The loading text to be displayed */
  text?: string;

  /** If the loader is disabled. */
  disabled?: boolean;

  /** If the loader will be displayed inline */
  inline?: boolean;

  /** Whether the colors are inverted */
  inverted?: boolean;

  /** The size of the loader, small, medium, large */
  size?: "small" | "medium" | "large";
}

type LoaderProps = BaseComponentWithoutAs<ILoaderProps>;
export default LoaderProps;
