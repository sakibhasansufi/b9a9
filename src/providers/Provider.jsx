import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // console.log(user);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // google log in 
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
        .then(result => {
            const loggedinuser = result.user;
            console.log(loggedinuser);
            setUser(loggedinuser)
        })
        .catch(error => {
            console.error(error.message)

        })
    }

    // logout
    const logout = () =>{
        setLoading(true)
        signOut(auth);
        setUser(null)
    }

    // github log in 
    const githubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
        .then(result => {
            const loggedinuser = result.user;
            console.log(loggedinuser);
            setUser(loggedinuser)
        })
        .catch(error => {
            console.error(error.message)

        })
        
    }


    // facebook log in 
    const facebookLogIn = () => {
        return signInWithPopup(auth,facebookProvider)
    }

    // observer
    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, (user) => {
                setUser(user);
                setLoading(false);
        });
        return ()=>{
            unSubscribe() ;
        }
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogIn,
        githubLogIn,
        facebookLogIn,
        logout,
        loading,
        user
        
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;