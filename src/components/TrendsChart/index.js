import React from 'react';

import { getECPM, mediaQueryMobile } from '../../utils/common';

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

import './styles.css';

const getDataSource = data => {
  return (data || []).map(obj => ({
    timestamp: obj.timestamp,
    eCPM: getECPM(obj.revenue, obj.impressions),
    uv: getECPM(obj.revenue, obj.impressions),
    name: obj.timestamp,
  }));
};

export const TrendsChart = ({ data }) => {
  if (mediaQueryMobile()) {
    return (
      <LineChart
        width={300}
        height={250}
        data={getDataSource(data)}
        margin={{ top: 5, bottom: 5, left: -17 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis dataKey="eCPM" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  } else {
    return (
      <LineChart
        width={730}
        height={250}
        data={getDataSource(data)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis dataKey="eCPM" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
};
