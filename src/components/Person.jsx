import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Person = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`,)
            .then(res => {
                setPosts(res.data)
            })
               .catch(err => {
                   alert('there was no error')
               })
            }, [])
    
    return (
        <div className="container">
            <h1 className="text-center my-4">This is a Dummy Post List</h1>
            <ul>
            <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
            {posts.map ((post) => (
                <tr key={post.userId}>
                    <td className='fw-bold'>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            ))}
            </tbody>
            </table>
            </ul>
        </div>
        )
      }

export default Person;
