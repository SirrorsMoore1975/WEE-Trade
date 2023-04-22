import React, {useState, Link, useRef} from 'react';

import Button from '../components/button/Button'
import './Form.css';
import Upload from "../components/upload/Upload";

import axios from 'axios';

export default function Form (){
    // variables
    const [img_url, setImg_url] = useState('');
    const [seller_Id, setSellerId] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0)
    // require GET
    const [categories, setCategories] = useState(0);
    const [condition, setCondition] = useState(0);
    // Date variable
    const [post_date, setPost_Date] = useState('');
    const [post_timestamp, set_Post_Timestamp] = useState('');
    

    // boolean state, toggle between which type of input
    const [isUrl_imgInputMode, setIsUrl_imgInputMode ] = useState(true);
   

    const handleIsUrl_imgInputMode = (e) => {
        e.preventDefault()
        // e.preventDefault();
        setIsUrl_imgInputMode(!isUrl_imgInputMode);
    const handleSubmit = async () => {
        const payload = {
            seller_id: "currentUser", 
            title:"",
            img_url:"",
            desc:"",
            categories:"",
            condition:"",
            post_date:"",
            post_timestamp:"",
            price:""
        }
        const response = await axios.post('/api/post', payload)
    }
    }
    return (
       <>
       <div>
        <div className="Container">
            <form htmlFor="SubmitForm" >
                <lable>Title</lable><br />
                <p className="title-hint">In a few word as short as possible, describ your product for sell</p>
                <input type="text"></input><p />
                <lable>Image: Input URL or Upload Pic Mode</lable><br />
                <button className="toogle-btn" onClick={handleIsUrl_imgInputMode}>Toggle</button> 
                <p />
                {isUrl_imgInputMode ? <><Upload value={"Select picture"} ></Upload></> : <><input value={img_url} onChange={(e) => {setImg_url(e.target.value)}}></input><br /><div className="url-hint">~your image will load here if the url work~</div><div>Your url: {img_url}</div><img src={img_url} alt=""/></>}
                
                <p />
                <label>Description:</label><br />
                <input className="form-product-description" type="textarea"></input><br />
                <label>Condition</label><br />
                <option input="radio"></option><br />
                <label>Cost</label><br />
                <input type="text"></input><br />
                <Button htmlFor={"SubmitForm"} value={"Submit Post"} />
            </form>
        </div>
        </div>
        </>

        
        
    )
}