import { createContext, useContext } from 'react';

import { auth } from '../firebase/firebase'

const userContext = createContext();



export const AuthContextProvider = (children) => {
    const creaetUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    };

    return (
        <UserContext.Provider value={{}}>
            {childern}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}