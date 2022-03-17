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
}

type LoaderProps = BaseComponentWithoutAs<ILoaderProps>;
export default LoaderProps;
