import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const tests = [
  {
    id: 1,
    title: "Education & Employment",
    type: "Discussion Essay",
    question:
      "Some people believe that universities should focus on providing academic skills while others think that preparing students for employment is more important. Discuss both views and give your own opinion.",
    wordLimit: 250,
  },
  {
    id: 2,
    title: "Technology & Society",
    type: "Agree/Disagree Essay",
    question:
      "The widespread use of social media has led to a decline in face-to-face communication and negatively impacted social relationships. To what extent do you agree or disagree with this statement?",
    wordLimit: 250,
  },
  {
    id: 3,
    title: "Environment & Development",
    type: "Problem/Solution Essay",
    question:
      "In many cities, the quality of air is getting worse due to increasing urbanization and industrialization. What are the main causes of this problem and what measures can be taken to solve it?",
    wordLimit: 250,
  },
  {
    id: 4,
    title: "Culture & Tradition",
    type: "Advantages/Disadvantages Essay",
    question:
      "In many countries, traditional customs and festivals are being influenced by commercialization. What are the advantages and disadvantages of this development?",
    wordLimit: 250,
  },
];

const WritingTask2 = ({ onBack }) => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes
  const [isStarted, setIsStarted] = useState(false);
  const [essay, setEssay] = useState("");

  useEffect(() => {
    let timer;
    if (isStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStarted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;

  if (!selectedTest) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Select a Writing Task 2 Test
            </h1>

            <div className="grid gap-4">
              {tests.map((test) => (
                <div
                  key={test.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedTest(test)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600">
                        {test.title}
                      </h3>
                      <p className="text-gray-600">Type: {test.type}</p>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {test.question}
                      </p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ml-4">
                      Start Test
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={onBack}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {selectedTest.title}
              </h1>
              <p className="text-gray-600">Type: {selectedTest.type}</p>
            </div>
            <div className="text-xl font-mono bg-gray-100 px-4 py-2 rounded">
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Question:</h2>
              <p className="text-gray-700">{selectedTest.question}</p>
            </div>
          </div>

          {/* Writing Area */}
          <div className="mb-4">
            <textarea
              className="w-full h-96 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write your answer here..."
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              disabled={!isStarted || timeLeft === 0}
            />
          </div>

          {/* Word Count */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-600">
              Word Count: {wordCount} / {selectedTest.wordLimit}
            </div>
            {wordCount < selectedTest.wordLimit && (
              <div className="text-gray-600">
                Need {selectedTest.wordLimit - wordCount} more words
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-between">
            <button
              onClick={() => {
                setSelectedTest(null);
                setIsStarted(false);
                setTimeLeft(40 * 60);
                setEssay("");
              }}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Back to Tests
            </button>
            {!isStarted ? (
              <button
                onClick={() => setIsStarted(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Start Test
              </button>
            ) : (
              <button
                onClick={() => {
                  alert("Test submitted!");
                  setSelectedTest(null);
                  setIsStarted(false);
                  setTimeLeft(40 * 60);
                  setEssay("");
                }}
                disabled={timeLeft > 0 || wordCount < selectedTest.wordLimit}
                className={`px-6 py-2 rounded ${
                  timeLeft > 0 || wordCount < selectedTest.wordLimit
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                } text-white`}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

WritingTask2.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default WritingTask2;
