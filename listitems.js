import React from 'react'

const Listitems = (props) => {
  return (
    <div className='menu'>
      <ul>
        <li>{props.arr}</li>
        </ul>
    </div>
  )
}

export default Listitems