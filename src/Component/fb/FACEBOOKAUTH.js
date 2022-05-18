import { authentication } from './config/firebase-config';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

export default function FACEBOOKAUTH() {
    const facebHandle=()=>{
        const provider=  new   FacebookAuthProvider();
        signInWithPopup(authentication,provider).then((res)=>{
           console.log( res);
        }).catch((err)=>{
            return err.message  
        })
    }
   
   
   
   
   
   
  return (
    <div className='fbbutton'> 
 <button onClick={ facebHandle }>facebook</button>
    </div>
  )
}
