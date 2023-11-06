'use client'
import { useEffect, useState } from 'react'

//This is an example of how to do it

const Post = () => {
    const [posts, setPosts] = useState([])
 
    useEffect(() => {
        fetch('http://localhost:5000/posts')
          .then(response => response.json())
          .then(data => setPosts(data));
      }, []);
 
      const addPost = (title) => {
        fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({title})
        })
        .then(resposne => response.json())
        .then(newPost => setPosts(prevPost => [...prePosts, newPosts]))
      }

      const updatePost = (id, title) => {
        fetch(`http://localhost:5000/posts/${id}`, {
          methiod: "PUT",
          headers: {"cpntent-type": "application/json",
        body: JSON.stringify({title})}
      }
        .then(() =>
        setPosts(prePosts = prevPosts.map(post => post.id === id ? {...post, title}:post))
          .setEditingID(null)
          .setEditingTitle(""))
        )
      }

      const deletePost = (id) =>{
        fetch(`http://localhost:5000/posts/${id}`),{
          method: "DELETE",
        }
      }

const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    addPost(title)
    e.target.title.value = ''
}
 
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Posts</h1>
        <form onSubmit={handleSubmit}>
            <input className='border p-2 mr-2' type='text' name='title' placeholder='Post Title'/>
            <button className='bg-blue-500 text-white py-1 px-2 rounded' type='submit'>Add Post</button>
        </form>
        <ul className='mt-4'>
          

        </ul>
 
    </div>
  )
}
 
export default Post