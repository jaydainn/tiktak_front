import React from "react"
import { Button, Pane, Text, majorScale , Heading, Link } from 'evergreen-ui'



const Navbar = () => {

    return (
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading size={600}>TikTak</Heading>
                
                
            </Pane>
            <Pane>
                {/* Below you can see the marginRight property on a Button. */}
                
                <Button appearance="primary">Login</Button>
            </Pane>
        </Pane>
    )

}

export default Navbar
