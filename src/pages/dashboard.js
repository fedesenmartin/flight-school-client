// pages/dashboard.js
'use client';  // Add this line

import { useState } from 'react';
import FlightRecords from '../components/flightsRecords';
import ResponsiveDrawer from '../components/DashboardLayout';

const Dashboard = () => {
  const [selected, setSelected] = useState('Flight Records');
  return (
    <ResponsiveDrawer selected={selected} setSelected={setSelected}>
    </ResponsiveDrawer>
  );
};

export default Dashboard;
