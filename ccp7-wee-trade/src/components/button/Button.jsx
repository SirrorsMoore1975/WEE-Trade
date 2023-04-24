import React, {useState, useEffect, Link} from 'react';

import './Button.css';



export default function Button ({btnClassName, setValue, btntype, htmlFor, onClick, onSubmit}){

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
        if(setValue==="Submit"){
            setValueName("Submit");

        } else {
            setValueName(setValue)
        }
    }
    // const wrapperFunc = () => {
    //     handleBtnClassName();
    //     handleValueName();
    // }
    return (
        <>

        <div className={useBtnClassName}>
        <div className='btnArea'>
        {/* <form htmlFor={htmlFor} onSubmit={onSubmit}> */}
            <label className={btnClassName}></label>

        <button className='button-glow' onClick={onClick} type={btntype}>{useValueName}</button>
        {/* </form> */}
        </div>

        </div>
        </>
    )
}