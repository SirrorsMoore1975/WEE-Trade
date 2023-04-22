import React, {useState} from 'react';
import axios from 'axios';
import './Post.css';




export default function Post ({className, seller, post_id, postTitle,img_url, img_alt, desc, amount, hasSold}){
    const [ classes, setClassName ] = useState("");
    const [ postsTitle, setPostsTitle ] = useState ("");
    const [ isSeller, setIsSeller ] = useState(true);
    const [ dateFormate, setDateFormate ] = useState("");
    const [resultDate, setResultDate] = useState("");
  

    const [hasImage, setHasImage] = useState(true);

    const getDate = (expression) => {
        setDateFormate(new Date())
        
        switch (expression){
            default:
                {
                    setResultDate(dateFormate); 
                    break;
            }
        
            
            case "YYYY-MM-DD":
                {
                    setResultDate(dateFormate) 
                    break;
                }
            

        }
        return resultDate
    }
    

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
        const submitForm = { 
            "seller_id":seller.id, 
            "buyer_id":"current_user", 
            "desc":desc,
            "post_id":post_id,
            "img_url": img_url, 
            "postdate" :getDate("YYYY-MM-DD"),
            "create_at": new Date(),
            "condition": "condition",
        }

        axios.post('/api/order', submitForm, (req, res) => {

        })
    }

    return (
        <>
    <div className="post-card" >
        {/* {this is where the post should look} */}
        <div className={classes} onLoad={() => {getClassesName(); getPostsTitle();}}>
            <h2>{post_id}{":"}{postsTitle}{classes}</h2>
            <p className="sellerDetails">{`seller:${seller.name} (${seller.id})`}</p><div>
            {hasImage ? <img src={img_url} alt={img_alt} loading="lazy"/> : null}
            </div>
            
            <div className="desc-box">{desc}</div>
            <p className="cost-box">${amount}</p>
            <form htmlFor="acceptance">
            
            {isSeller ? <div><input type="checkbox"></input>{"Remove Post?"}</div> : null}
            
            {hasSold ? <button htmlFor="acceptance" disabled={true}>ALREADY SOLD</button> : <button htmlFor="acceptance" onSubmit={(e) => {e.defaultPrevented(); handleBuyNow();} } disabled={false}>BUY NOW</button>}
            </form>
        </div>
    </div>
        
        </>
    )
}