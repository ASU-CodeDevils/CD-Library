import { OptionHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface ILoaderProps extends OptionHTMLAttributes<HTMLInputElement> {
  /** The scheming for our loader */
  value?: string;
}

type LoaderProps = BaseComponentWithoutAs<ILoaderProps>;
export default LoaderProps;
