import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


function MyChart() {

  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'];

  const [mdata, setMdata] = useState([])

  const [chartdata, setChartdata] = useState({
    labels: months,
    datasets: [
      {
        label: 'Ma’lumotlar',
        data: mdata,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  })
  useEffect(() => {
    setChartdata({
      labels: months,
      datasets: [
        {
          label: 'Ma’lumotlar',
          data: mdata,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ]
    }
    )

  }, [mdata]);

  function handleMdata(index, value) {
    let copied = [...mdata];
    copied[index] = Number(value);

    setMdata(copied);
  }

  return (
    <div >
      <div className='flex gap-3 mt-10'>
        {
          months.map((month, index) => {
            return (
              <div key={index} className='w-1/6 p-2  border '>
                <p >{month}</p>
                <input className='border p-2' type="text" value={mdata.index} onChange={(e) => handleMdata(index, e.target.value)} />
              </div>
            )
          })
        }
      </div>
      <div className='w-1/2 mx-auto mt-10'>
        <Line data={chartdata} />
      </div>
    </div>
  );
}

export default MyChart;
