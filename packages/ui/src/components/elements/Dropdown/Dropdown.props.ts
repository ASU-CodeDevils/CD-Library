import { BaseComponentWithoutAs } from "../../..";

export interface IDropdownProps {
  /** Whether the dropdown is disabled. */
  disabled?: boolean;

  label: string;

  isSelection: boolean;

  inverted?: boolean;

  tabIndex?: number;

  // items: {};
}

type DropdownProps = BaseComponentWithoutAs<IDropdownProps>;

export default DropdownProps;
