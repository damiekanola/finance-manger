import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  
  // Register required components
  ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            '#A4C8AE',
            '#B8BED5',
            '#E5D6B8'
          ],
          borderRadius: 10,
        }]
      };

      const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
                boxWidth: 10,
                boxHeight: 10,

            }
          },
          tooltip: {
            enabled: true
          }
        }
      };
  return (
    <Doughnut data={data} options={options} />
  )
}

export default DoughnutChart
