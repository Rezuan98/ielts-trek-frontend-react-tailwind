import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WritingSamplesPage from "./pages/WritingSamplesPage";
import WritingTask2Page from "./pages/WritingTask2Page";
import WritingTestPage from "./pages/WritingTestPage";
import ReadingTests from "./pages/ReadingTest";
import ReadingTestDetail from "./pages/ReadingTestDetail";
import ReadingSample from "./pages/ReadingSample";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          {/* Core Routes */}
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Writing Routes */}
          <Route path="/writing-task2-samples" element={<WritingTask2Page />} />
          <Route
            path="/writing-task1-samples"
            element={<WritingSamplesPage />}
          />
          <Route path="/writing-test" element={<WritingTestPage />} />

          {/* Reading Routes - Using WritingTestPage as placeholder */}
          <Route path="/reading-test" element={<ReadingTests />} />
          <Route path="/reading-test/:testId" element={<ReadingTestDetail />} />
          <Route path="/reading-tests" element={<ReadingTests />} />
          <Route path="/reading-samples" element={<ReadingSample />} />

          {/* Speaking Routes - Using WritingTestPage as placeholder */}
          <Route path="/speaking-test" element={<WritingTestPage />} />
          <Route path="/speaking-samples" element={<WritingSamplesPage />} />

          {/* Listening Routes - Using WritingTestPage as placeholder */}
          <Route path="/listening-test" element={<WritingTestPage />} />
          <Route path="/listening-samples" element={<WritingSamplesPage />} />

          {/* Other Routes */}
          <Route path="/ai-practice" element={<WritingTestPage />} />
          <Route path="/tools" element={<WritingTestPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
