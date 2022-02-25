import { IconProp, IconName as FAIconName } from "@fortawesome/fontawesome-svg-core";
import { BaseComponentWithoutAs } from "../../..";

/** Available icon names. */
export type IconName = IconProp;

export interface IIconProps {
    /** The name of the icon to use. */
    name: IconName;
}

/**
 * Typeguard for `IconName`.
 * 
 * @param name The name to check.
 * @returns Whether the name is an `IconName`.
 */
export const isIconName = (name: any | IconName): name is IconName => {
    return (typeof name === "string" || Array.isArray(name));
}

/**
 * Typeguard for `IIconProps`.
 * 
 * @param props The props being passed.
 * @returns Whether the props are icon props.
 */
export const isIconProps = (props: any | IIconProps): props is IIconProps => {
    return isIconName(props.name);
}

type IconProps = BaseComponentWithoutAs<IIconProps>;
export default IconProps;
