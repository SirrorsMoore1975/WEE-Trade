import React, {useState, Link, useRef} from 'react';

import Button from '../components/button/Button'
import './Form.css';

export default function Form (){
    const [isUrl_imgInputMode, setIsUrl_imgInputMode ] = useState(true);
    const [img_url, setImg_url] = useState('');

    const handleIsUrl_imgInputMode = (e) => {
        e.preventDefault()
        // e.preventDefault();
        setIsUrl_imgInputMode(!isUrl_imgInputMode);
    const handleSubmit = () => {

    }
    }
    return (
       <>
       <div>
        <div className="Container">
            <form htmlFor="SubmitForm" >
                <lable>Title</lable><br />
                <input type="text"></input><p />
                <lable>Image: Input URL or Upload Pic Mode</lable><br />
                <button className="toogle-btn" onClick={handleIsUrl_imgInputMode}>Toggle</button> 
                <p />
                {isUrl_imgInputMode ? <><Button value={"Select picture"} ></Button></> : <><input value={img_url} onChange={(e) => {setImg_url(e.target.value)}}></input><br /><img src={img_url} alt="~your image will load here if the url work~"/></>}
                
                <p />
                <label>Describtion:</label><br />
                <input type="textarea"></input><br />
                <label>Condition</label><br />
                <option></option><br />
                <label>Cost</label><br />
                <input type="text"></input><br />
                <Button htmlFor={"SubmitForm"} value={"Submit Post"} />
            </form>
        </div>
        </div>
        </>

        
        
    )
}