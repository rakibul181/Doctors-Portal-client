import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/fairbase.config"

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const[loading, setLoading] =useState(true)
    const[user, setUser] =useState(null)
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

        const updateUser =(userInfo)=>{
            return updateProfile(auth.currentUser,userInfo)
        }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('user observer');
            setUser(currentUser)
            setLoading(false)
        })

        return()=>unsubscribe()
    },[])
    const authInfo = {
        createUser,
        login,
        user,
        logOut,
        loading,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;