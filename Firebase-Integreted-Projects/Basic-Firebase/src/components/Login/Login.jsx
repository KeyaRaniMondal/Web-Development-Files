import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";


const Login=()=>{

    const [user,setUser]=useState(null)
        const provider=new GoogleAuthProvider();
        const handleGoogleSignIn=()=>{
            signInWithPopup(auth,provider)
            .then((result)=>{
                console.log(result)
                setUser(result.user)
            })
            .catch((error)=>{
                console.log('ERROR',error)
                setUser(null)
            })
        }

        const handleSignOut=()=>{
            signOut(auth).then(()=>{
                console.log('sign out done');
                setUser(null)
            }).catch((error=>{
                setUser(error)
            }))
        }
        return(
            <div>
                {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
                <button onClick={handleSignOut}>Sign Out</button> */}
                {
                    user ?<button onClick={handleSignOut}>Sign Out</button>
                    : <button onClick={handleGoogleSignIn}>Login with Google</button>
                }
                {user && <div>
                    <h4>Name: {user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                    </div>}
                </div>
        )
}
export default Login;

