
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import { collection, doc, setDoc, addDoc, getDocs, query, where } from "firebase/firestore";

import { storage } from "../../firebase"
import { db } from "../../firebase"

export const getData = () => {
    return async (dispatch, getState, { getFirestore }) => {
        const organizationName = getState().auth?.userData?.profileData?.data?.org
        const galleryType = "Pictures"
        const token = "11fb7ab5-4ac2-4ff3-9ce3-0cd4659ef9cc"
        const module = "Organization"
        dispatch({ type: 'SET_EXISTING_GALLERY_IMAGE_INPROGRESS' });
        // Create a reference under which you want to list
        const listRef = ref(storage, `/${module}/${organizationName}`);
        // Find all the prefixes and items.
        listAll(listRef)
            .then((res) => {
                if (res.prefixes.length > 0) {
                    const data = {}
                    res.prefixes.forEach((folderRef) => {
                        const folderArray = (folderRef._location.path_).split("/")
                        const folder = folderArray[folderArray.length - 1]
                        const gallery = []

                        // All the prefixes under listRef.
                        // You may call listAll() recursively on them.
                        listAll(folderRef)
                            .then((res1) => {
                                res1.items.forEach((itemRef, index) => {
                                    const imageArray = (itemRef._location.path_).split("/")
                                    const imageName = imageArray[imageArray.length - 1]
                                    let url = ""
                                    url += "https://firebasestorage.googleapis.com/v0/b/mystoremywebapp.appspot.com/o/"
                                    url += `${module}%2F${organizationName}%2F${galleryType}%2F${imageName}`
                                    url += `?alt=media&token=${token}`
                                    const current = { id: index, src: url, selected: false, manualImage: false }
                                    gallery.push(current)
                                });

                                data[folder] = gallery
                                dispatch({
                                    type: 'SET_EXISTING_GALLERY_IMAGE_SUCCESS',
                                    payload: {
                                        snapshotStateMsg: "Get existing gallery successfully done!.",
                                        galleryData: data,
                                        finalGalleryData: []
                                    }
                                });
                            }).catch((error) => {
                                dispatch({ type: 'SET_EXISTING_GALLERY_IMAGE_ERROR', payload: error.message });
                            });
                    });
                } else {
                    dispatch({
                        type: 'SET_EXISTING_GALLERY_IMAGE_SUCCESS',
                        payload: { snapshotStateMsg: "Get existing gallery successfully done with no records!.", galleryData: [], finalGalleryData: [] }
                    });
                }
            }).catch((error) => {
                dispatch({ type: 'SET_EXISTING_GALLERY_IMAGE_ERROR', payload: error.message });
            });
    }
}

