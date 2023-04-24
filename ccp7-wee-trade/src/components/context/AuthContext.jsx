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
    
    const makeUser = async (username, email, address, UID )=>{
        const payload =  {
            username,
            email, 
            address, 
            UID
        }
        
        const result = await axios.post("/api/user/", payload).catch(err => console.log(err))
        
            console.log("💋",result, typeof result);
    }

    const createUser = async (username, email, address, password) => {
        // const userCred = await createUserWithEmailAndPassword(auth,email,password);
        // console.log(userCred);
        // console.log("👽userUID", userCred.uid);
        
        // return userCred;

        makeUser(username, email, address, UID_createUser)
        
        
        // check result.data -- if user existed { create user should fail }
        // else {database record user; allow user creation at firebase}
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const loginUser = async (email, password) => {
        // const userCred = await signInWithEmailAndPassword(auth, email, password);
        //     console.log("👿",userCred);
        //     console.log("🦎",userCred.user)
        //     console.log("🥶userUID", userCred.uid);
        //     // console.log("👿",user);
        //     return userCred;
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = async () => {
        return signOut(auth);
    }

    // const checkUserExistance = async (username, email, address) =>{
        
    //     const payload={username, email, address, UID}
    //     const result = await axios.post("/api/user/", payload)
    //     console.log("💋",result.data);
    //     return result.data;
    // } 

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
        <UserContext.Provider value={{createUser, loginUser, user, logOut, sendCreatedUID}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}