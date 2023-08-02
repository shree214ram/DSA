
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import { collection, doc, setDoc, addDoc, getDocs, query, where } from "firebase/firestore";
import { storage } from "../../firebase"
import { db } from "../../firebase"
import auth from "../../firebase"
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";


export const resetForm = (file) => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'RESET_FORM' });
    }
}
export const signUp = (stateData) => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch({ type: 'USER_SIGNUP_INPROGRESS' });
        createUserWithEmailAndPassword(auth, stateData.email, stateData.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: `${stateData.firstName} ${stateData.lastName}`,
                    phoneNumber: stateData.phoneNumber,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(async () => {
                    // Profile updated!
                    const uId = user.uid
                    const collection = "Users"
                    const data = {
                        fName: stateData.firstName,
                        lName: stateData.lastName,
                        org: stateData.email,
                        role: "User"
                    }
                    try {
                        let allTodos = await setDoc(doc(db, collection, uId), data);
                        const listen = onAuthStateChanged(auth, async (user) => {
                            if (user) {
                                dispatch({
                                    type: 'USER_SIGNUP_SUCCESS',
                                    payload: {
                                        snapshotStateMsg: "Signup successfully done!.",
                                        statusOfCreate: true,
                                        isCheckLoggedIn: true,
                                        userData: { ...user, profileData: { data } }
                                    }
                                });
                            }
                            else {
                                dispatch({
                                    type: 'USER_SIGNUP_SUCCESS',
                                    payload: { isCheckLoggedIn: false, userData: null }
                                });
                            }
                        });
                        return () => {
                            listen();
                        }
                    } catch (error) {
                        dispatch({ type: 'USER_SIGNUP_ERROR', payload: error.message });
                    }
                }).catch((error) => {
                    dispatch({ type: 'USER_SIGNUP_ERROR', payload: error.message });
                });
            })
            .catch((error) => {
                dispatch({ type: 'USER_SIGNUP_ERROR', payload: error.message });
            });
    }
}

export const authLogin = (formState) => {
    return (dispatch, getState, { getFirestore }) => {
        signInWithEmailAndPassword(auth, formState.email, formState.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({
                    type: 'LOGIN_AUTH_SUCCESS',
                    payload: { snapshotStateMsg: "Upload is paused", progress: 1 }
                });

                //   navigate("/");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch({ type: 'LOGIN_AUTH_ERROR', payload: "storage/unknown" });
            });

    }
};

export const authLogout = () => {
    return (dispatch, getState, { getFirestore }) => {
        signOut(auth)
            .then(() => {
                // Signed out 
                dispatch({
                    type: 'SYSTEM_LOGOUT',
                });
            })
            .catch((error) => {
                dispatch({ type: 'SET_AUTH_USER_DATA_ERROR', payload: error.message });
            });
    }
}

export const getAuthDetails = () => {
    return (dispatch, getState, { getFirestore }) => {
        const listen = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const collectionName = "Users"
                dispatch({ type: 'SET_AUTH_USER_DATA_INPROGRESS' });
                const todoRef = collection(db, collectionName);
                try {
                    // Create a query against the collection.
                    const oldPlayListData = await getDocs(todoRef);
                    let data;
                    oldPlayListData.forEach((doc) => {
                        if (doc.id === user.uid) {
                            data = { id: doc.id, data: doc.data().Pictures || doc.data() }
                        }
                    });
                    dispatch({
                        type: 'SET_AUTH_USER_DATA_SUCCESS',
                        payload: {
                            isCheckLoggedIn: true,
                            userData: { ...user, profileData: data }
                        }
                    });

                } catch (error) {
                    dispatch({ type: 'SET_AUTH_USER_DATA_ERROR', payload: error.message });
                }
            }
            else {
                // User is signed out

                dispatch({
                    type: 'SET_AUTH_USER_DATA_SUCCESS',
                    payload: { isCheckLoggedIn: false, userData: null }
                });
            }
        });
        return () => {
            listen();
        }
        // ...
    }
}