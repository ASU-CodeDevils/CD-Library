import { BaseComponentWithoutAs } from "../../..";

type alertType =
    | 'normal'
    | 'informational'
    | 'error'
    | 'warning'
    | 'sucess'
| string; 

export interface IAlertProps {
	// Providing info about type of the Alert 
	type?: alertType;
	// Alert message
	label?: string;
}

type AlertProps = BaseComponentWithoutAs<IAlertProps>;
export default AlertProps;
