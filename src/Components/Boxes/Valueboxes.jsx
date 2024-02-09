import React from 'react'
import './Boxes.css'

function Valueboxes({header, value, para, bgcolor}) {
  return (
    <div  className={`${bgcolor} valueboxes`} id='valueboxes'>
      <h2 className='heading'>{header}</h2>
      <h1>{value}</h1>
      <p className='value-para'>{para}</p>
    </div>
  )
}

export default Valueboxes
