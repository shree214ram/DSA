import React from "react";

// Rendering individual images
const Image = ({ image, selectImageForRemove }) => {
  return (
    <div className={`file-item ${image.selected ? "reactive" : image.manualImage ? "manualImage" :""}`} onClick={e => selectImageForRemove(image.id)}>
      <img style={{ width: "100px", height: "100px" }} alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

// ImageList Component
const ImageList = ({ images, setGallaryImageForRemove, removeImageToOld }) => {
  // render each image by calling Image component
  const renderImage = (image, index) => {
    const selectImageForRemove = (id) => {
      setGallaryImageForRemove(id, !image.selected)
    }
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
        selectImageForRemove={selectImageForRemove}
      />
    );
  };

  // Return the list of files
  return <>
    <section className="file-list">{images.map(renderImage)}</section>
    {images.filter(obj => obj.selected)[0] && (<div className="input-field2">
      <div className="btn pink lighten-1 z-depth-0" onClick={removeImageToOld}>Remove</div>
    </div>)}
  </>;
};

export default ImageList;