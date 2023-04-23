import React, {useState, useEffect, Link, useRef} from 'react';

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
    const [categories, setCategories] = useState([]); // WIP
    const [selectedCat, setSelectedCat] = useState(""); // WIP
    const [condition, setCondition] = useState(0); // WIP
    // Date variable
    const [post_date, setPost_Date] = useState('');
    const [post_timestamp, set_Post_Timestamp] = useState('');
    
    const [filename, getFile] = useState('');

    // boolean state, toggle between which type of input
    const [isUrl_imgInputMode, setIsUrl_imgInputMode ] = useState(true);
    
    useEffect(()=> {
        getCatData();
        console.log(categories);

    },[])

    // useEffect(() => {
    //     selectedCat.current = cat.id
    // },[cat.id])


    // Drop down menu for Categories (WIP 1.) cannot download from database; 2.) Not yet functional )
    const getCatData = async () => {
        const result = await axios.get("/api/cat")
        setCategories([...categories, result.data]);
        console.log(categories)
    }
    

    function getChildValue(child){
        getFile(child);
        console.log("🥳",filename);
    }

    const handleIsUrl_imgInputMode = (e) => {
        e.preventDefault()
        // e.preventDefault();
        setIsUrl_imgInputMode(!isUrl_imgInputMode);
    }


    const handleCatChange = (event) => {
        setSelectedCat(event.target.value);
    }
        const handleSubmit = async (e) => {
            e.preventDefault();
        const payload = {
            seller_id: "currentUser", 
            title:"",
            img_url:"",
            desc:"",
            categories:[],
            condition:"",
            post_date:"",
            post_timestamp:"",
            price:""
        }
        const response = await axios.post('/api/post', payload)
        // .then((res)=> {console.log(res)}).catch((err) => console.log(err))
        console.log(response.data)
    }
    
    return (
       <>
       <div>
        <div className="Container" onLoad={getCatData}>
            <form htmlFor="SubmitForm" onSubmit={handleSubmit} >
                <label>Title</label><br />
                <p className="title-hint">In a few word as short as possible, describ your product for sell</p>
                <input type="text"></input><p />
                <label>Image: Input URL or Upload Pic Mode</label><br />
                <button className="toogle-btn" onClick={handleIsUrl_imgInputMode}>Toggle</button> 
                <p />
                {isUrl_imgInputMode ? <><Upload value={"Select picture"} getFilename={getChildValue}></Upload></> : <><label>Your url:</label><br /><input value={img_url} onChange={(e) => {setImg_url(e.target.value)}}></input><br /><div className="url-hint">~your image will load here if the url work~</div><div>{img_url}</div><img src={img_url} alt=""/></>}
                
        <label htmlFor="CatDropMenu">Select Cateogries</label>
        <select className="components" onChange={handleCatChange}></select>
        {categories.map((cat, index) => (
          <option 
            key={index}
            value={cat.categories} 
            >
            { cat.categories }
          </option> 
            ))}
                
                <label>Description:</label><br />
                <input className="form-product-description" type="textarea"></input><br />
                <label>Condition</label><br />
                <option input="radio"></option><br />
                <label>Cost</label><br />
                <input type="text"></input><br />
                <Button htmlFor="SubmitForm" value="Submit Post" />
            </form>
        </div>
        </div>
        </>

        
        
    )
}