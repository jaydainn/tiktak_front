import { Pane, TextInput, Text, Button , Spinner  , ThemeProvider, defaultTheme , toaster} from "evergreen-ui"
import React from "react"
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import { AirlineSeatLegroomReducedTwoTone } from "@mui/icons-material";

const LoginForm = () => {


    const newTheme = {
        ...defaultTheme,
        spinnerColor: "white"
    }
    

    const handleLogin = () => {
        let obj = {username: email , password : password}
        setClicked(true)
        fetch("https://127.0.0.1:8000/api/login" , {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                accept: "application/json",
                "Content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.token != undefined){
                sessionStorage.setItem("token" , data.token);
                window.location.href = "/"

            }else{
                toaster.danger("Wrong email or password.")
                setClicked(false)
            }
        })
        .catch((err) => console.log(err))
        
     
    }


    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [clicked , setClicked] = React.useState(false)
    
    return (
        <ThemeProvider value={newTheme}>
        <Pane display="flex" style={{ flexDirection: "Row", justifyContent: "center", marginTop: "3rem" }}>

            <Pane display="flex" style={{ flexDirection: "Column", justifyItems: "center" }}>
                <Text> Email </Text>
                <TextInput onChange={e => setEmail(e.target.value)} value={email} />
                <br />
                <Text> Password</Text>
                <TextInput type="password" onChange={e => setPassword(e.target.value)} value={password} />
                <br />


                <Button onClick={() => { handleLogin() }} appearance="primary">
                   {clicked? <Spinner size={16} style={{Color: "white"}}/> : "LogIn"}
                </Button>


            </Pane>
        </Pane>
        </ThemeProvider>
    )

}

export default LoginForm