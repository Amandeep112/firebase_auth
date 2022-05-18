 import { authentication } from "../../config/firebase-config"
 import { signInWithPopup,GoogleAuthProvider } from "firebase/auth"

export default function gauth() {
    const googleAuth =new GoogleAuthProvider()
  return (
    <div>gauth</div>
  )
}
