import React from "react";

function BlogDetails({ blogs }) {
  return (
    <div className="v1">
      <h1>📝 Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>By {blog.author} | {blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
