import React , {useState , useEffect , useRef} from "react"
import {Card , CornerDialog , Button, Heading, Text , Pane, Alert , toaster} from "evergreen-ui"



const Timer = (props) => {

    const [seconds , setSeconds] = useState(90)
    const [startTime , setStartTime] = useState(null)
    const [start , setStart] = useState(false)
    const [isOver , setIsOver] = useState(false)


    const playerRef = useRef(null);
    

    let interval 
    const countdown = () => {
        
        setStartTime(new Date());
        setStart(true)
        
    }
    useEffect(() => {
        if(start){
        const timer =
          seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
        if(seconds == 0 ){
            setStart(false)
            toaster.danger('Time is up!')
            let audio = new Audio("https://www.soundjay.com/buttons/sounds/beep-02.mp3")
            audio.play()
        }
        return () => {clearInterval(timer);} 
        
        }
            
      }, [seconds  , start]);
    
      useEffect(() => {
        if(seconds < 1){
            
            setStart(false)
            
            
            

        }

      } , [])
    
    return(
        <>
        
        <CornerDialog isShown={props.isShown} hasFooter={false} hasClose={true} onCloseComplete={props.action} style={{marginTop: "2Rem"}}>
        
            <Pane style={{flex: 1 , display: "flex" , justifyContent: "center" , marginTop: "1rem"}}>
            <Text style={{fontSize: 50}}>{ seconds / 60 < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60) }</Text>
            <Text style={{fontSize: 50}}>:</Text>
            <Text style={{fontSize: 50}}>{ seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60}</Text>
            <audio ref={playerRef} src="https://www.soundjay.com/buttons/sounds/beep-02.mp3" />
            </Pane>
            <br />
            <Pane style={{flex: 1 , display: "flex" , justifyContent: "center"}}>
            <Button style={{margin: 1}} onClick={() => {seconds + 30 < 3600 ? setSeconds(seconds + 30 ) : setSeconds(3599)}} appearance="primary" intent="success"> + </Button>
            <Button style={{margin: 1}}  onClick={() => {seconds - 30 > 0 ? setSeconds(seconds - 30 ) : setSeconds(0)}} appearance="primary" intent="danger"> - </Button>
            <Button style={{margin: 1}} onClick={() => {countdown()}} appearance="primary"> Start </Button>
            <Button style={{margin: 1}} onClick={() => {setSeconds(90)}} appearance="primary"> Reset </Button>
            <Button style={{margin: 1}}  onClick={() => {setStart(false)}} appearance="primary" intent="danger"> Stop </Button> 
            </Pane>
            </CornerDialog>
            </>
        
       
    )
}


export default Timer