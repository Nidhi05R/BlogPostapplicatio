import { useState } from "react";
import posts from "../data/posts.json";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <div style={{ padding: "20px" }}>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
