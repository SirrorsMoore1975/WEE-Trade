import React, {useState, Link} from 'react';

import Button from '../components/button/Button'
import './Form.css';

export default function Form (){


    return (
       <>
       <div>
        <div className="Container">
            <form htmlFor="SubmitForm" >
                <lable>Title</lable><br />
                <input type="text"></input><br />
                <label>Image</label><br />
                <Button value={"Select picture"} ></Button><br />
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