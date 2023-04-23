import { createContext, useContext, useState, useEffect } from 'react';

import { auth } from '../../firebase/firebase'

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({}); // if no user - it return with empty object
    // const [isLogin, setIsLogin] = useState(false);

    const createdUser = async (email, password) => {
        // const userCred = await createUserWithEmailAndPassword(auth,email,password);
        // console.log(userCred);
        // console.log("👽userUID", userCred.uid);
        
        // return userCred;
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
    
    useEffect(() => {
        const authenticateUser = onAuthStateChanged(auth, (currentUser) => {
            console.log("🍎", currentUser);
            setUser(currentUser);
        })
        return authenticateUser;
        }, []);
    
    return (
        <UserContext.Provider value={{createdUser, loginUser, user, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}