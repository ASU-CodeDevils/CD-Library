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
  maxLength = 10,
  maxItemLength = 10,
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

  const truncatedContent =
    label.length > maxLength ? label.slice(0, maxLength) + "..." : label;
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
          <span className="title">
            {selected ? selected : truncatedContent}
            <span className="tooltiptext">{label}</span>
          </span>
        ) : (
          <span className="title">
            {truncatedContent}
            {label.length > maxLength && (
              <span className="tooltiptext">{label}</span>
            )}
          </span>
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
              {item.value.length > maxItemLength
                ? item.value.slice(0, maxLength) + "..."
                : item.value}
              {item.value.length > maxItemLength && (
                <span className="itemtooltiptext">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
