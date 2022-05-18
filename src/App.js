 
import './App.css';
import { authentication } from './config/firebase-config';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
 
 


function App() {
  const facebHandle=()=>{
    const provider=  new   FacebookAuthProvider();
    signInWithPopup(authentication,provider).then((res)=>{
        console.log(res)
    }).catch((err)=>{
      console.log(err.message) 
    })
}
const googleHandle=()=>{
  const provide= new GoogleAuthProvider();
  signInWithPopup(authentication,provide).then((res)=>{
  console.log(res)
  }).catch((err)=>{
    console.log(err.message)
  })
}

  return (
    <div className='App'>
    <button className='fb'  onClick={facebHandle}>  Sign In With Facebook </button>
    <button className='google' onClick={googleHandle}>Sign In With Google  </button>
    </div >

      

 
  );
}

export default App;
