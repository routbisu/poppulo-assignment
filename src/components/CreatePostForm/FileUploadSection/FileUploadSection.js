import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpload,
  faPaperclip,
  faUsers,
  faBell,
  faComment,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import './FileUploadSection.scss';
import TabSelector from '../../TabSelector/TabSelector';

const tabItems = [
  { key: 'AUDIENCE', label: 'Audience', icon: faUsers },
  { key: 'NOTIFICATIONS', label: 'Notifications', icon: faBell },
  { key: 'SOCIAL', label: 'Social', icon: faComment },
  { key: 'CAMPAIGNS', label: 'Campaigns', icon: faBullhorn },
];

const FileUploadSection = () => {
  return (
    <div className="file-upload-section-container">
      <div className="drop-section">
        <FontAwesomeIcon icon={faUpload} className="upload-icon" />
        <div className="label">Drop a file here</div>
        <div className="footer">
          <p>
            Choose from <span>Media library</span> or <span>Browse</span>
          </p>
          <p>(.jpg, .png, .gif)</p>
        </div>
      </div>

      <div className="drop-button">
        <FontAwesomeIcon icon={faPaperclip} />
        Drop up to 3 pdfs or click to browse
      </div>
      <TabSelector items={tabItems} defaultValue={tabItems[0].key} />
    </div>
  );
};

export default FileUploadSection;
