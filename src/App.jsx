import React from 'react';
import './App.scss';
import Header from './components/layout/Header/Header';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <CreatePostForm />
      </div>
    </div>
  );
};

export default App;
