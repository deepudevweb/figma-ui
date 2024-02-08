import React from 'react'
import './Boxes.css'
import Graph from '../../assets/graph.jpeg'

function Graphbox() {
  return (
    <div className='graphbox'>
      <div>
        <h2 className='heading'>Total Employess</h2>
        <h1>212</h1>
        <p className='graph-para'>120 Men</p>
        <p className='graph-para'>96 women</p>
      </div>
      <div>
        <img src={Graph} alt="insights" height="100px" width="100px" className='graphlogo' />
        <p className='insight-para'>+2% Past Month</p>
      </div>
    </div>
  )
}

export default Graphbox
