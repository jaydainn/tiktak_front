import React, { useEffect , useState } from "react"
import { Pane, TextInput, Text, Button, Alert, Card, Heading } from "evergreen-ui"


const Day = (props) => {

    const [exercises , setExercises] = useState([])

    useEffect(() => {
        fetch("https://127.0.0.1:8000/api/users/11" , {
            headers: {
                accept: "application/json",
                "Content-type": "application/json"
            }

        })
        .then((res) => res.json())
        .then((data) => {
            let r = data.planners[data.planners.length- 1]
            fetch("https://127.0.0.1:8000"+r , {
                headers: {
                    accept: "application/json",
                "Content-type": "application/json"
                }
            })
            .then((re) => re.json())
            .then((da) =>  {
                let a = da[props.day.toLowerCase()]
                //console.log(a)
                if(a != undefined ){
                fetch("https://127.0.0.1:8000" + a , {
                    headers: {
                        accept: "application/json",
                    "Content-type": "application/json"
                    }
                } )
                .then(ans => ans.json())
                .then(daaaa => {
                    fetch("https://127.0.0.1:8000" + daaaa.exerciseInWorkouts , {
                        headers: {
                            accept: "application/json",
                        "Content-type": "application/json"
                        }
                    })
                    .then((bla) => bla.json())
                    .then((tra) => {
                        tra.exercise.map((ex) => {
                            fetch("https://127.0.0.1:8000" + ex , {
                                headers: {
                                    accept: "application/json",
                                "Content-type": "application/json"
                                }
                            })
                            .then((ctva) => ctva.json())
                            .then((ctve) => {console.log(ctve) ;let tab = exercises ; tab.push(<Text>{ctve.title}</Text>) ;  setExercises(tab)} )
                        })
                    })
                })

                }else{
                    setExercises(["no"])
                }
            })
        })
    } , [])


    return (
    <Card display="flex" background="tint2" style={{ flexDirection: "Column" , margin: "1Rem" , height: "100%", flex: 1 , justifyContent: "center" , textAlign: "center" , padding: "1Rem" }}>
    <Heading>{props.day}</Heading>

    {exercises[0] == "no"? <Text> REST DAY</Text> : exercises }
    
        </Card>
    )

}

export default Day
