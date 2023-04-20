import React, {useState} from 'react';
import axios from 'axios';
import './Post.css';




export default function Post ({className, seller, post_id, postTitle,img_url, img_alt, desc, amount, hasSold}){
    const [ classes, setClassName ] = useState("");
    const [ postsTitle, setPostsTitle ] = useState ("");
    const [ isSeller, setIsSeller ] = useState(true);


    const [hasImage, setHasImage] = useState(false);

    const getClassesName = () => {
        if(!className){
            setClassName("defaultClassName");
        } else {
            setClassName(className);
        }
    }

    const getPostsTitle = () => {
        if(!postTitle){
            setPostsTitle("defaultPostsTitle");
        } else {
            setPostsTitle(postTitle)
        }
    }
    
    
    const handleBuyNow = () => {
        const submitForm = { "seller_id":seller.id, "buyer_id":"current_user", "post_id":post_id, date:new Date()}
        axios.post('/api/order', submitForm, (req, res) => {

        })
    }

    return (
        <>
    <div className="post-card" >
        {/* {this is where the post should look} */}
        <div className={classes} onLoad={() => {getClassesName(); getPostsTitle();}}>
            <h2>{post_id}{":"}{postsTitle}{classes}</h2>
            <p className="sellerDetails">{`seller:${seller.name} (${seller.id})`}</p>
            {hasImage ? <img src={img_url} alt={img_alt}/> : null}
            <div className="desc-box">{desc}</div>
            <p className="cost-box">{amount}</p>
            <form htmlFor="acceptance">
            
            {isSeller ? <div><input type="checkbox"></input>{"Remove Post?"}</div> : null}
            
            {hasSold ? <button htmlFor="acceptance" disabled={true}>ALREADY SOLD</button> : <button htmlFor="acceptance" onSubmit={(e) => {e.defaultPrevented(); handleBuyNow();} } disabled={false}>BUY NOW</button>}
            </form>
        </div>
    </div>
        
        </>
    )
}