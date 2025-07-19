import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error("Network response not ok");
        return response.json();
      })
      .then((data) => {
        this.setState({ posts: data });
        toast.success("Posts loaded successfully!");
      })
      .catch((error) => {
        this.setState({ hasError: true });
        toast.error("Error fetching posts: " + error.message);
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    toast.error("Component Error: " + error.toString());
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <h1>Posts</h1>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;