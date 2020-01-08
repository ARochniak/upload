const { IncomingForm } = require('formidable');
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.on('file', (field, file) => {
    fs.copyFile(file.path, `../public/upload/${file.name}`, err => {
      if (err) throw err;
    });
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};
