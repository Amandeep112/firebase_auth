// import firebase from "../config/firebase-config";
import { authentication } from "../config/firebase-config";
import { signInWithPopup, FacebookAuthProvider  } from "firebase/auth";

  const Facebook=()=>{
 const provider=  new   FacebookAuthProvider();
  signInWithPopup(authentication,provider).then((res)=>{
      return res
  }).catch((err)=>{
      return err.message  
  })
  }
 
// const facebook= firebase.auth.facebookauth()