export const resetFile = (file) => {
    return (dispatch, getState, { getFirestore }) => {
        const galleryData = getState().playList?.galleryData;
        const Pictures = galleryData?.Pictures;
        const initialImages = Pictures?.map(obj => {
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
    return (dispatch, getState, { getFirestore }) => {
        const galleryData = getState().playList?.galleryData;
        const Pictures = galleryData?.Pictures;
        const selectedGalleryData = Pictures.filter(obj => obj.selected).map(obj => {
            const newObj = { ...obj, selected: false }
            return newObj
        })
        const nonSelectedGalleryData = { Pictures: Pictures.filter(obj => !obj.selected) }
        const finalGalleryData = [...getState().playList?.finalGalleryData, ...selectedGalleryData]
        dispatch({
            type: 'SET_FINAL_GALLERY_IMAGE',
            payload: { finalGalleryData, galleryData: nonSelectedGalleryData }
        });
    }
}

export const setGallaryImageForRemove = (id, checked) => {
    return (dispatch, getState, { getFirestore }) => {
        const finalGallery = getState().playList?.finalGalleryData;
        const finalGalleryData = finalGallery.map(obj => {
            const newObj = { ...obj }
            if (obj.id === id) {
                newObj["selected"] = checked
            }
            return newObj
        })
        dispatch({ type: 'SET_GALLERY_IMAGE', payload: { finalGalleryData } });
    }
}

export const removeImageToOld = () => {
    return (dispatch, getState, { getFirestore }) => {
        const finalGalleryData = getState().playList?.finalGalleryData;
        const selectedGalleryData = finalGalleryData.filter(obj => obj.selected && !obj.manualImage).map(obj => {
            const newObj = { ...obj, selected: false }
            return newObj
        })
        const nonSelectedGalleryData = finalGalleryData.filter(obj => !obj.selected)
        const galleryData = getState().playList?.galleryData;
        const Pictures = galleryData?.Pictures;
        const newGallery = [...Pictures, ...selectedGalleryData]
        galleryData["Pictures"] = newGallery;
        dispatch({
            type: 'SET_FINAL_GALLERY_IMAGE',
            payload: { finalGalleryData: nonSelectedGalleryData, galleryData: galleryData }
        });
    }
}

export const setManualFileData = (data) => {
    return (dispatch, getState, { getFirestore }) => {
        const finalGallery = getState().playList?.finalGalleryData;
        data["id"] = finalGallery.length + 1
        const finalGalleryData = [...finalGallery, data]
        dispatch({ type: 'SET_GALLERY_IMAGE', payload: { finalGalleryData } });
    }
}

export const uploadGalleryAndCreatePlaylist = (file, uid, playlist, display, check) => {
    return async (dispatch, getState, { getFirestore }) => {
        const organizationName = getState().auth?.userData?.profileData?.data?.org
        const galleryType = display.value
        const module = "Organization"
        const organizationTitleName = `${organizationName}-${playlist.title}`
        dispatch({ type: 'SET_EXISTING_GALLERY_IMAGE_INPROGRESS' });

        // Create the file metadata
        /* @type {any} */
        const metadata = {
            contentType: 'image/jpeg'
        };

        // // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, `/${module}/${organizationName}/${galleryType}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        dispatch({
                            type: 'UPLOAD_GALLERY_IMAGE_INPROGRESS',
                            payload: { snapshotStateMsg: "Upload is paused!.", progress }
                        });
                        break;
                    case 'running':
                        dispatch({
                            type: 'UPLOAD_GALLERY_IMAGE_INPROGRESS',
                            payload: { snapshotStateMsg: "Upload is running!.", progress }
                        });
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
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        dispatch({ type: 'UPLOAD_GALLERY_IMAGE_ERROR', payload: "storage/unknown" });
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const newDownloadURL = [...getState().playList.downloadURL, downloadURL]
                    dispatch({
                        type: 'ADD_DOWNLOAD_URL_SUCCESS',
                        payload: {
                            snapshotStateMsg: "Upload is done!.",
                            downloadURL: newDownloadURL,
                            statusOfAddDownload: check
                        }
                    });
                });
            }
        );
    }
};

export const saveMediaInDB = (uid, playlist, display) => {
    return async (dispatch, getState, { getFirestore }) => {
        const finalGallery = getState().playList?.downloadURL;
        const finalGalleryData = getState().playList?.finalGalleryData;
        const organizationName = getState().auth?.userData?.profileData?.data?.org
        const galleryType = display.value
        const module = "Organization"
        const organizationTitleName = `${organizationName}-${playlist.title}`
        finalGalleryData.filter(obj => !obj.manualImage).map(obj => {
            finalGallery.push(obj.src)
        })
        try {
            let allTodos = await setDoc(doc(db, organizationName, organizationTitleName), {
                Pictures: finalGallery
            });
            dispatch({
                type: 'CREATE_PLAYLIST_SUCCESS',
                payload: {
                    snapshotStateMsg: "create playlist successfully done!.",
                    statusOfCreate: true,
                    statusOfAddDownload: false
                }
            });
        } catch (error) {
            dispatch({ type: 'CREATE_PLAYLIST_ERROR', payload: error.message });
        }
    }
}
export const getPlaylistData = (organizationName) => {
    return async (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'GET_PLAYLIST_INPROGRESS' });
        const todoRef = collection(db, organizationName);
        try {
            // Create a query against the collection.
            const oldPlayListData = await getDocs(todoRef);
            let dataA = []
            oldPlayListData.forEach((doc) => {
                dataA.push({ id: doc.id, data: doc.data() })
            });
            let data = dataA
            dispatch({
                type: 'GET_PLAYLIST_SUCCESS',
                payload: {
                    snapshotStateMsg: "Get playlist data successfully done!.",
                    playListData: data,
                }
            });
        } catch (error) {
            dispatch({ type: 'GET_PLAYLIST_ERROR', payload: error.message });
        }
    }
}