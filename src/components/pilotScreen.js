// App.js
import React from 'react';
import Pilots from './pilots';

export default function PilotsMainScreen({ setSelectedContent }) {
  return (
    <Pilots setSelectedContent={setSelectedContent} />
  );
}
