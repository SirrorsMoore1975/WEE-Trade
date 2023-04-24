import React, {useState, useEffect, Link, useRef} from 'react';
import DropdownMenu from '../components/dropdown/DropdownMenu'

import Button from '../components/button/Button'
import './Form.css';
import Upload from "../components/upload/Upload";


import axios from 'axios';

import {UserAuth} from './../components/context/AuthContext'


export default function Form (){

    /*
    *   TwoDigit of date: date = date > 9 ? date : "0" + date;
    */
    const date = new Date();
    let YYYY = date.getFullYear().toString();
    let MM = date.getMonth()+1;
    MM = MM > 9 ? MM.toString() : "0" + MM;
    let DD = date.getDay();
    DD = DD > 9 ? DD.toString() : "0" + DD;


    const { user } = UserAuth();


    // variables
    const [img_url, setImg_url] = useState('');
    
    // current user id
    const [seller_id, setSellerId] = useState(1); // testerid 4000 (do not merge with the user table!!)

    // Title
    const [title, setTitle] = useState('');
    
    // Cost
    const [cost, setCost] = useState(0);

    // Desc
    const [desc, setDesc] = useState('');
    
    // require GET
    // const categories = useRef([]);
    
    // Cat
    const [categories, setCategories] = useState([]); 
    const [selectedCat, setSelectedCat] = useState(""); 
    // const [catDropdownMenu, setCatDropdownMenu ] = useState({})
    
    // Cond
    const [condition, setCondition] = useState([]); 
    const [selectedCond, setSelectedCond] = useState(""); 

    
    
    // Date variable
    const [post_date, setPost_Date] = useState('');
    const [post_timestamp, set_Post_Timestamp] = useState('');
    
    const [filename, getFile] = useState('');

    // boolean state, toggle between which type of input
    const [isUrl_imgInputMode, setIsUrl_imgInputMode ] = useState(true);
    
    // let categoDropdownMenu;
    
    // Run initially
    useEffect(()=> {
        getCatData();
        getCondData();
    },[])

    // For testing purposes
    useEffect(() => {
        console.log("from UseEffect categories",categories);
        console.log("from UseEffect selectedCat",selectedCat);
    },[selectedCat])

    useEffect(() => {
        console.log("from UseEffect condtion",condition);
        console.log("from UseEffect selectedCond",selectedCond);
    },[selectedCond])

    useEffect(()=>{
        console.log("from UseEffect title", title);
    }, [title])

    useEffect(()=>{
        console.log("from UseEffect title", desc);
    }, [desc])

    useEffect(() => {
        console.log("from UseEffect cost",cost);
    },[cost])


    /*
    DropdownMenu Component
    It collect data from component_categories table via axios get /api/cat
    */
   

    const getCatData = async () => {
        const result = await axios.get("/api/cat")
        console.log("😠",result);
        // categories.current = categories.current.concat(result.data);
        // console.log("😬",categories);
        setCategories(...categories, result.data);
    }
    const getCondData = async () => {
        const result = await axios.get("/api/condition")
        console.log("⛰️",result);
        setCondition(...condition, result.data);
    }

    // handle Categories selected
    // const handleCatChange = (event) => {
    //     setSelectedCat(event.target.value);
    //     console.log(selectedCat);
    // }

    // const handleCatMenu = () => {
    //     categoDropdownMenu = (
    //         <>
    //         {categories.current.map((cat, index) => (
    //             <option 
    //               key={index}
    //               value={cat[categories]} 
    //               >
    //               { cat[categories] }
    //             </option> 
    //               ))}
    //               </>
    //     )
    // }
    
    /** 
     * Experiment: Can Parent (here) get Child data via a function?
     * Answer seems in between
     * */ 
    function getChildValue(child){
        getFile(child);
        console.log("🥳",filename);
    }


    // Handle Toogle
    const handleIsUrl_imgInputMode = (e) => {
        e.preventDefault()
        // e.preventDefault();
        setIsUrl_imgInputMode(!isUrl_imgInputMode);
    }


    
        const handleSubmit = async (e) => {
            e.preventDefault();
        const payload = {
            seller_id: seller_id, 
            title:title,
            img_url:img_url,
            desc:desc,
            categories:selectedCat,
            condition:selectedCond,
            post_date: YYYY + "-" + MM + "-" + DD ,
            post_timestamp:new Date().toLocaleTimeString(),
            price:cost,
        }
        const response = await axios.post(`/api/post${seller_id}/addpost`, payload)
        // .then((res)=> {console.log(res)}).catch((err) => console.log(err))
        console.log(response.data)
    }
    
    return (
       <>
       <div>
        <div className="Container" >
            <form htmlFor="SubmitForm" onSubmit={handleSubmit} >
{/** Title */}
                <label className="title-box">Title</label><br />
                    
                    <input className="title-hint" type="text" placeholder="In a few word as short as possible, describ your product for sell" value={title} onChange={(e)=>{setTitle(e.target.value)} } >
                    </input>
                    <br />
                    <br />
{/** Image */}
                <label>Image: Input URL or Upload Pic Mode</label><br />
                    <button className="toogle-btn" onClick={handleIsUrl_imgInputMode}>Toggle</button> 
                    <br />
                    <div className="url-hint">~your image will load here if the url work~</div>
                {isUrl_imgInputMode ? 
                    <>
                    <Upload value={"Select picture"} getFilename={getChildValue}></Upload>
                    <br />
                    </> : 
                        
                    <><label>Your url:</label><br />
                    <input value={img_url} onChange={(e) => {setImg_url(e.target.value)}}></input><br />
                    
                    <div>{img_url}</div>
                    <img src={img_url} alt=""/></>
                    }
                    <br />

{/** Cat Dropdown Menu */}                
        <label htmlFor="CatDropMenu">Select Cateogries</label>
        {/* <select className="components" onChange={handleCatChange}></select> */}
                {/* { categoDropdownMenu } */}
                <DropdownMenu className="components" onChange={(e)=>{setSelectedCat(e.target.value);}} options={categories} onKey="categories" />
                <br/>

{/** Description */}                
                <label>Description:</label><br />
                <input className="form-product-description" type="textarea" value={desc} onChange={(e) =>{setDesc(e.target.value);}}></input><br />
                <br />

{/** Condition DropdoanMenu*/}                
                <label>Condition</label><br />
                {/* <option input="radio"></option> */} 
                <DropdownMenu className="condition" onChange={(e)=>{setSelectedCond(e.target.value);}} options={condition} onKey="condition"></DropdownMenu>
                <br />

{/** Cost */}
                <label>Cost</label><br />
                <input type="text" className="price" value={cost} onChange={(e) => {setCost(e.target.value)}} placeholder="Name Your Price"></input><br />

{/** The Fantastic Button */}
<
                <Button htmlFor="SubmitForm" btntype="submit" setValue="Submit Post" />

            </form>
        </div>
        </div>
        </>

        
        
    )
}