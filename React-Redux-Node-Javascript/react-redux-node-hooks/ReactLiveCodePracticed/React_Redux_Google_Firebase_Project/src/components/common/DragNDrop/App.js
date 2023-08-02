import React, { useCallback, useEffect, useState } from "react";
import DropZone from "./DropZone"
import ImageList from "./ImageList"
import ExistingImageList from "./ExistingImageList"

// cuid is a simple library to generate unique IDs
// import cuid from "cuid";
import './index.css';

function App({
    galleryData,
    setGallaryImage,
    addImageToNew,
    finalGalleryData,
    setGallaryImageForRemove,
    removeImageToOld,
    setManualFileData
}) {
    // Create a state called images using useState hooks and pass the initial value as empty array
    const [images, setImages] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    useEffect(() => {
        if (galleryData && galleryData.length > 0) {
            setExistingImages(galleryData)
        }
    }, [galleryData])

    useEffect(() => {
        if (finalGalleryData) {
            setImages(finalGalleryData)
        }
    }, [finalGalleryData])

    const onDrop = useCallback(acceptedFiles => {
        // Loop through accepted files
        // const manualData = []
        const res = acceptedFiles.map((file, index) => {
            // Initialize FileReader browser API
            const reader = new FileReader();
            // onload callback gets called after the reader reads the file data
            reader.onload = function (e) {
                // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
                if(e.target.result){
                    setManualFileData({ id: index, src: e.target.result,file, manualImage: true })
                }
            };
            // Read the file as Data URL (since we accept only images)
            reader.readAsDataURL(file);
                return file;
        });
    }, []);

    return (
        <main className="App" >
            {existingImages && existingImages.length > 0 &&
                <div className="existingImages">
                    <ExistingImageList
                        images={existingImages}
                        setGallaryImage={setGallaryImage}
                        addImageToNew={addImageToNew}
                    />
                </div>
            }
            <div className="newImages">
                <DropZone
                    onDrop={onDrop}
                    accept={"image/*"}
                />
                <ImageList
                    images={images}
                    setGallaryImageForRemove={setGallaryImageForRemove}
                    removeImageToOld={removeImageToOld}
                />
            </div>
        </main>
    );
}
export default App