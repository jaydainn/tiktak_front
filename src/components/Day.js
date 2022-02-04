import React from "react"
import { Pane, TextInput, Text, Button, Alert, Card, Heading } from "evergreen-ui"


const Day = (props) => {


    return (
    <Card display="flex" background="tint2" style={{ flexDirection: "Column" , margin: "1Rem" , height: "100%", flex: 1 , justifyContent: "center" , textAlign: "center" , padding: "1Rem" }}>
    <Heading>{props.day}</Heading>
    
        </Card>
    )

}

export default Day
