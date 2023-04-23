import React, { useRef, useState, useEffect } from "react";
// require('dotenv').config({
//   path: path.join(__dirname, './.env')
// });
// import imgbbUploader from 'imgbb-uploader';
// import { imgbbUploader } from "imgbb-uploader"; 
import axios from 'axios';

// import { saveObject, getSingleObject } from "../utils";
// import _ from "lodash";
import "./Upload.css";

export default function Upload( props ) {
  const { photos, setPhotos, value, getFilename} = props

  const [filename, setFilename] = useState('')
  
  const [formData, setFormData] =useState({});
  

  const fileRef = useRef(null);
  
    const onFileSubmitX = async (e) => {
      e.preventDefault();
      setFilename(fileRef.current.files[0]);
      // const options = {
      //   apiKey: process.env.IMGBB_API_KEY,
      //   imagePath: filename,
      //   name: `wee-trade-${increment.current}`
      // }
      // const response = await axios.post('https://api.imgbb.com/1/upload', options)

      // imgbbUploader(options)
      // .then((response) => console.log(response))
      // .catch((error) => console.error(error));
      getFilename(filename);
      // const response = await axios.post('/api/post', payload)
      
      
    };

    
  
    return (
      <>
      <div className="photo-upload">
        
        <input type="file" ref={fileRef} accept=".png, .jpg" className="fileupload"
        />
        <br/>
        <button className="submit-button" type="submit" onClick={(e) => {  
          e.preventDefault(); 
          fileRef.current.click();
          setFilename(fileRef.current.files[0]); 
          getFilename(filename);}}>
          Upload
        </button><br/>

        
        
      </div>
      </>
    );
  }
  