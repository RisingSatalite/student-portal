'use client'

// components/Tab.js
import React from 'react';



function Tab({ label, content }) {
  return (
    <div>
      <h2 className='bg-blue-300'>{label}</h2>
      <div class="min-w-0">{content}</div>
    </div>
  );
}

export default Tab;
