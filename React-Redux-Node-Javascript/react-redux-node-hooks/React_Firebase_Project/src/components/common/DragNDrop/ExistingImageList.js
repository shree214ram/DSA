import React from "react";

// Rendering individual images
const Image = ({ image, selectImage }) => {
  return (
    <div className={`file-item ${image.selected ? "active" : ""}`} onClick={e => selectImage(image.id)}>
      <img style={{ width: "100px", height: "100px" }} alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

// ImageList Component
const ImageList = ({ images, setGallaryImage, addImageToNew }) => {
  console.log(images, "images===")
  // render each image by calling Image component
  const renderImage = (image, index) => {
    const selectImage = (id) => {
      setGallaryImage(id, !image.selected)
    }
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
        selectImage={selectImage}
      />
    );
  };

  // Return the list of files
  return <>
    <section className="file-list">
      {images.map(renderImage)}
    </section>
    {images.filter(obj => obj.selected)[0] && (<div className="input-field2">
      <button className="btn pink lighten-1 z-depth-0" onClick={addImageToNew}>Create</button>
      {/* <button className="btn lighten-1 z-depth-0" onClick={resetFileData} >Reset</button> */}
    </div>)}
  </>;
};

export default ImageList;