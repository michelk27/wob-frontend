import React, {useState} from "react";
import PrimaryButton from "../Buttons/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";
function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const API_URL_LOGIN =  "http://localhost:8080/api/signin"
    const navigate = useNavigate()

    async function handleSubmitSignin(){
        try{
            if(username !== "" && password !== "" ){
            const response= await fetch(API_URL_LOGIN,  {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({username, password})
             })
                const access = await response.json()
                if(access.authenticated){
                    navigate("/customers")
                }else{
                    alert(access.message)
                }
            }else{
                alert('Username and Password are required');
            }
        }catch (error){
            console.error('error',error)
            alert('error happened during login, please check username and password and try again')
        }
        }

    return (
        <>
            <div className="flex flex-col py-2">
                <label>Username</label>
                <input className="rounded-lg border p-2" type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="flex flex-col py-2">
                <label>Password</label>
                <input className="rounded-lg border p-2" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <PrimaryButton label="Sign in" onClick={handleSubmitSignin}  />
        </>
)
}
export default LoginForm;