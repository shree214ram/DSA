import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  uploadGalleryAndCreatePlaylist,
  resetFile,
  getData,
  setGallaryImage,
  addImageToNew,
  setGallaryImageForRemove,
  removeImageToOld,
  setManualFileData,
  saveMediaInDB,
} from '../../store/actions/playListAction'
import Select from 'react-select'
import DragNDrop from "../common/DragNDrop/App"

const CreatePlayList = ({ userData }) => {
  const [display, setDisplay] = useState({ value: null, label: 'Select Content Type' });
  const [options, setOptions] = useState([
    { value: null, label: 'Select Content Type' },
    { value: "Pictures", label: 'Pictures' },
    { value: "Video", label: 'Video' }
  ]);

  const navigate = useNavigate();
  const { progress,
    downloadURL,
    snapshotStateMsg,
    loading,
    statusOfCreate,
    err,
    galleryData,
    finalGalleryData,
    statusOfAddDownload
  } = useSelector(state => state.playList)
  const dispatch = useDispatch()
  const fileInputRef = useRef();
  const [fileData, setFileData] = useState([]);
  const [formState, setFormState] = useState({
    title: '',
  })
  const handleChange = (e) => {
    setFormState(old => {
      const newState = { ...old }
      newState[e.target.id] = e.target.value;
      return newState
    })
  }
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
  const setGallaryImageFn = (id, value) => {
    dispatch(setGallaryImage(id, value))
  }
  const addImageToNewFn = () => {
    dispatch(addImageToNew())
  }
  const setGallaryImageForRemoveFn = (id, value) => {
    dispatch(setGallaryImageForRemove(id, value))
  }
  const removeImageToOldFn = () => {
    dispatch(removeImageToOld())
  }
  const setManualFileDataFn = (data) => {
    dispatch(setManualFileData(data))
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const existingData = finalGalleryData.filter(obj => !obj.manualImage)
    if (finalGalleryData.length === 0) return
    //Get files
    if (fileData.length > 0) {
      let lastFileName = fileData[fileData.length - 1]?.file?.name || null
      lastFileName = lastFileName.replace(/ /gi, "%20")
      for (var i = 0; i < fileData.length; i++) {
        var imageFile = fileData[i];
        const check = (i == fileData.length - 1)
        const result = await dispatch(uploadGalleryAndCreatePlaylist(imageFile?.file,
          userData.uid,
          formState,
          display,
          check,
          lastFileName
        ))
      }
    } else if (existingData.length > 0) {
      dispatch(saveMediaInDB(userData.uid, formState, display))
    }
  }

  useEffect(() => {
    if (statusOfCreate) {
      setTimeout(() => {
        dispatch(resetFile())
        navigate("/");
      }, 3000)
    }
  }, [statusOfCreate])

  useEffect(() => {
    if (statusOfAddDownload) {
      dispatch(saveMediaInDB(userData.uid, formState, display))
    }
  }, [statusOfAddDownload])

  useEffect(() => {
    if (userData?.uid) {
      dispatch(getData())
    }
  }, [userData])

  useEffect(() => {
    if (finalGalleryData) {
      setFileData(finalGalleryData.filter(obj => obj.file))
    }
  }, [finalGalleryData])
  return (
    <div className="container">
      <div className="customForm white">
        <h5 className="grey-text text-darken-3">Create a new playlist</h5>
        <div className="input-field">
          <input type="text" id='title' onChange={handleChange} />
          <label htmlFor="title">Playlist Name</label>
        </div>
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

        {(display.value !== null && formState.title !== "") ? (<div className="input-field">
          <section className="file-upload">
            <DragNDrop
              galleryData={galleryData?.Pictures}
              setGallaryImage={setGallaryImageFn}
              addImageToNew={addImageToNewFn}
              finalGalleryData={finalGalleryData}
              setGallaryImageForRemove={setGallaryImageForRemoveFn}
              removeImageToOld={removeImageToOldFn}
              setManualFileData={setManualFileDataFn}
            />
          </section>
        </div>) : ""
        }
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
        {finalGalleryData && finalGalleryData[0] && (<div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" onClick={handleSubmit}>Create</button>
          <button className="btn lighten-1 z-depth-0" onClick={resetFileData} >Reset</button>
        </div>)}
      </div>
    </div>
  )
}

export default CreatePlayList