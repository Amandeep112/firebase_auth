  
import analytics from '../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'
export default function socialauth(provider) {
 signInWithPopup(provider).then((res)=>{
    return res.user
}).catch((err)=>{

    return err
})


   
  
 
}
