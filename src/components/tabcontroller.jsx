'use client'
// components/TabController.js
import React, { useState } from 'react';

function TabController({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <span className=''>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleTabClick(index)}
            className={`p-9 m-1 inline bg-orange-700 padd ${activeTab === index ? 'active' : 'bg-orange-800'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="h-48 p-9 m-1 tab-content">{tabs[activeTab].content}</div>
    </span>
  );
}

export default TabController;
