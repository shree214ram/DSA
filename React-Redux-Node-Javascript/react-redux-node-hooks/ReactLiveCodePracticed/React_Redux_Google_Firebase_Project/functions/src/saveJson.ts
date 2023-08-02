import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK with the specific database URL
const serviceAccount = require('../src/serviceAccountKey.json');
const databaseURL = 'https://mystoremywebuserifo.firebaseio.com'; 

const realTimeDatbase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL
  },'realTimeDatbase');

const realTimeDb = realTimeDatbase.database();

export const addUserInfo = functions.https.onRequest(async (req, res) => {
    try {
      const path = 'users'; // Replace with the desired path in your Firebase Realtime Database
      const newData = req.body
  
       // Update the specified fields and append a new value to field4
    await realTimeDb.ref(path).update(newData);

    res.send('New user appended successfully.');
  } catch (error) {
    console.error(`Error updating JSON data: ${error}`);
    res.status(500).send('Error updating JSON data.');
  }
});
  

export const insertNewJson = functions.https.onRequest(async (req, res) => {
    try {
      const path = 'users'; // Replace with the desired path in your Firebase Realtime Database
      const jsonData = req.body;
  
      await uploadAndEditJsonData(path, jsonData);
  
      res.send('JSON data uploaded and edited successfully.');
    } catch (error) {
      console.error(`Error uploading and editing JSON data: ${error}`);
      res.status(500).send('Error uploading and editing JSON data.');
    }
  });
  
  async function uploadAndEditJsonData(path: string, jsonData: object): Promise<void> {
    try {
      await realTimeDb.ref(path).set(jsonData);
      //await db.ref(`${path}/field1`).set('new value');
      //await db.ref(`${path}/field2`).set('updated value');
    } catch (error) {
      throw new Error(`Error uploading and editing JSON data: ${error}`);
    }
  }
