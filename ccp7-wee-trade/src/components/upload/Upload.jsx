import React, { useRef } from "react";
// import { saveObject, getSingleObject } from "../utils";
// import _ from "lodash";
import "./Upload.css";

export default function Upload( props ) {
  const { photos, setPhotos, value } = props
    const fileRef = useRef(null);
  
    const handleClick = () => {
      fileRef.current.click();
    };
  
    const fileSubmit = async () => {
    //   const fileObject = await saveObject(fileRef.current.files[0]);
    //   console.log(fileObject);
    //   const fileB64 = await getSingleObject(fileRef.current.files[0].name);
    //   setPhotos([fileB64, ...photos]);
    };
  
    return (
      <div>
        <input
          type="file"
          ref={fileRef}
          onChange={fileSubmit}
          className="file-upload"
        />
        <button onClick={handleClick} className="hide-browse-button">
          Upload
        </button>
      </div>
    );
  }
  