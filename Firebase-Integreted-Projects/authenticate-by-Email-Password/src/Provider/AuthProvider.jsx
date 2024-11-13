import { ProviderId } from "firebase/auth";
import { createContext } from "react";

export const AuthContext=createContext(null)
 const AuthProvider=({children})=>{

    const authInfo={
        name:'ContextAPI'
    }
    return(
        <AuthContext.Provider value={authInfo}>
{/* main part who will have access */}
{children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;


// 1. create context with null as Default
// 2.create Provider
// 3.set a default value with (authInfo)
// use the authprovider in the main.jsx
// access the children inside the authprovider in the main.jsx
// export AuthContext
