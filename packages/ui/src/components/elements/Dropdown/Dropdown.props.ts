import { BaseComponentWithoutAs } from "../../..";

type Items = {
  value: string;
  onClick?: () => void;
};
export interface IDropdownProps {
  label: string;

  isSelection: boolean;

  inverted?: boolean;

  tabIndex?: number;

  items: Array<Items>;
}

type DropdownProps = BaseComponentWithoutAs<IDropdownProps>;

export default DropdownProps;
