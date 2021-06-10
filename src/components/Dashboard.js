import React from 'react';
import Navigation from './Navigation';
import UserChart from './Chart';


class Dashboard extends React.Component {
     render() {
          return (
               <div className="content">
                    <Navigation />
                    <div className="main-container">
                         <div className="page-header">
                              <h1 className="page-title">Dashboard</h1>
                         </div>
                         <div className="chart-container">
                                 <UserChart />
                         </div>
                    </div>
               </div>
          )
     }
}

export default Dashboard;