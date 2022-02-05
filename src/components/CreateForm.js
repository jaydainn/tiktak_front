import { Combobox , Card, Button , Pane , Text } from "evergreen-ui"
import React , {useState , useEffect} from "react"
import Exercise from "./Exercise.js"


const CreateForm = (props) => {

    const [exnb , setExnb] = useState(2)
    let res  = []



    useEffect(() => {
        

        for(let i = 0 ; i < exnb ; i++){
            res.push(<Text>Test</Text>)
        }

        console.log(res)
    } , [])
   
    
    

    return (
        <Pane style={{display: "flex" , flex: 1 , flexDirection: "row" , justifyContent: "center"}}>
        <Pane style={{display: "flex" , flex: 1 , flexDirection: "column"}}>
        <Card  style={{   height: "20%" , width:"20%" , padding: "3Rem"}}>
        <Combobox
        items={['Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday' , 'Saturday' , 'Sunday']}
        onChange={selected => 
        {props.action(selected)}}
        placeholder="Day"
        autocompleteProps={{
          // Used for the title in the autocomplete.
          title: 'Day'
        }}

        
        />
        </Card>

        <Pane>
            
           
           {res}
           <Button onClick={() => {setExnb(exnb + 1)}}> + </Button>

          


        </Pane>
        </Pane>
        </Pane>
        
        
        
        

    )
}

export default CreateForm