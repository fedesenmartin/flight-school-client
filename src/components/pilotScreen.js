// App.js
import React from 'react';
import Pilots from './pilots';
import { useIsMobile } from "@/hooks/use-mobile"

export default function PilotsMainScreen({ setSelectedContent }) {
  return <Pilots setSelectedContent={setSelectedContent} />

  // const isMobile = useIsMobile()
  // if(!isMobile){
  //   return (
    
  //     <Pilots setSelectedContent={setSelectedContent} />
  //   );
  // }

}
