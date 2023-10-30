import React, { useEffect, useState } from 'react';

function StudentDisplay() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/student')
      .then((response) => response.json())
      .then((data) => setStudentData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="">
      <p>All students here</p>
      <ul className='mt-4'>
        {studentData.map((post) => (
          <li key={post.id} className='border p-2 flex justify-between items-center'>
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