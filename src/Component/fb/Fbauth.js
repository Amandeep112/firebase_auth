import { authentication } from './config/firebase-config';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

  const Fbauth =()=> {
    const provider=  new   FacebookAuthProvider();
    signInWithPopup(authentication,provider).then((res)=>{
        return res
    }).catch((err)=>{
        return err.message  
    })
    
     
  return (
    <div className='fbbutton'> 
         <button onClick={Fbauth}>facebook</button>
    </div>
  )
}
export default Fbauth;