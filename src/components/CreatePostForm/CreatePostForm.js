import React, { useState } from 'react';
import './CreatePostForm.scss';
import FileUploadSection from './FileUploadSection/FileUploadSection';
import TextboxControl from '../TextboxControl/TextboxControl';

const CreatePostForm = () => {
  const [title, setTitle] = useState(
    '10 Challenges with employee communications'
  );
  const [author, setAuthor] = useState('');
  const [post, setPost] = useState('');

  return (
    <div className="create-post-form">
      <h2>Create new Post</h2>
      <div className="form-body">
        <div className="left-section">
          <form>
            <TextboxControl
              label="Title"
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
              maxLength={70}
            />
            <TextboxControl
              label="Author"
              value={author}
              onChange={(evt) => setAuthor(evt.target.value)}
              maxLength={40}
            />
            <TextboxControl
              label="Post"
              value={post}
              onChange={(evt) => setPost(evt.target.value)}
              rows={15}
            />
            <div className="btn-section">
              <button className="btn-primary btn-primary-outline">
                Save Draft
              </button>
              <button className="btn-primary">Publish Now</button>
            </div>
          </form>
        </div>
        <div className="right-section">
          <FileUploadSection />
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;
