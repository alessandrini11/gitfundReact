import React from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';
const Bars = () => {
    const data = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        }
      ];
  return (
    <div>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <ComposedChart
          data={data}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Bars