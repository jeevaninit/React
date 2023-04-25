import React from 'react'


const Img = (props) => {
  return (
    <div className='container'>
        <img src={props.src} alt='' width={250} height={200}/>
        <ul>
            <li>Simple text</li>
        <li>{props.arr}</li>
        </ul>
        {/* <h2>Image Title Goes Here....</h2>
        <p>Para Content Goes Here....</p> */}

    </div>
  )
}

export default Img