import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  uploadGalleryAndCreatePlaylist,
  resetFile,
  getData,
  setGallaryImage,
  addImageToNew
} from '../../store/actions/createPlaylist'
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
    finalGalleryData
  } = useSelector(state => state.playList)
  const dispatch = useDispatch()
  const fileInputRef = useRef();
  const [fileData, setFileData] = useState([]);
  const [formState, setFormState] = useState({
    title: '',
    content: ''
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
    //once file uploaded need to be save
    var imageFile = fileData[0];
    dispatch(uploadGalleryAndCreatePlaylist(imageFile, userData.uid, formState))

  }
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

  useEffect(() => {
    if (statusOfCreate) {
      setTimeout(() => {
        dispatch(resetFile())
        navigate("/");
      }, 3000)
    }
  }, [statusOfCreate])

  useEffect(() => {
    if (userData?.uid) {
      dispatch(getData())
    }
  }, [userData])

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a new playlist</h5>
        <div className="input-field">
          <input type="text" id='title' onChange={handleChange} />
          <label htmlFor="title">Display Title</label>
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
            {/* <label
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
            {fileHTML} */}
            <DragNDrop
              galleryData={galleryData?.Pictures}
              setGallaryImage={setGallaryImageFn}
              addImageToNew={addImageToNewFn}
              finalGalleryData={finalGalleryData}
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

        {fileData && fileData[0] && (<div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
          <button className="btn lighten-1 z-depth-0" onClick={resetFileData} >Reset</button>
        </div>)}
      </form>
    </div>
  )
}

export default CreatePlayList