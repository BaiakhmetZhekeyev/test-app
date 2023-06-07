import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState([]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.org/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    console.log(post.id);
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <h1>{post.title}</h1>
      <span>{post.content}</span>
      <Link to={`/blog/${id}/edit`}>Edit this post</Link>
    </div>
  );
};

export default Singlepage;
