const onUpload = async (e, files) => {
  e.preventDefault();
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i]);
  }

  try {
    const response = await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData
    });
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

export default onUpload;
