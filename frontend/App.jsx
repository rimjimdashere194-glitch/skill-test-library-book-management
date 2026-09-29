import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    bookTitle: "",
    authorName: "",
    isbn: "",
    category: "",
    publicationYear: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/books", formData);

      setMessage("📚 Book added successfully!");

      setFormData({
        bookTitle: "",
        authorName: "",
        isbn: "",
        category: "",
        publicationYear: "",
      });
    } catch (error) {
      setMessage("❌ Failed to add book.");
      console.error(error);
    }
  };

  return (
    <div className="page">
      <div className="library-card">
        <h1>📚 Library Book Management</h1>
        <p className="subtitle">Add a new book to the library</p>

        <form onSubmit={handleSubmit}>
          <label>Book Title</label>
          <input
            name="bookTitle"
            placeholder="Enter book title"
            value={formData.bookTitle}
            onChange={handleChange}
            required
          />

          <label>Author Name</label>
          <input
            name="authorName"
            placeholder="Enter author name"
            value={formData.authorName}
            onChange={handleChange}
            required
          />

          <label>ISBN</label>
          <input
            name="isbn"
            placeholder="Enter ISBN"
            value={formData.isbn}
            onChange={handleChange}
            required
          />

          <label>Category</label>
          <input
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <label>Publication Year</label>
          <input
            name="publicationYear"
            type="number"
            placeholder="Enter publication year"
            value={formData.publicationYear}
            onChange={handleChange}
            required
          />

          <button type="submit">➕ Add Book</button>
        </form>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default App;