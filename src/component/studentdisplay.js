import React, { useEffect, useState } from 'react';

function StudentDisplay() {
  const [studentData, setStudentData] = useState([]);

  //This function get the data form the local host, and then save it to studentData
  useEffect(() => {
    fetch('http://localhost:5000/student')
      .then((response) => response.json())
      .then((data) => setStudentData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  //This function use map as a for loop to display every student information
  return (
    <div className="">
      <p>All students</p>
      <ul className='mt-4'>
        <table>
          <tr>
          <th>First name </th>
          <th>Last name </th>
          <th>Birthday </th>
          <th>Grade</th>
          </tr>
        {studentData.map((post) => (
            <tr key={post.id} className='flex items-center'>
              <td>{post.firstName}</td>
              <td>{post.lastName}</td>
              <td>{post.birthday}</td>
              <td>{post.grade}</td>
            </tr>
        ))}
        </table>
      </ul>
    </div>
  );
}

export default StudentDisplay;