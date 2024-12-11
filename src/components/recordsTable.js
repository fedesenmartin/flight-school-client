// App.js
import React from 'react';
import FlightRecords from './flightsRecords';

export default function FlightDataGridScreen({setSelectedContent}) {
  return (
    <FlightRecords setSelectedContent={setSelectedContent}/>

  );
}
