import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WritingSamplesPage from "./pages/WritingSamplesPage";
import WritingTask2Page from "./pages/WritingTask2Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/writing-samples-page" element={<WritingSamplePage />} /> */}
          <Route
            path="/writing-task1-samples"
            element={<WritingSamplesPage />}
          />
          <Route path="/writing-task2-samples" element={<WritingTask2Page />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
