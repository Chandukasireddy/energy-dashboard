// All import statements must come first:
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Your Dashboard component starts here:
function Dashboard() {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    // Use the local URL for now (update later with live URL)
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        console.log('Fetched data:', response.data); // Debug: check fetched data
        setEnergyData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const data = {
    labels: energyData.map(item => item.country),
    datasets: [
      {
        label: 'Energy Price',
        data: energyData.map(item => item.price),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Energy Demand',
        data: energyData.map(item => item.demand),
        backgroundColor: 'rgba(153,102,255,0.6)',
      },
    ],
  };

  return (
    <div>
      <h1>Energy Market Dashboard</h1>
      {energyData.length > 0 ? (
        // Adding a key helps if the chart needs to reinitialize
        <Bar key={JSON.stringify(data)} data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Dashboard;
