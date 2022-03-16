import React, { useEffect, useState } from "react"
import { Pane, TextInput, Text, Button, Alert, Card, Heading, Spinner } from "evergreen-ui"


const Day = (props) => {

    
const [exercises , setExercises] = useState([]);


    useEffect(() => {
        if(props.data != undefined && props.data[props.day.toLowerCase()] != undefined){
            let tab = []
        props.data[props.day.toLowerCase()].exerciseInWorkouts[0].exercise.map((ex) => {
            tab.push(<Text>{ex.title}</Text>)
            

        })
        setExercises(tab)
    }
        


    }, [props.data])


    return (
        <Card display="flex" background="tint2" style={{ flexDirection: "Column", margin: "1Rem", height: "100%", flex: 1, justifyContent: "center", textAlign: "center", padding: "1Rem" }}>
            <Heading>{props.day}</Heading>
            <Card style={{ display: "flex", flex: 1, flexDirection: "Row", justifyContent: "center" }}>
            {props.loading ? <Spinner></Spinner> : <></>}
            
            </Card>
            <hr />
            <Card style={{marginTop: "1Rem" , flex: 1 , display: "flex" , flexDirection: "column" , marginBottom: "1Rem"}}>
            {exercises.length > 0 ? exercises : <></>}
           </Card>

           {exercises.length > 0 ? <Button>done</Button> : <></>}

        </Card>
    )

}

export default Day
