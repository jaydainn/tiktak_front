import React  , {useState} from "react"
import CreateForm from "../components/CreateForm.js"
import {Pane} from "evergreen-ui"


const Create= () => {


    const [day , setDay] = useState(null)



    const dayAction = (day) => {
        setDay(day);
        console.log(day)
    }

    return(
        <Pane style={{ display: "flex" , flex: 1 , justifyContent: "center"}}>
        <CreateForm action={dayAction} />
        </Pane>
        
    )

}

export default Create