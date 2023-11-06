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
    <div className="text-lg">
      <p>All students</p>
      <ul className='mt-4 mb-16'>
        {studentData.map((post) => (
          <li key={post.id} className='bg-gray-500 border p-2 flex justify-between items-center'>
            <div className='flex items-center'>
              <span>{post.firstName}</span>
              <span>{post.lastName}</span>
              <span>{post.birthday}</span>
              <span>{post.grade}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDisplay;