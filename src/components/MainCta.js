import React from 'react';
import plusIcon from '../assets/images/plus_icon.svg';

class MainCta extends React.Component {

     render() {
          return(
               <div>
                    <button className={`main-cta ${this.props.className}`}>
                         <img src={plusIcon} alt="plus" className="main-cta__plus-icon"></img>
                         {this.props.title}
                    </button>
               </div>
          )
     }
}

export default MainCta;