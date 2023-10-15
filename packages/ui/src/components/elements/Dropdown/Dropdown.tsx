import React, { useState } from "react";
import cx from "clsx";

import DropdownProps from "./Dropdown.props";
import { UI_CLASSNAME } from "../../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({
  label = "Dropdown",
  className,
  inverted,
  tabIndex,
  isSelection,
  items,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const selectOption = (value: string, onClick?: () => void) => {
    setSelected(value);
    setIsOpen(false);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "dropdown",
        { inverted: inverted },
        className
      )}
      tabIndex={tabIndex}
    >
      <div className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
        {isSelection ? (
          <span className="title">{selected ? selected : label}</span>
        ) : (
          <span className="title">{label}</span>
        )}
        <FontAwesomeIcon
          className="faCaret"
          icon={isOpen ? faCaretUp : faCaretDown}
        />
      </div>
      {isOpen && (
        <div className="dropdown__items">
          {items.map((item, index) => (
            <div
              className="dropdown__item"
              key={index}
              onClick={() => {
                selectOption(item.value, item.onClick);
              }}
            >
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
