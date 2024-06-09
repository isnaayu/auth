import React, { useState } from 'react';

export const Modal = ({ visible, setVisible, content }) => {
 

  if (!visible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[400px] flex flex-col bg-white p-6 rounded'>
        <button
          className='text-black text-xl place-self-end'
          onClick={() => {
            setVisible(false);
          }}
        >
          X
        </button>
       {content}
      </div>
    </div>
  );
};
