import React from 'react';
import spinnerImg from './assets/spinner.gif';
function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={spinnerImg}
        alt={<h2>Loading...</h2>}
      />
    </div>
  );
}

export default Spinner;
