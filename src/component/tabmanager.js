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
    label: <div>Add student, click here</div>,
    //This displays the form to enter new student
    content: <div>
        Add the add student form component here
        <NewStudentForm></NewStudentForm>
        </div>,
  },
  {
    label: <div>All students, click here</div>,
    //This display the student information
    content: <div>
        It takes a secound to load
        <Studentdisplay></Studentdisplay>
    </div>,
  },
];

//This compoent take the tabs list and input into the TabController to be displayed
export default function TabManager() {
  return (
    <div>
      <h1 className='bg-slate-700'>Student portal</h1>
      <br/>
      <TabController tabs={tabs} />
    </div>
  );
}
