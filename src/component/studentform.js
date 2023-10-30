//create form to add student here
import React from 'react'
import { useEffect, useState } from 'react'

const NewStudentForm = () => {
    const [registrationForm, setRegistrationForm] = React.useState([])

    //sumbit the data to localhost:5000 db.json
    const addStudent = (firstName, lastName, birthday, grade) =>{
        fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({firstName, lastName, birthday, grade})
        })
    }

    //This fucniton is call when the submit button is pressed, need to add data verification here
    const sumbitForm = (e) =>{
        e.preventDefault()
        //It take the inputs and send to addStudent() to sumbit the input
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const birthday = e.target.birthday.value;
        const grade = e.target.grade.value;
        addStudent(firstName, lastName, birthday, grade)

        //once the submit button has been press, it clear the inputs
        e.target.firstName.value = '';
        e.target.lastName.value = '';
        e.target.birthday.value = '';
        e.target.grade.value = '';
    }

    //Return a standard from to take student information
    return (
        <form className="text-black" onSubmit={sumbitForm}>
            <input className='border p-2 text-black' type='text' name='firstName' placeholder="Enter student's first name here"></input>
            <input className='border p-2 text-black' type='text' name='lastName' placeholder="Enter student's last name here"></input>
            <input className='border p-2 text-black' type='date' name='birthday' placeholder="Enter student's birthday here"></input>
            <input className='border p-2 text-black' type='number' name='grade' placeholder="Enter student's grade here"></input>
            <button className='bg-blue-500 text-white py-1 px-2 rounded' type='submit'>Submit data</button>
        </form>
    )
}
export default NewStudentForm