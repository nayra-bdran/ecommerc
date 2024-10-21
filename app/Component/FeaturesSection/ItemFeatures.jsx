import Image from 'next/image';
import React from 'react';
function ItemFeatures({ tittel, suptittel, img }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <Image src={img} alt={tittel}  className="w-16 h-16 " />
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="font-semibold text-xl">{tittel}</h3>
        <p className="text-md text-gray-500 font-medium">{suptittel}</p>
      </div>
    </div>
  );
}

export default ItemFeatures;
