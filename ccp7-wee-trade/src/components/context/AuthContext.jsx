import { createContext, useContext, useState, useEffect } from 'react';

import { auth } from '../../firebase/firebase'

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const createdUser = async (email, password) => {
        const userCred = await createUserWithEmailAndPassword(auth,email,password);
        console.log(userCred);
        return userCred;
    };
    const loginUser = async (email, password) => {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
            console.log("👿",userCred);
            console.log("🦎",userCred.user)
            // console.log("👿",user);
            return userCred;
    }

    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const authenticateUser = onAuthStateChanged(auth, (currentUser) => {
            console.log("🍎", currentUser);
            setUser(currentUser);
        }, []);
    })
    return (
        <UserContext.Provider value={{createdUser, loginUser, user, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}