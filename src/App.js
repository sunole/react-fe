import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts/";

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then(data => setPosts(data))
    console.log("this is log", posts[0]?.title)
  }, []);
  return (
    <div className="App">
      <h1>Posts</h1>
      <h2>...are here</h2>

      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
export default App