import { BaseComponentWithoutAs } from "../../..";

type Items = {
  /** Display item label */
  value: string;
  /** Optional onClick function to dropdown item */
  onClick?: () => void;
};
export interface IDropdownProps {
  /** Display label */
  label: string;
  /** Whether it is a selection type or normal dropdown */
  isSelection: boolean;
  /** Whether the button is inverted */
  inverted?: boolean;
  /** Associate this element with tab index. */
  tabIndex?: number;
  /** Max lenght of label */
  maxLength?: number;
  /** Dropdown list item */
  items: Array<Items>;
}

type DropdownProps = BaseComponentWithoutAs<IDropdownProps>;

export default DropdownProps;
