import { <linkhome className="js"></linkhome> } from "pages";
import posts from "../data/posts.json";

export default function AuthorPage() {
  const { name } = useParams();

  const authorPosts = posts.filter((post) => post.author === name);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts by {name}</h2>
      <Link to="\nodebox\src\pages\author.js">Back to Home</Link>

      {authorPosts.map((post) => (
        <div key={post.id} style={{ marginTop: "15px" }}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
