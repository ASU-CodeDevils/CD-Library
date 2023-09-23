import { BaseComponentWithoutAs } from "../../..";

type Items = {
  value: string;
  args?: string[];
};
export interface IDropdownProps {
  /** Whether the dropdown is disabled. */
  disabled?: boolean;

  label: string;

  isSelection: boolean;

  inverted?: boolean;

  tabIndex?: number;
  items: Array<Items>;
  // items: {};
}

type DropdownProps = BaseComponentWithoutAs<IDropdownProps>;

export default DropdownProps;
