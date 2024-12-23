import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Sales ($)',
            data: [300, 500, 100, 400, 200, 700],
            backgroundColor: [
              '#E6EFEA',
             
            ],

            borderRadius: 10,
            hoverBackgroundColor: "#4C6C5A"
          },
        ],
      };
    
      // Define chart options
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false, // or 'bottom'
          },
          title: {
            display: false,
            text: 'Monthly Sales Data',
          },
        },
        scales: {
            y: {
              grid: {
                drawTicks: true,
                drawBorder: false, // Keep ticks while customizing gridlines
              },
              ticks: {
                stepSize: 200, // Adjust this to control the spacing between gridlines
                min: 0, // Set the minimum value
                max: 700, // Set the maximum value
              },
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                }
            }
          },
      };
  return (
   <Bar data={data} options={options} />
  )
}

export default BarChart
