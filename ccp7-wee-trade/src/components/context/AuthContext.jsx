import { createContext, useContext, useState, useEffect } from 'react';

import { auth } from '../../firebase/firebase'

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

import axios from 'axios';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({}); // if no user - it return with empty object
    // const [isLogin, setIsLogin] = useState(false);
    const [UID, setUID] = useState("");
    const [UID_createUser, setUID_createUser] = useState("")
    const [userMade, getUserMade] = useState("")
    
    const makeUser = async (username, email, address)=>{
        const payload = {
            username,
            email, 
            address, 
            UID: UID || UID_createUser,
        }
        
        const result = await axios.post("/api/user/", payload).catch(err => console.log(err))
            console.log("❕",result.data);
            console.log("💋",result, typeof result);
            getUserMade(result.data)
    }


    const createUser = async (email, password) => {
        
        
        // await makeUser(username, email, address, UID_createUser);
        
        
        return createUserWithEmailAndPassword(auth,email,password);
        

    };
    const loginUser = async (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = async () => {
        return signOut(auth);
    }

    

    const sendCreatedUID = (string) => {
        setUID_createUser(string);
        return UID;
    }
    
    useEffect(() => {
        const authenticateUser = onAuthStateChanged(auth, (currentUser) => {
            console.log("🍎", currentUser);
            setUser(currentUser);
            console.log("🥭", currentUser.uid)
            setUID(currentUser.uid)
        })
        return authenticateUser;
        }, []);
    


    return (
        <UserContext.Provider value={{createUser, loginUser, user, logOut, sendCreatedUID, makeUser, userMade}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}