'use client'

// pages/index.js
import React from 'react';
//import Tab from '../components/tabcomponent';
import TabController from './tabcontroller';
import Tab from './tabcomponent';

//All card are not appearing on the height do to the material in them, why

const tabs = [
  {
    label: 'Add student, click here',
    content: <div>
        Add the add student form component here
        </div>,
  },
  {
    label: 'All students, clcik here',
    content: <div>
        Add the student information component here
    </div>,
  },
];

export default function TabManager() {
  return (
    <div>
      <h1 class="" className='bg-slate-700'>Student portal</h1>
      <br/>
      <TabController tabs={tabs} />
    </div>
  );
}
