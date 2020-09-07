import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './UserMenuItem.scss';

const UserMenuItem = ({ text, icon, onClick }) => {
  const clickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <div className="user-menu-item-container" onClick={clickHandler}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <div className="label">{text}</div>
      <FontAwesomeIcon icon={faCaretDown} className="icon-carret" />
    </div>
  );
};

export default UserMenuItem;
