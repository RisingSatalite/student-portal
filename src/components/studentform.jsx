import React from 'react';
const NewStudentForm = () => {
    const [registrationForm, setRegistrationForm] = React.useState([]);

    // Get today's date in the format YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    const addStudent = (firstName, lastName, birthday, grade) => {
        fetch('/api/db', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({firstName, lastName, birthday, grade})
        });
    }

    const validateName = (e) => {
        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(e.target.value)) {
            e.target.value = e.target.value.substring(0, e.target.value.length - 1);
        }
    };

    const sumbitForm = (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value.trim();
        const lastName = e.target.lastName.value.trim();
        const birthday = e.target.birthday.value;
        const grade = parseInt(e.target.grade.value);

        const nameRegex = /^[A-Za-z\s]+$/;

        // Data validation
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName) || !birthday || isNaN(grade) || grade < 0 || grade > 100) {
            alert("Please fill out all fields correctly.");
            return;
        }

        addStudent(firstName, lastName, birthday, grade);

        e.target.firstName.value = '';
        e.target.lastName.value = '';
        e.target.birthday.value = '';
        e.target.grade.value = '';
    }

    return (
        <form className="text-black justify-center text-center" onSubmit={sumbitForm}>
            <input className='border p-3 m-1 text-black' type='text' name='firstName' placeholder="First Name" onInput={validateName}></input>
            <input className='border p-3 m-1 text-black' type='text' name='lastName' placeholder="Last Name" onInput={validateName}></input>
            <input className='border p-3 m-1 text-black' type='date' name='birthday' max={today} placeholder="Date of Birth"></input>
            <input className='border p-3 m-1 text-black' type='number' name='grade' placeholder="Grade" min="0" max="100"></input>
            <button className='bg-blue-500 text-white py-1 px-2 rounded' type='submit'>Submit data</button>
        </form>
    )
}

export default NewStudentForm;
