import React, { useState } from 'react';
import deleteIcon from '../assets/images/delete_icon.svg';

const User = (props) => {

     const [visibility, setVisibility] = useState('none');

     const buttonsStyle = {
          display: `${visibility}`,
     };

     let className = '';
     if (props.user.role === 'Admin') {
          className += 'user__role--admin';
     } else if (props.user.role === 'Member') {
          className += 'user__role--member';
     }



  return (
    
     <div key={props.user.id} className="user" onMouseEnter={() => setVisibility('flex')} onMouseLeave={() => setVisibility('none')}>
          <div className="user__details-container">
               <p className="user__name">{props.user.name}</p>
               <p className="user__email">{props.user.email}</p>
          </div>
          <div className="user__role-container">
               <p className={className}>{props.user.role}</p>
          </div>
          <div className="user__actions-container" style={buttonsStyle}>
                 <button className="user__reset-password">Reset password</button>
                 
                 <button className="user__delete" name={props.user.id} onClick={() => props.clickHandler(props.user.id)}>
                      <img src={deleteIcon} alt="delete icon"></img>
                 </button>

          </div>
     </div>
  );
}

export default User;
