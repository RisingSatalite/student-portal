// pages/index.js
import React from 'react';
//import Tab from '../components/tabcomponent';
import TabController from './tabcontroller';
import Tab from './tabcomponent';

//All card are not appearing on the height do to the material in them, why

const tabs = [
  {
    label: 'Add student',
    content: <div>
        Add the add student form component here
        </div>,
  },
  {
    label: 'All students',
    content: <div>
        Add the student information component here
    </div>,
  },
];

export default function TabManager() {
  return (
    <div>
      <h1 class="" className='bg-slate-700'>Conversion.com, to enter an array of data, just enter the numbers seperated with spaces, ex"12 12 15 17"</h1>
      <TabController tabs={tabs} />
    </div>
  );
}
