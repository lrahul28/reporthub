import React from "react"
import SignIn from "../Forms/signIn"
import SignUp from "../Forms/signUp"

function AuthDetails()
{
    return(
        <div style = {{display:"flex",backgroundColor:"#FAFAFA", width:"1500px", height:"800px"}}>
        <SignIn/>
        <SignUp/>
        </div>
    )
}
export default AuthDetails;