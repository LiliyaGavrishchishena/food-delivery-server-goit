const multer = require('multer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const renameFile = util.promisify(fs.rename);

const TEMP_IMAGE_FOLDER = path.join(__dirname, '../../../', 'assets');
const USER_IMAGE_FOLDER = path.join(__dirname, '../../', 'db', 'user-images');

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, TEMP_IMAGE_FOLDER);
  },
  filename: (req, file, next) => {
    next(null, file.originalname);
  }
});

const upload = multer({ storage });

const moveImage = (fileObject, userId) => {
  const userImageFolderName = 'user-' + userId;
  const userImagePath = path.join(USER_IMAGE_FOLDER, userImageFolderName);

  if (!fs.existsSync(userImagePath)) {
    fs.mkdirSync(userImagePath);
  }

  const tempFilePath = path.join(TEMP_IMAGE_FOLDER, fileObject.originalname);
  const newFilePath = path.join(userImagePath, fileObject.originalname);

  return renameFile(tempFilePath, newFilePath)
    .then(() => userImageFolderName)
    .catch(error => console.log(error));
};

const saveImageMultipart = (req, res) => {
  const fileObject = req.file;

  const userId = req.body.userId;

  moveImage(fileObject, userId).then(userImageFolderName => {
    res.json({ status: 'was saved in folder: ' + userImageFolderName });
  });
};
module.exports = () => [upload.single('file'), saveImageMultipart];
