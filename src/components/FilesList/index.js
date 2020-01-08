import React from 'react';

import './index.css';

const FilesList = ({ files, setFiles }) => {
  const removeFile = fileIdx => {
    const newFiles = [...files];
    newFiles.splice(fileIdx, 1);
    setFiles(newFiles);
  };

  return (
    <ul className="files-list">
      {files.map((file, i) => (
        <li key={i} className="files-list__li">
          <div className="files-list__li__first">{file.name}</div>
          <div>{file.size} bytes</div>
          <div>
            <button
              className="files-list__li__close"
              onClick={() => {
                removeFile(i);
              }}
              type="button"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FilesList;
