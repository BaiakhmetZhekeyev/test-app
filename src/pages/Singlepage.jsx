import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.org/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    console.log(post.id);
  }, [id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <span>{post.content}</span>
      <Link style={{ display: "block", color: "blue" }} to={`/blog/${id}/edit`}>
        Edit this post
      </Link>
    </div>
  );
};

export default Singlepage;
