import React , {useState , useEffect} from "react"
import Navbar from "../components/Navbar.js"
import Day from "../components/Day.js"
import { Pane, TextInput, Text, Button, Alert, Card, Heading } from "evergreen-ui"

const Planning = () => {


const [data , setData] = useState(null)

    useEffect(() => {
        fetch("https://127.0.0.1:8000/api/users/11" , {
            headers: {
                accept: "application/json",
                "Content-type": "application/json"
            }

        })
        .then((res) => res.json())
        .then((data) => {
            fetch("https://127.0.0.1:8000/api/planners/" + data.planners[data.planners.length -1 ].id , {
                headers: {
                    accept: "application/json",
                    "Content-type": "application/json"
                }
            })
            .then((re) => re.json())
            .then((da) => {
                setData(da)
            })
        })
        
    } , [])


    return (
    <Pane >
    
    
    <Card display="flex" style={{ flexDirection: "Row" , justifyContent:"space-around"  , marginTop: "3rem"}}>
        
       {data  != null ? <Day day="Monday" data={data}  />  : <Day day="Monday" loading={true}></Day>}
       {data  != null ? <Day day="Tuesday" data={data}  />  : <Day day="Tuesday" loading={true}></Day>}
       {data  != null ? <Day day="Wednesday" data={data}  />  : <Day day="Wednesday" loading={true}></Day>}
       {data  != null ? <Day day="Thursday" data={data}  />  : <Day day="Thursday" loading={true}></Day>}
       {data  != null ? <Day day="Friday" data={data}  />  : <Day day="Friday" loading={true}></Day>}
       {data  != null ? <Day day="Saturday" data={data}  />  : <Day day="Saturday" loading={true}></Day>}
       {data  != null ? <Day day="Sunday" data={data}  />  : <Day day="Sunday" loading={true}></Day>}
   
        
        </Card>
    </Pane >
    )

}

export default Planning