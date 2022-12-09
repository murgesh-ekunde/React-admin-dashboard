import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

function Chart() {
    const garphData = [
        {
          month: "Jan",
          earnings: 0,
        },
        {
          month: "Feb",
          earnings: 10000,
        },
        {
          month: "Mar",
          earnings: 5000,
        },
        {
          month: "Apr",
          earnings: 15000,
        },
        {
          month: "May",
          earnings: 10000,
        },
        {
          month: "Jun",
          earnings: 20000,
        },
        {
          month: "Jul",
          earnings: 15000,
        },
        {
          month: "Aug",
          earnings: 25000,
        },
        {
          month: "Sep",
          earnings: 20000,
        },
        {
          month: "Oct",
          earnings: 30000,
        },
        {
          month: "Nov",
          earnings: 25000,
        },
        {
          month: "Dec",
          earnings: 40000,
        },
      ];
    
      return (
        <>
          <div styles={{ width: "100%", height: "350" }}>
            <ResponsiveContainer>
              <AreaChart data={garphData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="earnings"
                  stroke="#8884d8"
                  fill="red"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )
}

export default Chart