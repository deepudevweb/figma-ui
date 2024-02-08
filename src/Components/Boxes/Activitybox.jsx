import React from 'react'

function Activitybox() {
    return (
        <div className='activitybox'>
            <div className="act-heading">
                <h3>Recently Ativity</h3>
            </div>
            <div className="activity-mid">
                <p className='date'>10 Am, Fri 10 sep 2024</p>
                <h3>You posted a new job</h3>
                <p className='mid-act-para' >Kindely check the requirements of the work and sure everything is right.</p>
            </div>
            <div className="activity-end">
                <h4>Today yo make 12 activity</h4>
                <button> See All Activity</button>
            </div>

        </div>
    )
}

export default Activitybox
