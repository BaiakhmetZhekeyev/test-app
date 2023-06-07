import React from "react";
import { Link } from "react-router-dom";

const Blogpage = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blog page</h1>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/blog/${post.id}`}
          style={{ display: "flex", color: "black", marginBottom: "5px" }}
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default Blogpage;
