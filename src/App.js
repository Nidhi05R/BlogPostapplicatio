import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthorPage from "./pages/AuthorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author/:name" element={<AuthorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
