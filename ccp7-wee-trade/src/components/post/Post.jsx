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

    const HandleSetHasImage = () => {
        if(img_url){
            setHasImage(true);
        } else {
            setHasImage(false);
        }
            
        
    }

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
    
    
    const handleBuyNow = async () => {
        const submitForm = { 
            "seller_id":seller.id, 
            "buyer_id":"current_user", 
            "post_id":post_id,
            }

        const response = await axios.post('/api/order', submitForm, (req, res) => {
            console.log("😇",response.data);
        })
    }

    return (
        <>
    <div className="post-card" onLoad={HandleSetHasImage}>
        {/* {this is where the post should look} */}
        <div className={classes} onLoad={() => {getClassesName(); getPostsTitle();}}>
            <h2>{post_id}{":"}{postsTitle}{classes}</h2>
            <p className="sellerDetails">{`seller:${seller.name} (${seller.id})`}</p><div>
            
            {hasImage ? <img src={img_url} alt={img_alt}/> : null}
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