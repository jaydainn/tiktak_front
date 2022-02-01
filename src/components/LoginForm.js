import { Pane, TextInput, Text, Button } from "evergreen-ui"
import React from "react"
import {decode as base64_decode, encode as base64_encode} from 'base-64';

const LoginForm = () => {

    const handleLogin = () => {
        let obj = [{username: email , password : password}]
        fetch('http://localhost:30/token', {
            
            method: "post",
            body: JSON.stringify(obj)
        })
        .then((res) => res.json())
        .then((data) => {console.log(data)})
    }


    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <Pane display="flex" style={{ flexDirection: "Row", justifyContent: "center", marginTop: "3rem" }}>

            <Pane display="flex" style={{ flexDirection: "Column", justifyItems: "center" }}>
                <Text> Email </Text>
                <TextInput onChange={e => setEmail(e.target.value)} value={email} />
                <br />
                <Text> Password</Text>
                <TextInput type="password" onChange={e => setPassword(e.target.value)} value={password} />
                <br />


                <Button onClick={() => { handleLogin() }} appearance="primary">
                    LogIn
                </Button>


            </Pane>
        </Pane>
    )

}

export default LoginForm