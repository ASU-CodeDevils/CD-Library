import React, { useState } from "react";
import cx from "clsx";

import DropdownProps from "./Dropdown.props";
import { UI_CLASSNAME } from "../../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({
  label = "Dropdown",
  children,
  className,
  disabled,
  inverted,
  tabIndex,
  isSelection,
  items,
}: DropdownProps) {
  const computerTabIndex = () => {
    return disabled ? -1 : tabIndex;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "dropdown",
        {
          disabled: disabled,
          inverted: inverted,
        },
        className
      )}
    >
      <div className={cx("dropdown-content", { disabled: disabled })}>
        <div
          tabIndex={computerTabIndex()}
          className="dropdown-title"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <div>{selected ? selected : "Choose One"}</div>
           */}
          {isSelection ? (
            <div>{selected ? selected : label}</div>
          ) : (
            <div>{label}</div>
          )}
          <div>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{
                transform: `rotate(${isOpen ? 180 : 0}deg)`,
                transition: "all 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
        {isOpen &&
          items.map((item, index) => (
            <div
              key={index}
              {...item.args}
              onClick={() => {
                setSelected(item.value);
                setIsOpen(false);
              }}
              className="dropdown-item"
            >
              {item.value}
            </div>
          ))}
      </div>
      {children}
    </div>
  );
}

export default Dropdown;
