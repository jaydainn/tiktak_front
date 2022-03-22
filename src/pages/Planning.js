import React , {useState , useEffect} from "react"
import Navbar from "../components/Navbar.js"
import Day from "../components/Day.js"
import { Pane, TextInput, Text, Button, Alert, Card, Heading } from "evergreen-ui"

const Planning = () => {


const [data , setData] = useState(null)

    useEffect(() => {
        fetch("https://127.0.0.1:8000/api/users/1" , {
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
        
       {data  != null ? <Day day="Monday" data={data} key={1}  />  : <Day day="Monday" loading={true}></Day>}
       {data  != null ? <Day day="Tuesday" data={data} key={2}  />  : <Day day="Tuesday" loading={true}></Day>}
       {data  != null ? <Day day="Wednesday" data={data} key={3}  />  : <Day day="Wednesday" loading={true}></Day>}
       {data  != null ? <Day day="Thursday" data={data} key={4}  />  : <Day day="Thursday" loading={true}></Day>}
       {data  != null ? <Day day="Friday" data={data} key={5}  />  : <Day day="Friday" loading={true}></Day>}
       {data  != null ? <Day day="Saturday" data={data} key={6}  />  : <Day day="Saturday" loading={true}></Day>}
       {data  != null ? <Day day="Sunday" data={data} key={7} />  : <Day day="Sunday" loading={true}></Day>}
   
        
        </Card>
    </Pane >
    )

}

export default Planning