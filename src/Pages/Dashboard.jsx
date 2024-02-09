import React from 'react'
import Header from '../Components/Header/Header'
import Valueboxes from '../Components/Boxes/Valueboxes'
import Graphbox from '../Components/Boxes/Graphbox'
import Activitybox from '../Components/Boxes/Activitybox'
import './Dashboard.css'
import Announcemnt from '../Components/Announcment/Announcemnt'
import Schedule from '../Components/Schedule/Schedule'
import Sidebar from '../Components/Sidebar/Sidebar'
function Dashboard() {
  return (
   <div className='dashboard'>
  <Sidebar /> 
   <div className='dashboard-Container'>
      <Header />
    <div className='dashboard-inner'>
      <div className="left">
         <div className="top-boxes dashbox">
            <Valueboxes value={"24"} para={"4 Urgently needed"} header={"Available Position"} bgcolor={"first-box"} />
            <Valueboxes value={"10"} para={"4 Active hiring"} header={"Job Open"} bgcolor={"second-box"}  />
            <Valueboxes value={"24"} para={"4 Department"} header={"New Employees"} bgcolor={"third-box"} />
         </div>
         <div className="bottom-boxes dashbox">
            <Graphbox />
            <Graphbox />
         </div>
         <Announcemnt />
      </div>
      <div className="right">
        <Activitybox />
        <Schedule />
      </div>
    </div>
    </div>
   </div>
  )
}

export default Dashboard
