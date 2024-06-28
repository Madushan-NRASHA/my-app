import React from 'react'
import ProfileImg from '../assets/gg.png';
import '../App.css'
function userImage() {
  return (
    <div>
      <div class="dotted-circle">
      <img src={ProfileImg} alt="Profile" className="profile-img" />
      </div>
    </div>
  )
}

export default userImage
