import React, { useEffect, useState } from "react"
import { Pane, TextInput, Text, Button, Alert, Card, Heading, Spinner , StatusIndicator } from "evergreen-ui"


const Day = (props) => {

    
const [exercises , setExercises] = useState([]);


 const handleClick = () => {
     if( props.data != undefined){
         console.log(props.data[props.day.toLowerCase()].exerciseInWorkouts[0])
         fetch("https://127.0.0.1:8000/api/done/" + props.data[props.day.toLowerCase()].exerciseInWorkouts[0].id)
         console.log(props.data)
     }
 }

    useEffect(() => {
        if(props.data != undefined && props.data[props.day.toLowerCase()] != undefined){
            let tab = []
        props.data[props.day.toLowerCase()].exerciseInWorkouts[0].exercise.map((ex) => {
            tab.push(<Text key={Math.random() * 99999999}>{ex.title}</Text>)
            

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

           {exercises.length > 0  && props.data[props.day.toLowerCase()].exerciseInWorkouts[0].done == undefined> 0  ? <Button onClick={() => handleClick()}>done</Button> : <></>}
           {exercises.length > 0 &&  props.data[props.day.toLowerCase()].exerciseInWorkouts[0].done != undefined ? <StatusIndicator color="success">Done</StatusIndicator>  : <></>}

        </Card>
    )

}

export default Day
