import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const UserChart = () => {
     const [loginsData, setLoginsData] = useState({});
     const [timeData, setTimeData] = useState({});
     const [interviewsData, setInterviewsData] = useState({});

     const chart = () => {

          setLoginsData({
               labels: ['January', 'February', 'March', 'April'],
               datasets: [
                    {
                         label: 'Number of unique logins',
                         data: [357, 531, 512, 787],
                         backgroundColor: [
                              'red'
                         ],
                         borderWidth: 4
                    }
               ]
          });

          setTimeData({
               labels: ['January', 'February', 'March', 'April'],
               datasets: [
                    {
                         label: 'Time spent in app',
                         data: [236, 543, 456, 253],
                         backgroundColor: [
                              'lightblue'
                         ],
                         borderWidth: 4
                    }
               ]
          });
     
          setInterviewsData({
               labels: ['January', 'February', 'March', 'April'],
               datasets: [
                    {
                         label: 'Number of interviews',
                         data: [78, 110, 115, 131],
                         backgroundColor: [
                              'green'
                         ],
                         borderWidth: 4
                    }
               ]
          });
     }

     useEffect(() => {
          chart()
     }, [])

     return (
          <div className="charts-container">
               <div className="chart chart--logins">
                    <Line data={loginsData} />
               </div>
               <div className="chart chart--time">
                    <Line data={timeData} />
               </div>

               <div className="chart chart--interviews">
                    <Bar data={interviewsData} />
               </div>
          </div>
     )
}

export default UserChart;