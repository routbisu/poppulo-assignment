import React from 'react';
import './TextboxControl.scss';

const TextboxControl = (props) => {
  const { label, value, maxLength, rows } = props;

  return (
    <div className="textbox-control">
      <div className="textbox-wrapper">
        {rows ? <textarea {...props} /> : <input type="text" {...props} />}
        {label && <div className={`label ${value && 'focussed'}`}>{label}</div>}
        {maxLength && (
          <div className="length-container">
            {value.length} / {maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextboxControl;
