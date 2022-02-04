import React from "react"
import {Pane , Heading , Card} from "evergreen-ui"
import Timer from "../components/Timer.js"

const Landing = () =>{



    return (
        <>

        <Pane style={{width: "100%" , height: "100vh" , backgroundImage: "url(https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80)" , backgroundRepeat: "no-repeat" , backgroundSize : "cover" , flex: 1 , display: "flex" , justifyContent: "center"  } }>
            <Card style={{backgroundColor : "white" , width: "60%" , height: "40%" , margin: "5Rem" , padding: "2Rem"}}>
                <Heading>Welcome to TikTak </Heading>
            </Card>

            <Timer />

        </Pane>
        
        
        </>
    )

}


export default Landing 