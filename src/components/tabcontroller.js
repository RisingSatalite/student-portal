'use client'

// components/TabController.js
import React, { useState } from 'react';

function TabController({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  
  return (
    <span class="" className=''>
      <div class="" className="tabs">
        {tabs.map((tab, index) => (
          <button
            type="button"
            class="p-1 border-solid inline bg-orange-200"//Add classes to both class and classname
            key={index}
            onClick={() => handleTabClick(index)}
            className={`p-1 border-solid inline bg-orange-200 ${activeTab === index ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div class="" className="h-48 p-9 m-1 tab-content">{tabs[activeTab].content}</div>
    </span>
  );
}

export default TabController;
