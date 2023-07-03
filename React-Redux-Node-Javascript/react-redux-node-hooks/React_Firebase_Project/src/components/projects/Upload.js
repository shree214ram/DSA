import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { upload, resetFile } from '../../store/actions/uploadActions'
import { listAll, ref } from "firebase/storage";
import { storage } from "../../firebase"
import Select from 'react-select'

const Upload = ({ userData }) => {
    const { progress, downloadURL, snapshotStateMsg, loading, err } = useSelector(state => state.upload)
    const dispatch = useDispatch()
    const fileInputRef = useRef();
    const [fileData, setFileData] = useState([]);
    const [display, setDisplay] = useState({ value: null, label: 'Select Display' });
    const [options, setOptions] = useState([]);

    const setDisplayValue = (e) => {
        setDisplay(e);
        resetFileData();
    }
    const resetFileData = () => {
        if (fileInputRef?.current?.value) {
            fileInputRef.current.value = null;
        }
        setFileData(null);
        dispatch(resetFile())
    }

    const onSelectFile = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            dispatch(resetFile())
            const file = fileInputRef.current.files;
            setFileData(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fileData) return
        //Get files
        for (var i = 0; i < fileData.length; i++) {
            var imageFile = fileData[i];
            dispatch(upload(imageFile, userData.uid, display))
        }
    }
    useEffect(() => {
        if (userData?.uid) {

            // Create a reference under which you want to list
            const listRef = ref(storage, userData.uid);
            // const listRef = ref(storage, userData?.uid);

            // Find all the prefixes and items.
            listAll(listRef)
                .then((res) => {
                    const options = [{ value: null, label: 'Select Display' }]
                    res.prefixes.forEach((folderRef) => {
                        const folder = (folderRef._location.path_).split("/")[1]
                        options.push({ value: folder, label: folder })
                        // All the prefixes under listRef.
                        // You may call listAll() recursively on them.
                    });

                    setOptions(options)
                    res.items.forEach((itemRef) => {
                        // All the items under listRef.
                    });
                }).catch((error) => {
                    // Uh-oh, an error occurred!
                });
        }
    }, [userData])
    const fileHTML = []
    if (fileData) {
        for (var i = 0; i < fileData.length; i++) {
            fileHTML.push(
                <div className="file-data-container">
                    <div> {fileData[i].name} </div>
                    <div
                        style={{ marginLeft: "20px", cursor: "pointer" }}
                        onClick={resetFileData}
                    >
                        {" "}
                        X{" "}
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Upload Documents</h5>
                <div className="input-field">
                    <section className="file-upload">
                        <Select
                            // isMulti
                            defaultValue={options[0]}
                            onChange={(e) => setDisplayValue(e)}
                            value={display}
                            options={options}
                        />
                    </section>
                </div>
                {(display.value !== null) ? (<div className="input-field">
                    <section className="file-upload">
                        <label
                            className="btn grey lighten-1 z-depth-0"
                            htmlFor="file-upload"
                            onClick={(e) => {
                                e.preventDefault();
                                fileInputRef.current.click()
                            }
                            }
                        >
                            Click or Drag to Upload
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            hidden
                            multiple
                            ref={fileInputRef}
                            onChange={(e) => onSelectFile(e)}
                        />
                        {fileHTML}
                    </section>
                </div>) : ""}
                {
                    loading &&
                    <div className="input-field">
                        Loading...
                    </div>
                }
                {err &&
                    <h5 className='error'>{err}</h5>
                }
                {progress != 0 &&
                    <div >
                        <h5>{'Upload is ' + progress + '% done'}</h5>
                        <br />
                        <h5 className='sucess'>{snapshotStateMsg}</h5>
                    </div>
                }
                {downloadURL && downloadURL.length ?
                    downloadURL.map(obj => {
                        return (<div className="input-field">
                            <img style={{ width: "100px" }} src={obj} /></div>)
                    })
                    : ""
                }
                {!!fileData && (<div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Upload</button>
                    <button className="btn lighten-1 z-depth-0" onClick={resetFileData} >Reset</button>
                </div>)}
            </form>
        </div>
    )
}

export default Upload