import React, { useState, useEffect } from 'react';
import './TabSelector.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TabSelector = ({ items, defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [selected, onChange]);

  return (
    <div className="tab-selector-container">
      {items &&
        items.map((item) => (
          <div
            className={`item-wrapper ${item.key === selected && 'active'}`}
            key={item.key}
            onClick={() => setSelected(item.key)}
          >
            <FontAwesomeIcon icon={item.icon} />
            <div className="label">{item.label}</div>
          </div>
        ))}
    </div>
  );
};

export default TabSelector;
