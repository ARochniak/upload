import React from 'react';

import onUpload from '../../utils/onUpload';

import './index.css';

const SubmitForm = ({ files, setFiles }) => {
  const inputFile = React.createRef();
  const fileListToArray = list => {
    const array = [];
    for (let i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };
  const fileChangeHandler = e => {
    const selectedFiles = fileListToArray(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };
  const clickHandler = () => {
    inputFile.current.click();
  };
  return (
    <form
      onSubmit={e => {
        onUpload(e, files);
      }}
      className="upload-form"
    >
      <input
        type="file"
        multiple
        onChange={fileChangeHandler}
        className="upload-form__input-file"
        ref={inputFile}
      />
      <input type="button" value="Choose files" onClick={clickHandler} />
      {files.length ? <input type="submit" /> : null}
    </form>
  );
};

export default SubmitForm;
