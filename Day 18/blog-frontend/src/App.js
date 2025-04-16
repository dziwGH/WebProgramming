import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title:'', body:''});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
    .then(res=> setPosts(res.data))
    .catch(err=> console.error("Error fetching post:", err));
  }, []);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      axios.put(`http://localhost:5000/posts/${editId}`, form)
      .then(res => {
        setPosts(posts.map(post => post._id === editId ? res.data : post));
        setForm({ title:'', body:''});
        setEditId(null);
      })
      .catch(err => console.error("Error updating the post:", err));
    } else {
      axios.post('http://localhost:5000/posts', form)
      .then(res=> {
        setPosts([...posts, res.data]);
        setForm({title:'', body:''});
      })
      .catch(err => console.error("Error submitting the post:", err));
    }
  
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/posts/${id}`)
    .then(() => {
      setPosts(posts.filter(post => post._id !== id));
    })
    .catch(err => console.error("Error deleting the post:", err));
  };

  const handleEdit = (post) => {
    setForm({ title: post.title, body: post.body});
    setEditId(post._id);
  };

  const handleCancelEdit = () => {
    setForm({title: '', body: ''});
    setEditId(null);
  };

  return (
    <div style={{padding: '20px', maxWidth: '600px',
      margin: 'auto'}}>
        <h2>{editId ? 'Edit Post' : 'Create a Blog Post'}</h2>
        <form onSubmit={handleSubmit} style={{marginBottom:'2rem'}}>
          <input
          name = "title"
          placeholder = "Post Title"
          value={form.title}
          onChange={handleChange}
          style = {{width: '100%', padding: '10px', marginBottom: '10px'}}/>
          
          <textarea
          name ="body"
          placeholder="Post Body"
          value={form.body}
          onChange={handleChange}
          style={{width:'100%', padding: '10px', height: '100px', marginBottom:'10px;'}}/>

          <button type="submit" style={{padding: '10px 20px', marginRight: '10px'}}>{editId ? 'Update Post' : 'Submit Post'}</button>

          {editId && (
            <button type="button" onClick={handleCancelEdit} style={{padding: '10px 20px'}}>Cancel</button>
          )}


        </form>

        <h2>Blog Posts</h2>

        {posts.map(post => (
          <div key={post._id} style={{border:'1px solid #ccc', padding:'10px', marginBottom: '15px'}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>

          <button onClick={() => handleEdit(post)} style={{padding: '10px 20px', marginRight: '10px'}}>Edit</button>

          <button onClick={() => handleDelete(post._id)} style={{padding: '10px 20px'}}>Delete</button>
          </div>
          ))}
      </div>
  );

}

export default App;