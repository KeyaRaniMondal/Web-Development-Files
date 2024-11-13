import { useState } from "react";

const StatefulForm=()=>{

    const [email,setEmail]=useState(null)
    const handleSubmit=e=>{
e.preventDefault();
console.log(email)
    }
    const handleEmail=e=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    return(
        <div>
<form onSubmit={handleSubmit}>
            <input id="text" type="text" name="name"/><br />
            <input onChange={handleEmail} type="email" name="email" id="" /><br />
            <input type="password" name="phone" id="" /><br />
            <input id="sub" type="submit" value="Submit" />
        </form>
        </div>
    )
}
export default StatefulForm;