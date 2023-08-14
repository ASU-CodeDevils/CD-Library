import { ButtonHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the button is primary or secondary */
  variant?: "primary" | "secondary";
  /** Whether the button is inverted */
  inverted?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Text on button */
  label?: string;
  /** Whether to show a loading icon on the button */
  loading?: boolean;
}

type ButtonProps = BaseComponentWithoutAs<IButtonProps>;
export default ButtonProps;
