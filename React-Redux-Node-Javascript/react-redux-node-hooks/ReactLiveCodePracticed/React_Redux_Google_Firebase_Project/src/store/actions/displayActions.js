
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";

import { storage } from "../../firebase"
import { db } from "../../firebase"

export const getData = (uid) => {
    return async (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'SET_DISPLAY_INPROGRESS' });
        const todoRef = collection(db, 'displays');
        const organizationName = getState().auth?.userData?.profileData?.data?.org
        // ==
        // db.collection('families')
        // .where('users_exists.john', '==', true)
        // ==
        try {
            let allTodos = await getDocs(todoRef);
            const data = []
            allTodos.forEach((doc) => {
                if (doc.id === organizationName) {
                    data.push({ id: doc.id, data: doc.data() })
                }
            });
            dispatch({
                type: 'SET_DISPLAY_SUCCESS',
                payload: { snapshotStateMsg: "get display successfully done!.", displays: data }
            });
        } catch (error) {
            dispatch({ type: 'SET_DISPLAY_ERROR', payload: error.message });
        }
    }
}

export const resetFile = (file) => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'RESET_UPLOAD_DISPLAY' });
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
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    const newDownloadURL = [...getState().upload.downloadURL, downloadURL]
                    dispatch({
                        type: 'UPLOAD_TITLE_IMAGE_SUCCESS',
                        payload: { snapshotStateMsg: "Upload is done!.", downloadURL: newDownloadURL }
                    });
                    // ==new
                    dispatch({
                        type: 'CREATE_DISPLAY_INPROGRESS',
                        payload: { snapshotStateMsg: "Upload is done!.", downloadURL: newDownloadURL }
                    });
                    const organizationName = getState().auth?.userData?.profileData?.data?.org
                    const data = {
                        content: display.content,
                        displayName: display.title,
                        fileLocation: downloadURL,
                        storeName: display.title,
                        title: display.title,
                        uid: uid
                    }
                    // return
                    const oldData = getState()?.display?.displays[0]?.data?.data || []
                    const newData = [...oldData, data]
                    try {
                        let allTodos = await setDoc(doc(db, "displays", organizationName), { data: newData });
                        dispatch({
                            type: 'CREATE_DISPLAY_SUCCESS',
                            payload: {
                                snapshotStateMsg: "create display successfully done!.",
                                statusOfCreate: true
                            }
                        });
                    } catch (error) {
                        dispatch({ type: 'CREATE_DISPLAY_ERROR', payload: error.message });
                    }
                });
            }
        );
    }
}; 