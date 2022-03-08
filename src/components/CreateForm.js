import { Combobox, Card, Button, Pane, Text, Spinner } from "evergreen-ui"
import React, { useState, useEffect } from "react"
import Exercise from "./Exercise.js"


const CreateForm = (props) => {

    const [exnb, setExnb] = useState(1)
    const [exercises, setEXercises] = useState([]);
    let res = []


    useEffect(() => {

        fetch("https://127.0.0.1:8000/api/exercises", {
            headers: {
                accept: "application/json",
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then((ex) => { setEXercises(ex) })

    }, [])

  
         
            for(let i = 0 ; i < exnb ; i++){
                res.push(
                    <Pane style={{ display: "flex", flex: 1, justifyContent: "center", flexDirection: "column" }}>
    
    
    
                        <Pane style={{ display: "flex", flex: 1, justifyContent: "center", flexDirection: "row", padding: "2Rem" }}>
                            {exercises.length != 0 ? <><Combobox
                                style={{ flex: 1, display: "flex", width: "100%" }}
                                items={exercises.map((ex) => { return ex.title })}
                                onChange={selected => {let sel ; exercises.map((ex) => {ex.title == selected? sel = ex.id : console.log("")}) ;  props.actionex("api/exercises/" + sel , i ) }}
                                placeholder="Exercise"
                                autocompleteProps={{
                                    // Used for the title in the autocomplete.
                                    title: 'Exercise'
                                }}
                                key={{i}}
    
                            />
                            <Button onClick={() => { setExnb(exnb -1)}}> - </Button>
                            <Button onClick={() => { setExnb(exnb + 1) }}> + </Button>
                            </>
                             : <Spinner />
                            }
                            
    
                        </Pane>
    
    
    
    
    
                    </Pane>
                )
            }

            
      

    









    return (
        <Pane style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center" }}>
            <Pane style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center" }}>
                <Pane style={{ display: "flex", flex: 1, width: "100%", padding: "2Rem" }}>
                    <Combobox
                        items={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
                        onChange={selected => { props.actionday(selected) }}
                        placeholder="Day"
                        style={{ width: "100%" }}
                        autocompleteProps={{
                            // Used for the title in the autocomplete.
                            title: 'Day'
                        }}


                    />
                </Pane>
                <Pane style={{ height: 3, backgroundColor: "grey", flex: 1, display: "flex", flexDirection: "row", width: "100%" }}>

                </Pane>
                        {res}
                
            </Pane>
        </Pane>





    )
}

export default CreateForm