import axios from "axios";
import React, { useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App_1() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
       // console.log(response.data)
      });
     
     addPost(post)
  }

  const addPost = (e) => {
    setPosts((prevPosts) => {
      return [...prevPosts, e]
    })
  }



  if (!post) return "No post!"

  return (
    <div>
      <div>Posts List</div>
      <ul>
        {
          posts.map(x => <li key={x.id}>{x.title}</li>)
        }
      </ul>

      <button onClick={createPost}>Create Post</button>
    </div>
  );
}