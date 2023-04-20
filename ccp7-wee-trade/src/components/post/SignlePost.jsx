import React, {useState, Link} from 'react';




export default function SinglePost({mode, postid}){
    // The function SignlePost is to show the details of existing Post
    // It can be in any state: 
    // Post: Open;  - During First come first serve, it is open for any user to buy
    // Post: Sold; - After a user submit buy request, this post is at Sold state. Seller should contact to the Buyer for how they exchange their deals. The user can withdraw buyer offer to buy (which should have commit to the previous buyer consent for the withdrawing)
    // Post: Close; - When all transaction between the users has completed, everything must end, nothing should be changed. The seller has the abilty to Close the post once the deal is over.

    return (
        <>
       <div>
        <div className="Container">
            <form >
                <lable>Title</lable>
                <input type="text"></input>
                <label>Image</label>
                <button>Select picture</button>
                <label>Describtion:</label>
                <input type="textarea"></input>
                <label>Condition</label>
                <option></option>
                <label>Cost</label>
                <input type="text"></input>
            </form>
        </div>
        </div>
        </>

    )
}