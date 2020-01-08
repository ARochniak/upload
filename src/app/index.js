import React, { useState } from 'react';

import FilesList from '../components/FilesList';
import SubmitForm from '../components/SubmitForm';

import './index.css';

const App = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="app">
      <div className="app__wrapper">
        <SubmitForm files={files} setFiles={setFiles} />
        <FilesList files={files} setFiles={setFiles} />
      </div>
    </div>
  );
};

export default App;
