//display students here, also call
'use client'

import React from 'react'

//get

export default function studentdisplay() {
  const [studentData, setStudentData] = React.useState([])

  useEffect(() => {
    fetch("https://locahost:5000/posts")
    .then(response =>response.json)
    .then(theData => setStudentData(theData))
  }, []);
  
  const addPost = (title) => {
    fetch("https://locahost:5000/posts",{
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
        <form>
          <input name="title"></input>
          <button></button>
        </form>
      </div>
    )
  }