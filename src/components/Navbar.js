import React, { useState  , useEffect} from "react"
import { Button, Pane, Text, majorScale, Avatar, Heading, Link } from 'evergreen-ui'
import Timer from "../components/Timer.js"



const Navbar = () => {


    const [isShown, setIsShown] = useState(false)


    const action = () => {
        setIsShown(!isShown)
    }



    return (
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading style={{ cursor: "pointer" }} onClick={() => { window.location.href = "/" }} size={600}>TikTak</Heading>

                {sessionStorage.getItem("token") != undefined ?
                    <Text style={{ paddingLeft: "1rem", cursor: "pointer" }} onClick={() => { window.location.href = "/plan" }}> Plan</Text>
                    :
                    <></>

                }
                {sessionStorage.getItem("token") != undefined ?
                    <Text style={{ paddingLeft: "1rem", cursor: "pointer" }} onClick={() => { setIsShown(!isShown) }}> Timer </Text>
                    :
                    <></>

                }
                {sessionStorage.getItem("token") != undefined ?
                    <Text style={{ paddingLeft: "1rem", cursor: "pointer" }} onClick={() => { window.location.href = "/history" }}> History </Text>
                    :
                    <></>

                }
                {sessionStorage.getItem("token") != undefined ?
                    <Text style={{ paddingLeft: "1rem", cursor: "pointer" }} onClick={() => { window.location.href = "/create" }}> Create </Text>
                    :
                    <></>

                }




            </Pane>
            <Pane>
                {/* Below you can see the marginRight property on a Button. */}


                {sessionStorage.getItem("token") != undefined ?
                    <Button onClick={() => { sessionStorage.clear(); window.location.href = "/" }} appearance="primary">Logout</Button>
                    :
                    <Button onClick={() => { window.location.href = "/login" }} appearance="primary">Login</Button>

                }
            </Pane>
            <Timer isShown={isShown} action={action} />
        </Pane>
    )

}

export default Navbar
