import React, {useState} from "react";
import PrimaryButton from "../Buttons/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";
import {Snackbar, Alert} from "@mui/material";
import LogoImage from "../../assets/logo.svg";
function LoginForm() {
    const [isSnackBarOpen, setIsSnackBarOpen] = useState(false)
    const [message, setMessage]= useState("")
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
                    setMessage(access.message)
                    setIsSnackBarOpen(true)
                }
            }else{
                setMessage('Username and Password are required')
                setIsSnackBarOpen(true)
            }
        }catch (error){
            console.error('error',error)
            setMessage('error happened during login, please check username and password and try again')
            setIsSnackBarOpen(true)
        }
        }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <img src={LogoImage} alt="logo" className="h-[74px] w-[250px] my-0" />
            </div>
            <div className="flex flex-col py-2">
                <label>Username</label>
                <input className="rounded-lg border p-2" type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="flex flex-col py-2">
                <label>Password</label>
                <input className="rounded-lg border p-2" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="flex justify-center mt-4">
            <PrimaryButton label="Sign in" onClick={handleSubmitSignin}  />
            <Snackbar open={isSnackBarOpen} autoHideDuration={4000} >
                <Alert severity="error">
                    {message}
                </Alert>
            </Snackbar>
            </div>
        </>
)
}
export default LoginForm;