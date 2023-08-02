
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";

import { storage } from "../../firebase"
import { db } from "../../firebase"

export const getData = () => {
    return async (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'SET_EXISTING_GALLERY_IMAGE_INPROGRESS' });
        // Create a reference under which you want to list
        const listRef = ref(storage, "/Organization/Dominos");
        // const listRef = ref(storage, userData?.uid);

        // Find all the prefixes and items.
        listAll(listRef)
            .then((res) => {
                const data = {}
                res.prefixes.forEach((folderRef) => {

                    const folderArray = (folderRef._location.path_).split("/")
                    const folder = folderArray[folderArray.length - 1]
                    const gallery = []
                    // options.push({ value: folder, label: folder })
                    // All the prefixes under listRef.
                    // You may call listAll() recursively on them.
                    listAll(folderRef)
                        .then((res1) => {
                            res1.items.forEach((itemRef, index) => {
                                console.log(itemRef, "itemRef")
                                const imageArray = (itemRef._location.path_).split("/")
                                const imageName = imageArray[imageArray.length - 1]
                                let url = ""
                                // url+="https://firebasestorage.googleapis.com/v0/b/mystoremywebapp.appspot.com/o/Organization Dominos Pictures"
                                // url+= imageName
                                // url+= "?alt=media&token=551dc1a7-327e-4f90-8a97-f8ec245cf521" 
                                // url = encodeURIComponent(url)
                                //  url+= `https://firebasestorage.googleapis.com/v0/b/mystoremywebapp.appspot.com/o/roDkUrACQAQgAd3sAe2FCyXbY9e2%2Fsp_org1%2F${imageName}?alt=media&token=551dc1a7-327e-4f90-8a97-f8ec245cf521`
                                url += `https://firebasestorage.googleapis.com/v0/b/mystoremywebapp.appspot.com/o/Organization%2FDominos%2FPictures%2F${imageName}?alt=media&token=11fb7ab5-4ac2-4ff3-9ce3-0cd4659ef9cc`
                                const current = { id: index, src: url, selected: false }
                                gallery.push(current)
                            });

                            data[folder] = gallery
                            dispatch({ type: 'SET_EXISTING_GALLERY_IMAGE_SUCCESS', payload: { snapshotStateMsg: "get display successfully done!.", galleryData: data } });
                        }).catch((error) => {
                            console.log(error)
                            dispatch({ type: 'SET_EXISTING_GALLERY_IMAGE_ERROR', payload: error.message });
                            // Uh-oh, an error occurred!
                        });
                });
            }).catch((error) => {
                console.log(error)
                dispatch({ type: 'SET_EXISTING_GALLERY_IMAGE_ERROR', payload: error.message });
                // Uh-oh, an error occurred!
            });
    }
}

export const resetFile = (file) => {
    return (dispatch, getState, { getFirestore }) => {
        const galleryData = getState().playList?.galleryData;
        const Pictures = galleryData?.Pictures;
        const initialImages = Pictures.map(obj => {
            return { ...obj, selected: false }
        })
        galleryData[Pictures] = initialImages;
        dispatch({ type: 'RESET_UPLOAD', payload: { galleryData } });
    }
}

export const setGallaryImage = (id, checked) => {
    return (dispatch, getState, { getFirestore }) => {
        const galleryData = getState().playList?.galleryData;
        const Pictures = galleryData?.Pictures;
        const initialImages = Pictures.map(obj => {
            const newObj = { ...obj }
            if (obj.id === id) {
                newObj["selected"] = checked
            }
            return newObj
        })
        galleryData["Pictures"] = initialImages;
        dispatch({ type: 'SET_GALLERY_IMAGE', payload: { galleryData } });
    }
}

export const addImageToNew = () => {
    console.log("addImageToNew acton")
    return (dispatch, getState, { getFirestore }) => {
        const galleryData = getState().playList?.galleryData;
        const Pictures = galleryData?.Pictures;
        const selectedGalleryData = Pictures.filter(obj => obj.selected)
        const nonSelectedGalleryData = Pictures.filter(obj => !obj.selected)
        const finalGalleryData = [...getState().playList?.finalGalleryData ,...selectedGalleryData]
        dispatch({ type: 'SET_FINAL_GALLERY_IMAGE', payload: { finalGalleryData } });
    }
}
export const uploadGalleryAndCreatePlaylist = (file, uid, display) => {
    return (dispatch, getState, { getFirestore }) => {

        // Create the file metadata
        /* @type {any} */
        const metadata = {
            contentType: 'image/jpeg'
        };

        // // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, `${uid}/${display.title}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        dispatch({ type: 'UPLOAD_GALLERY_IMAGE_INPROGRESS', payload: { snapshotStateMsg: "Upload is paused!.", progress } });
                        break;
                    case 'running':
                        dispatch({ type: 'UPLOAD_GALLERY_IMAGE_INPROGRESS', payload: { snapshotStateMsg: "Upload is running!.", progress } });
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        dispatch({ type: 'UPLOAD_GALLERY_IMAGE_ERROR', payload: "storage/unauthorized" });
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        dispatch({ type: 'UPLOAD_GALLERY_IMAGE_ERROR', payload: "storage/canceled" });
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        dispatch({ type: 'UPLOAD_GALLERY_IMAGE_ERROR', payload: "storage/unknown" });
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const newDownloadURL = [...getState().upload.downloadURL, downloadURL]
                    dispatch({ type: 'UPLOAD_GALLERY_IMAGE_SUCCESS', payload: { snapshotStateMsg: "Upload is done!.", downloadURL: newDownloadURL } });
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