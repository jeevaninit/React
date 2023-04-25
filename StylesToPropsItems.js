import React from 'react'


const StylesToPropsItems = (props) => {
  return (
    <div>
        <h1>Heading goes here..</h1>
        <ul>
        <li>{props.tabs}</li>
        <li>{props.names}</li>
        </ul>
    </div>
  )
}

export default StylesToPropsItems