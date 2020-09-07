import React from 'react';
import './CreatePostForm.scss';
import FileUploadSection from './FileUploadSection/FileUploadSection';

const CreatePostForm = () => {
  return (
    <div className="create-post-form">
      <h2>Create new Post</h2>
      <div className="form-body">
        <div className="left-section">Hello</div>
        <div className="right-section">
          <FileUploadSection />
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;
