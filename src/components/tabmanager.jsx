'use client'

// pages/index.js
import React from 'react';
import TabController from './tabcontroller';
import Studentdisplay from './studentdisplay';
import NewStudentForm from './studentform';

//This is a tab layout that I use, the label will be converted into the navabar and depending on what is press, which show eithor the form or the students
const tabs = [
  {
    //FInd how to change the colour for navbar
    label: (
      <div className='text-lg'>
      Add student, click here
      </div>
    ),
    //This displays the form to enter new student
    content: <div className='border text-lg bg-slate-600 font-bold mx-9'>
        <NewStudentForm></NewStudentForm>
        </div>,
  },
  {
    label: 'All students, click here',
    //This display the student information
    content: <div className='p-4 m-4 bg-green-400'> 
        It takes a second to load
        <Studentdisplay></Studentdisplay>
    </div>,
  },
];

//This compoent take the tabs list and input into the TabController to be displayed
export default function TabManager() {
  return (
    <div className='bg-slate-700 border-l-emerald-500 text-slate-200 text-center text-xl font-bold p-2'>
      <h1 >Student portal</h1>
      <br/>
      <TabController tabs={tabs} />
    </div>
  );
}
