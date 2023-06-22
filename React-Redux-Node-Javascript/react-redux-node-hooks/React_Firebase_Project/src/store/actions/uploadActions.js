import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase"

export const resetFile = (file) => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'RESET_UPLOAD' });
    }
}



export const upload = (file,uid,display) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        // make async call to database

        // Create the file metadata
        /* @type {any} */
        const metadata = {
            contentType: 'image/jpeg'
        };

        // // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, `${uid}/${display.value}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        dispatch({ type: 'UPLOAD_INPROGRESS', payload: { snapshotStateMsg: "Upload is paused!.", progress } });
                        break;
                    case 'running':
                        dispatch({ type: 'UPLOAD_INPROGRESS', payload: { snapshotStateMsg: "Upload is running!.", progress } });
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        dispatch({ type: 'UPLOAD_ERROR', payload: "storage/unauthorized" });
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        dispatch({ type: 'UPLOAD_ERROR', payload: "storage/canceled" });
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        dispatch({ type: 'UPLOAD_ERROR', payload: "storage/unknown" });
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const newDownloadURL = [...getState().upload.downloadURL,downloadURL]
                    dispatch({ type: 'UPLOAD_SUCCESS', payload: { snapshotStateMsg: "Upload is done!.",downloadURL:newDownloadURL } });
                });
            }
        );
    }
}; 