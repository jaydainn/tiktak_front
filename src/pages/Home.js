import React from "react"
import Navbar from "../components/Navbar.js"
import { Pane } from "evergreen-ui"
import Day from "../components/Day.js"

const Home = () => {



    return(
        <Pane>

          
            <Day day="Today" />
        </Pane>
    )

}

export default Home 