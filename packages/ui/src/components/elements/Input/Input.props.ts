import { InputHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

import { Icon, IconName, IconProps } from "../Icon";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Whether the input is disabled. */
  disabled?: boolean;

  /** Whether the input has an error. */
  error?: boolean;

  /** The action icon that displays within the input. */
  icon?: typeof Icon | IconProps | IconName;

  /** Optional label to display along side the input. */
  label?: string;

  /** The position that the label will be. */
  labelPosition?: "left" | "right";

  /** Whether to show that the input is loading. */
  loading?: boolean;

  /** Associate this element with tab index. */
  tabIndex?: number;
}

type InputProps = BaseComponentWithoutAs<IInputProps>;
export default InputProps;
