import { ButtonHTMLAttributes } from "react";
import { BaseComponentWithoutAs } from "../../..";

export interface BButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Whether the button is primary or secondary */
    variant?: "primary" | "secondary";
    /** Whether the button is inverted */
    inverted?: boolean;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Color shifts whenever user hovers over component */
    onHover?: boolean;
    /** Text on button */
    label?: string;
}

type ButtonProps = BaseComponentWithoutAs<BButtonProps>
export default ButtonProps;