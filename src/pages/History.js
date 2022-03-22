import React from "react"
import {Heading , Table , StatusIndicator} from "evergreen-ui"

const History = () => {

    return (
        <>
       <Table.Body> 
  <Table.Head>
    <Table.SearchHeaderCell />
    <Table.TextHeaderCell>Date</Table.TextHeaderCell>
    <Table.TextHeaderCell>Workout</Table.TextHeaderCell>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
      <StatusIndicator color="success">Done</StatusIndicator>
      </Table.TextCell>
      <Table.TextCell>{new Date().toLocaleDateString("en-US")}</Table.TextCell>
      <Table.TextCell>Lat pull down</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
      <StatusIndicator color="success">Done</StatusIndicator>
      </Table.TextCell>
      <Table.TextCell>{new Date().toLocaleDateString("en-US")}</Table.TextCell>
      <Table.TextCell>Lat pull down</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
      <StatusIndicator color="success">Done</StatusIndicator>
      </Table.TextCell>
      <Table.TextCell>{new Date().toLocaleDateString("en-US")}</Table.TextCell>
      <Table.TextCell>Lat pull down</Table.TextCell>
    </Table.Row>
    <Table.Row>
      <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>
      <StatusIndicator color="success">Done</StatusIndicator>
      </Table.TextCell>
      <Table.TextCell>{new Date().toLocaleDateString("en-US")}</Table.TextCell>
      <Table.TextCell>Lat pull down</Table.TextCell>
    </Table.Row>
  </Table.Body>
</Table.Body>
  

        </>
    )
}



export default History