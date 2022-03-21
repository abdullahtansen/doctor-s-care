import initializeAuthentication from "../Pages/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () =>{
    return {

    }
}

