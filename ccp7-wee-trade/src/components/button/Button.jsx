import React, {useState, useEffect, Link} from 'react';

import './Button.css';


export default function Button ({btnClassName, value, htmlFor}){
    // if you want to use a different className for the button for a different css style
    const [useBtnClassName, setUseBtnName] = useState('');
    const [useValueName, setValueName] = useState('');
    useEffect(()=>{
        handleBtnClassName();
        handleValueName();
    }, [])
    const handleBtnClassName = ()=> {
        if(btnClassName){
            setUseBtnName(btnClassName);

        } else {
            setUseBtnName("btn")
        }
    }
    const handleValueName = ()=> {
        if(value){
            setValueName(value);

        } else {
            setValueName("Submit")
        }
    }
    // const wrapperFunc = () => {
    //     handleBtnClassName();
    //     handleValueName();
    // }
    return (
        <>
        <button className={useBtnClassName} htmlFor={htmlFor} type='submit' >{useValueName}</button>
        
        </>
    )
}