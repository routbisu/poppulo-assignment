import React from 'react';
import './Header.scss';
import Logo from '../Logo';
import { menuItems } from '../../../config/constants';
import UserMenuItem from '../../UserMenuItem/UserMenuItem';
import {
  faQuestionCircle,
  faCog,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="logo-section">
          <div className="hamburger">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <Logo />
          <div className="main-menu">
            {menuItems.map((menuItem) => (
              <a
                key={menuItem.slug}
                href={menuItem.slug}
                className={menuItem.slug === '/mobile' ? 'active' : ''}
              >
                {menuItem.label}
              </a>
            ))}
          </div>
        </div>
        <div className="user-menu">
          <UserMenuItem text="Help" icon={faQuestionCircle} />
          <UserMenuItem text="Account Name" icon={faCog} />
          <UserMenuItem text="Username" icon={faUser} />
        </div>
      </div>
    </header>
  );
};

export default Header;
