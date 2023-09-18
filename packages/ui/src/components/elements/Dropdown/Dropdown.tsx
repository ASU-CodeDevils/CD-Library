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
}: DropdownProps) {
  const computerTabIndex = () => {
    return disabled ? -1 : tabIndex;
  };
  const options = ["React", "Item2", "Item3", "Vue"];
  const [isOpen, setIsOpen] = useState(false);
  // const [selected, setSelected] = useState(String);

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
      <div className="dropdown-content">
        <div
          tabIndex={computerTabIndex()}
          className="dropdown-title"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <div>{selected ? selected : "Choose One"}</div>
           */}
          <div>{label}</div>
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
          options.map((option, key) => (
            <div key={key} className="dropdown-item">
              {option}
            </div>
          ))}
      </div>
      {children}
    </div>
  );
}

export default Dropdown;
