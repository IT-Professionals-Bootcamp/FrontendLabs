import React from "react";
import "./ImageList.css";
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const resimListe = props.resimler.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });


  return <div className="image-list">{resimListe}</div>;
};
export default ImageList;
