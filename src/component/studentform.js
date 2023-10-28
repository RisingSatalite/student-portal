//create form to add student here
import React from 'react'
import { useEffec, useState } from 'react'

const NewStudentForm = () => {
    const [registrationForm, setRegistrationForm] = React.useState([])

    const addStudent = (firstName, lastName, birthday, grade) =>{
        fetch('http://localhost:5000/students', {
            method: 'POST',
            header: {'content-type': 'application/json'},
            body: JSON.stringify({firstName, lastName, birthday, grade})
        })
    }

    const sumbitFOrm = (e) =>{
        e.preventDefault()
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const birthday = e.target.birthday.value;
        const grade = e.target.grade.value;
        addStudent(firstName, lastName, birthday, grade)
        e.target.firstName.value = '';
        e.target.lastName.value = '';
        e.target.birthday.value = '';
        e.target.grade.value = '';
    }

    return (
        <form>
            <input className='border p-2' type='text' name='firstName' placeholder="Enter student's first name here"></input>
            <input className='border p-2' type='text' name='lastName' placeholder="Enter student's last name here"></input>
            <input className='border p-2' type='date' name='birthday' placeholder="Enter student's birthday here"></input>
            <input className='border p-2' type='number' name='grade' placeholder="Enter student's grade here"></input>
            <button className='bg-blue-500 text-white py-1 px-2 rounded' type='submit'>Submit data</button>
        </form>
    )

}
export default NewStudentForm