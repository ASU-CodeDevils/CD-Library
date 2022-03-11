import { InputHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface ILoaderProps extends InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean;
}

type LoaderProps = BaseComponentWithoutAs<ILoaderProps>;
export default LoaderProps;
