
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";

import { storage } from "../../firebase"
import { db } from "../../firebase"

export const getData = () => {
    return async (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'SET_DISPLAY_INPROGRESS' });
        const todoRef = collection(db, 'displays');
        try {
            let allTodos = await getDocs(todoRef);
            const data = []
            allTodos.forEach((doc) => {
                data.push({ id: doc.id, data: doc.data() })
            });
            dispatch({ type: 'SET_DISPLAY_SUCCESS', payload: { snapshotStateMsg: "get display successfully done!.", displays: data } });
        } catch (error) {
            dispatch({ type: 'SET_DISPLAY_ERROR', payload: error.message });
        }
    }
}

export const resetFile = (file) => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'RESET_UPLOAD' });
    }
}

export const uploadTitleImageAndCreateDisplay = (file, uid, display) => {
    return (dispatch, getState, { getFirestore }) => {

        // Create the file metadata
        /* @type {any} */
        const metadata = {
            contentType: 'image/jpeg'
        };

        // // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, `${uid}/${display.title}/${file.name}`);
        // const storageRef = ref(storage, `Organization/${display.title}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        dispatch({ type: 'UPLOAD_TITLE_IMAGE_INPROGRESS', payload: { snapshotStateMsg: "Upload is paused!.", progress } });
                        break;
                    case 'running':
                        dispatch({ type: 'UPLOAD_TITLE_IMAGE_INPROGRESS', payload: { snapshotStateMsg: "Upload is running!.", progress } });
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        dispatch({ type: 'UPLOAD_TITLE_IMAGE_ERROR', payload: "storage/unauthorized" });
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        dispatch({ type: 'UPLOAD_TITLE_IMAGE_ERROR', payload: "storage/canceled" });
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        dispatch({ type: 'UPLOAD_TITLE_IMAGE_ERROR', payload: "storage/unknown" });
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const newDownloadURL = [...getState().upload.downloadURL, downloadURL]
                    dispatch({ type: 'UPLOAD_TITLE_IMAGE_SUCCESS', payload: { snapshotStateMsg: "Upload is done!.", downloadURL: newDownloadURL } });
                    addDoc(collection(db, "displays"), {
                        content: display.content,
                        displayName: display.title,
                        fileLocation: downloadURL,
                        storeName: "Target",
                        title: "titletest",
                        uid: uid
                    })
                        .then(() => {
                            dispatch({ type: 'CREATE_DISPLAY_SUCCESS', payload: { snapshotStateMsg: "create display successfully done!.", statusOfCreate: true } });
                        })
                        .catch((err) => {
                            dispatch({ type: 'CREATE_DISPLAY_ERROR', payload: err.message });
                        });
                });
            }
        );
    }
}; 