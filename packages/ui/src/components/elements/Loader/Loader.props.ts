import { BaseComponentWithoutAs } from "../../..";

export interface ILoaderProps {
  /** The loading text to be displayed */
  text?: string;
}

type LoaderProps = BaseComponentWithoutAs<ILoaderProps>;
export default LoaderProps;
