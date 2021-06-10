import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
     render() {
          return (
               <div className="content">
                    <div className="not-found-page">
                         <h1>Error: 404 - <Link to="/admin-app">Go home</Link> </h1>
                    </div>
               </div>     
          )
     }
}

export default NotFoundPage;