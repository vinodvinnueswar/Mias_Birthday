import React from 'react'
import calender from '../assets/contacts/calender.png'
import location from '../assets/contacts/Location.png'
import phone from '../assets/contacts/Phone.png'

const Date_Time = () => {
  return (
    <div className="Date_Time_Container">
          <h2>Party Details</h2>
        <div className="Date_Time_Details">
            <h3>Date & Time</h3>
            <div className="full_view">
            <img src={calender} alt="" />
            <p>Sunday August 10th, from <br /> 2:00 PM</p>
            <br />
            <img src={location} alt="" />
            <p>Location: <br />,
               456 Colony,Near Hightech city,<br />
               Hyderabad,522004.
            </p>
            <br />
            <img src={phone} alt="" />
            <p>Contact : +91 923XXXXXX0</p>
            </div>

        </div>
    </div>
  )
}

export default Date_Time