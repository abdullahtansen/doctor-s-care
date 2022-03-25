import { useEffect, useState } from "react"; 
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import initializeAuthentication from "../Pages/Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


const useFirebase = () =>{
    const [user,setUser] = useState({});

const auth = getAuth();

// signIn using google
    const signInUsingGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result=> {
            console.log(result.user);
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then( () =>[
            setUser({})
        ])
    }

    // observe weather user auth state changed or not
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // console.log(user);
            }
          });
    },[auth])

    return{
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;