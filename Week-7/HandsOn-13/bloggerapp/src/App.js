import { books, blogs, courses } from "./data";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import "./App.css"; 

function App() {
  return (
    <div className="container">
      <div className="box">
        <CourseDetails courses={courses} />
      </div>
      <div className="box">
        <BookDetails books={books} />
      </div>
      <div className="box">
        <BlogDetails blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
