import { BaseComponentWithoutAs } from "../../..";
import { Icon, IconName, IconProps } from "../Icon";

export interface IAlertProps {
  /** Different icon and color according to the severity level */
  severity?: "error" | "warning" | "info" | "success";
  /** Use Specific icon */
  icon?: typeof Icon | IconProps | IconName | boolean;
  /** variant prop */
  variant?: "outlined" | "filled";
}

type AlertProps = BaseComponentWithoutAs<IAlertProps>;
export default AlertProps;
