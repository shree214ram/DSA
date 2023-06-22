import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as multer from 'multer';
import * as express from 'express';

const multer = require("multer")
const formidable = require("formidable")
admin.initializeApp();
const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });
const bucket = admin.storage().bucket();

//sunny tried for upload image from google firebase cloud function , please do not remove . I will work on this lator
export const uploadFileFn = functions.https.onRequest((req, res) => {
  var form = new formidable.IncomingForm();
  return new Promise((resolve, reject) => {
    form.parse(req, function(err, fields, files) {
      var file = files.fileToUpload;
      if(!file){
        reject("no file to upload, please choose a file.");
        return;
      }
      console.info("about to upload file as a json: " + file.type);
      var filePath = file.path;
      console.log('File path: ' + filePath);

      var bucket = gcs.bucket('bucket-name');
      return bucket.upload(filePath, {
          destination: file.name
      }).then((data) => {
        resolve(data);  // Whole thing completed successfully.
      }).catch((err) => {
        reject('Failed to upload: ' + JSON.stringify(err));
      });
    });
  }).then(() => {
    res.status(200).send('Yay!');
    return null
  }).catch(err => {
    console.error('Error while parsing form: ' + err);
    res.status(500).send('Error while parsing form: ' + err);
  });
});
//sunny tried

export const uploadImage = functions.https.onRequest(async (req, res) => {
  
  const fileData = req.body.fileData; 
  const fileName = req.body.fileName;
  const folderName = req.body.folderName

  //set folder and file name
  const filename = `${folderName}/${fileName}`;


  try {

    // Create a new file in Firebase Storage
    console.log(fileData);
    console.log(filename);
    const file = bucket.file(filename);

    // Write the file data to the Firebase Storage
    await file.save(fileData, {
      contentType: 'image/jpeg', // Set the content type according to your file type
    });

    // Get the public URL of the uploaded file
    const [publicUrl] = await file.getSignedUrl({
      action: 'read',
      expires: '03-09-2491', // Set an expiration date or any desired duration
    });

    // Respond with the public URL
    res.send(publicUrl);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file.');
  }
});

app.post('/uploadJPGImage', upload.single('file'), async (req: express.Request, res: express.Response) => {
  const fileData = req.body.fileData;
  // const fileName = req.body.fileName;
  // const folderName = req.body.folderName;

  console.log(fileData);

  // set folder and file name
  // const filename = `${folderName}/${fileName}`;

  // try {

  //   // Check if file data is available
  //   if (!fileData) {
  //     throw new Error('No file uploaded.');
  //   }

  //   // Create a new file in Firebase Storage

  //   const file = bucket.file(filename);

  //   // Write the file data to Firebase Storage
  //   await file.save(fileData.buffer, {
  //     contentType: 'image/jpeg', // Set the content type to 'image/jpeg' for JPG images
  //   });

  //   // Get the public URL of the uploaded file
  //   const [publicUrl] = await file.getSignedUrl({
  //     action: 'read',
  //     expires: '03-09-2491', // Set an expiration date or any desired duration
  //   });

  //   // Respond with the public URL
  //   res.send(publicUrl);
  // } catch (error) {
  //   console.error('Error uploading file:', error);
  //   res.status(500).send('Error uploading file.');
  // }
});


app.post('/test', (req, res) => {
  try {
    // Extract data from the request body
    const { name, message } = req.body;

    // Perform any desired logic
    const result = `Hello, ${name}! You said: ${message}`;

    // Respond with the result
    res.status(200).json({ result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Something went wrong');
  }
});


export const uploadJPGImage = functions.https.onRequest(app);

