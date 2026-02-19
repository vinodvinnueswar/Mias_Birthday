import React from 'react'
import Parents from '../assets/Images/Parents.png'

const Invite_Details = () => {
  return (
    <div className="Invite_Details_Container">
        <h2>You're Invited</h2>
        <div className="Details">
            <h3>We</h3>
            <br />
            <h2>Henry Hardvard <br />
                & Joyce Merlin
            </h2>
            <br />

            <p>Invite you all for the 1st birthday <br />
               of our little princess
            </p>
            <br />

            <img src={Parents} alt="" />
        </div>
    </div>
  )
}

export default Invite_Details