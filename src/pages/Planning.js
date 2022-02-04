import React from "react"
import Navbar from "../components/Navbar.js"
import Day from "../components/Day.js"
import { Pane, TextInput, Text, Button, Alert, Card, Heading } from "evergreen-ui"

const Planning = () => {


    return (
    <Pane >
    
    
    <Card display="flex" style={{ flexDirection: "Row" , justifyContent:"space-around"  , marginTop: "3rem"}}>
        
        <Day day="Monday" />
        <Day day="Tuesday" />
        <Day day="Wednesday" />
        <Day day="Thursday" />
        <Day day="Friday" />
        <Day day="Saturday" />
        <Day day="Sunday" />
   
        
        </Card>
    </Pane >
    )

}

export default Planning