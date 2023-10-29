'use client'

// pages/index.js
import React from 'react';
import TabController from './tabcontroller';
import Studentdisplay from './studentdisplay';
import NewStudentForm from './studentform';

//All card are not appearing on the height do to the material in them, why

const tabs = [
  {
    label: 'Add student, click here',
    content: <div>
        Add the add student form component here
        <NewStudentForm></NewStudentForm>
        </div>,
  },
  {
    label: 'All students, click here',
    content: <div>
        Add the student information component here
        <Studentdisplay></Studentdisplay>
    </div>,
  },
];

export default function TabManager() {
  return (
    <div>
      <h1 className='bg-slate-700'>Student portal</h1>
      <br/>
      <TabController tabs={tabs} />
    </div>
  );
}
