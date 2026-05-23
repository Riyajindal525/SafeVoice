import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

export default function NGOAnalytics() {
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://safevoice-d56i.onrender.com/api/analytics')
      .then(res => res.json())
      .then(data => {
        console.log('Analytics data:', data) // 👈 CHECK THIS
        setStats(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading analytics...</p>

  if (!stats.length) return <p>No analytics data available</p>

  const chartData = {
    labels: stats.map(item => item._id),     // 👈 CATEGORY NAMES
    datasets: [
      {
        label: 'Number of Complaints',
        data: stats.map(item => item.count), // 👈 COUNTS
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h2 style={{ textAlign: 'center' }}>
        Complaint Trends (Anonymous Data)
      </h2>
      <Bar data={chartData} options={options} />
    </div>
  )
}
