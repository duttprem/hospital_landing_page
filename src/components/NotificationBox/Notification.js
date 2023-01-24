import React from 'react'
import './Notification.css'
import OvalCircle from '../../assets/OvalCircle.svg'
const Notification = () => {
  return (
    <div className="NotificationContainer">
      <img src={OvalCircle} alt="Full oval Circle" />
      <div className="textNotify">
        <h1>Subscribe to Newsletter</h1>
        <p>We have a wide experience in experience design and strategy,</p>

        <div className='inputFiled'>
          <input type="email" placeholder='Enter your email address' />
          <button>Send Now</button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
