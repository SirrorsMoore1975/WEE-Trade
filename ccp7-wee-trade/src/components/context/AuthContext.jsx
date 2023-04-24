import { createContext, useContext, useState, useEffect } from 'react';

import { auth } from '../../firebase/firebase'

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

import axios from 'axios';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({}); // if no user - it return with empty object
    // const [isLogin, setIsLogin] = useState(false);
    const [UID, setUID] = useState("");
    

    const createUser = async (email, password, /*username, address */) => {
        // const userCred = await createUserWithEmailAndPassword(auth,email,password);
        // console.log(userCred);
        // console.log("👽userUID", userCred.uid);
        
        // return userCred;

        /*
        const payload = {
            email, username, address, UID
        }
        
        const result = await axios.post("/api/user/create", payload)
        
            console.log("💋",result.data);
        */
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

    const createUserInDatabase = async (username, email, address) =>{
        if(!UID){
            UID="";
        }
        const payload={username, email, address, UID}
        const result = await axios.post("/api/user/create", payload)
        try{
            console.log("💋",result.data);
        } catch (err){
            console.error(err)
        }
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
        <UserContext.Provider value={{createUser, loginUser, user, logOut, createUserInDatabase}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}