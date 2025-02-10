import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


function ApiChart() {
  
  const [curitiba,setCuritiba] = useState([])

  const [mdata, setMdata] = useState([])

  const [chartdata, setChartdata] = useState({
    labels: curitiba,
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
      labels: curitiba,
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

  useEffect(() => {
    axios.get(`https://cbu.uz/uz/arkhiv-kursov-valyut/json/`)
    .then((respons)=>{
        console.log(respons);
        setMdata(respons.data.map(item=>{
            return item.Rate

        }))
        setCuritiba(respons.data.map(item=>{
          return  item.Ccy
        }))

        
     })
  }, [])

 

  return (
    <div className='w-full mx-3 mt-10' >
      <Line data={chartdata} />
    </div>
  );
}

export default ApiChart;
