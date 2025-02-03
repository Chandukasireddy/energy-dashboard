// All imports must be at the top
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [energyData, setEnergyData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    // Update this URL to match your Codespaces backend preview URL:
    // (Replace with your verified backend URL. For example:)
    axios.get('https://organic-funicular-gv7rjpq754pfj4r-5000.app.github.dev/api/data')
      .then(response => {
        console.log('Fetched data:', response.data);
        setEnergyData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Prepare the chart data
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
        // The key forces the Bar component to reinitialize when data changes (helps with canvas issues)
        <Bar key={JSON.stringify(data)} data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Dashboard;
