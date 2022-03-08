import React  , {useState} from "react"
import CreateForm from "../components/CreateForm.js"
import {Pane , Button} from "evergreen-ui"


const Create= () => {


    const [day , setDay] = useState("")
    const [plan , setPlan] = useState([])
    const [done , setDone] = useState(false)



    const dayAction = (dy) => {
        setDay(dy);
        console.log(day)
    }

    const exerciseAction = (ex , id ) => {
        let r = plan
        r[id] = ex 
        setPlan(r)
        console.log(plan)

    }

    return(
        <>
{   !done?     <Pane style={{ display: "flex" , flex: 1 , justifyContent: "center" , flexDirection: "column" , padding: "1Rem"}}>
        <CreateForm actionday={dayAction} actionex={exerciseAction}  />
        <Button appearance="primary" style={{width: "100%"}}  onClick={() => { 
            
            console.log(day , plan)
            fetch("https://127.0.0.1:8000/api/workouts" , {
                method: "POST" , 
                headers: {
                    accept: "application/json",
                    "Content-type": "application/json"
                },
                body:JSON.stringify( {
                    "title" : "jeremy"+ Math.random() * 9999999
                })
            }) 
            .then((res) => res.json())
            .then((data) => {
                let body = {
                    "title" : "jeremy"+ Math.random() * 9999999,
                    "userId" : "/api/users/11"
                
                    
                }
                body[day.toLowerCase()] = "/api/workouts/" + data.id
                fetch("https://127.0.0.1:8000/api/planners" , {
                    method: "POST" , 
                    headers: {
                        accept: "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
                .then((res) => res.json())
                .then((dat) => {
                    fetch("https://127.0.0.1:8000/api/exercise_in_workouts" , {
                        method: "POST" , 
                    headers: {
                        accept: "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            "workout": "/api/workouts/"+data.id,
                            "exercise": plan,
                            "weight": 0,
                            "repNumber": 0,
                            "setNumber": 0
                          }
                    )
                    })
                })
                .then((res) => {
                    setDone(true)
                })
            })
            
        }}>Submit</Button>
        </Pane>  : <></>}
        </>
    
        
    )

}

export default Create