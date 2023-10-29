//display students here, also call
'use client'

import React from 'react'
import { useEffect, useState } from 'react'

//get

function Studentdisplay() {
  const [studentData, setStudentData] = useState([])

  useEffect(() => {
    fetch("https://locahost:5000/student")
    .then(response =>response.json)
    .then(data => setStudentData(data))
  }, []);
  
  const addPost = (title) => {
    fetch("https://locahost:5000/student",{
    method: "POST",
    header: {"conent-type": "application/json"},
    body: JSON.stringify({title})
  })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    addPost(title)
    e.target.title.value = "" 
  }//post to localhost 5000

    return (
      <div className="">
        All students here
        <ul className='mt-4'>
          {studentData.map(post => {
            <li key={post.id} className='border p-2 flex justify-between items-center'>
              <div className='flex items-center'>
                <span>{post.firstName}</span>
                <span>{post.lastName}</span>
                <span>{post.birthday}</span>
                <span>{post.grade}</span>

              </div>
            </li>
          })}

        </ul>
      </div>
    )
  }

export default Studentdisplay