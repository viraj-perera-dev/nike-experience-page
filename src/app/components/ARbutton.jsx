import React from 'react';
import { activateAR } from '@r2u/react-ar-components';
import Image from 'next/image';

const glb = `${window.location.origin}/models/nike_adapt.glb`;
const usdz = `${window.location.origin}/models/nike_adapt.usdz`;

function ARbutton() {
  const handleAR = () => {
    activateAR({ glb, usdz });
  };

  return (
    <button
      onClick={handleAR}
      className="cursor-pointer"
    >
      <Image src="/images/ar_icon.svg" alt="AR Icon" width={40} height={40} />
    </button>
  );
}

export default ARbutton;
