import React, { useEffect  , useState} from "react"
import Navbar from "../components/Navbar.js"
import { Pane } from "evergreen-ui"
import Day from "../components/Day.js"

const Home = () => {
 
const [day , setDay] = useState("");

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
                console.log(da)
            })
        })
        let tab  = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
        let daytmp = new Date();
        setDay(tab[daytmp.getDay()])
        console.log(day)


       
    } , [])


    return(
        <Pane>

          
            {data != null ? <Day day={day} data={data} /> : <Day day={day} loading={true} />}
        </Pane>
    )

}

export default Home 