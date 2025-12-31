export default function Header({ search, setSearch }) {
  return (
    <header style={{ padding: "20px", background: "#f2f2f2" }}>
      <h2>Blog Posts</h2>
      <input
        type="text"
        placeholder="Search by title, description or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />
    </header>
  );
}
