import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    // google log in 
    const googleLogIn = () => {
        return signInWithPopup(auth,googleProvider)
    }

    // logout
    const logout = () =>{
        signOut(auth);
        setUser(null)
    }

    // github log in 
    const githubLogIn = () => {
        return signInWithPopup(auth,githubProvider)
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogIn,
        githubLogIn,
        logout,
        user
        
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;