
import { Link } from "post application ";

export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", marginBottom: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>

      <p><strong>Tags:</strong> {post.tags.join(", ")}</p>

      <p>
        <strong>Author:</strong>{" "}
        <Link to={/author/${post.author}}>{post.author}</Link>
      </p>
    </div>
  );
}