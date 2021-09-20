import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

  return (
    <div>
      <div className={s.infoImg}>
        {/* <img 
          alt='header'
          src=''/> */}
      </div>
      <div className = {s.descriptionBlock}>Ava + description {/* <img alt = 'img'
                    src='https://pbs.twimg.com/profile_images/378800000828148824/8b7ad62c657c2646aa06bb06b3565c27.jpeg'/> */}
      </div>
    </div>
  )
}

export default ProfileInfo;