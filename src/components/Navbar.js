import React from "react"
import { Button, Pane, Text, majorScale , Heading, Link } from 'evergreen-ui'



const Navbar = () => {

    return (
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading style={{ cursor: "pointer"}} onClick={() => {window.location.href = "/"}} size={600}>TikTak</Heading>
                <Text style={{paddingLeft: "1rem" , cursor: "pointer"}} onClick={() => {window.location.href = "/planner"}}> Planner </Text>
                
                
            </Pane>
            <Pane>
                {/* Below you can see the marginRight property on a Button. */}
                
                <Button onClick={() => {window.location.href = "/login"}} appearance="primary">Login</Button>
            </Pane>
        </Pane>
    )

}

export default Navbar
