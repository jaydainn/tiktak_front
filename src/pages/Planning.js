import React from "react"
import Navbar from "../components/Navbar.js"
import { Pane, TextInput, Text, Button, Alert, Card, Heading } from "evergreen-ui"

const Planning = () => {


    return (
    <Pane >
    <Navbar />
    
    <Card display="flex" style={{ flexDirection: "Row" , justifyContent:"space-around"  , marginTop: "3rem"}}>

    <Card display="flex" background="tint2" style={{ flexDirection: "Column" , margin: "1Rem" , height: "100%", flex: 1 , justifyContent: "center" , textAlign: "center" , padding: "1Rem" }}>
    <Heading>Monday</Heading>
    
        </Card>
        <Card background="tint2" display="flex" style={{ flexDirection: "Column" , margin: "1Rem"  , height: "100%",  flex: 1  , justifyItems: "center", textAlign: "center" , padding: "1Rem"  }}>
        <Heading>Tuesday</Heading>
        
    
        </Card>
        <Card background="tint2" display="flex" style={{ flexDirection: "Column" , margin: "1Rem" , height: "100%" , flex: 1  ,  justifyItems: "center" , textAlign: "center" , padding: "1Rem"  }}>
        <Heading>Wednesday</Heading>
    
        </Card>
        <Card background="tint2" display="flex" style={{ flexDirection: "Column" , margin: "1Rem" ,height: "100%" , flex: 1  , justifyItems: "center" , textAlign: "center" , padding: "1Rem"  }}>
        <Heading>Thursday</Heading>
    
        </Card>
        <Card background="tint2" display="flex" style={{ flexDirection: "Column" , margin: "1Rem" ,height: "100%" , flex: 1  , justifyItems: "center" , textAlign: "center" , padding: "1Rem"  }}>
        <Heading>Friday</Heading>
    
        </Card>
        <Card  background="tint2" display="flex" style={{ flexDirection: "Column" , margin: "1Rem" ,height: "100%" , flex: 1  , justifyItems: "center" , textAlign: "center" , padding: "1Rem"  }}>
        <Heading>Saturday</Heading>
    
        </Card>
        <Card background="tint2" display="flex" style={{ flexDirection: "Column" , margin: "1Rem" , height: "100%" , flex: 1  ,justifyContent: "center" , textAlign: "center" , padding: "1Rem"  }}>

        <Heading>Sunday</Heading>
        </Card>
        </Card>
    </Pane >
    )

}

export default Planning