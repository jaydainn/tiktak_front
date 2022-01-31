import { Pane, TextInput, Text, Button } from "evergreen-ui"
import React from "react"

const LoginForm = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <Pane display="flex" style={{ flexDirection: "Row" , justifyContent:"center"  , marginTop: "3rem"}}>

            <Pane display="flex" style={{ flexDirection: "Column" , justifyItems: "center" }}>
                <Text> Email </Text>
                <TextInput onChange={e => setEmail(e.target.value)} value={email} />
                <br />
                <Text> Password</Text>
                <TextInput type="password" onChange={e => setPassword(e.target.value)} value={password} />
                <br />


                <Button onClick = {() => {console.log(email , password)}}  appearance="primary">
                    LogIn
                </Button>


            </Pane>
        </Pane>
    )

}

export default LoginForm