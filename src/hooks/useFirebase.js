import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
    signInWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const auth = getAuth()

const useFirebase =()=>{
    const [loading,setLoading] = useState(true);
    const [currentUser,setCurrentUser] = useState({})
    
    const signupUser = async(email,password,username)=>{
        console.log(email,password,username)
        await createUserWithEmailAndPassword(auth,email,password);

        // signup update
        await updateProfile(auth.currentUser,{
            displayName:username
        })

        const user = auth.currentUser;
        setCurrentUser({...user})

        console.log(currentUser)
    }

    // login function
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    //logout
    const logOut =()=>{
        signOut (auth)
        .then(()=>{

        })
        .catch((error)=>{
         console.log(error.message)
        })
    }
    
   useEffect(()=>{
      const unSubscript =  onAuthStateChanged(auth,(user)=>{
           setCurrentUser(user)
           setLoading(false)
       })
       return unSubscript;
   },[])


    return{
        currentUser,
        signupUser,
        logOut,
        loading,
        logIn
    }
}

export default  useFirebase;