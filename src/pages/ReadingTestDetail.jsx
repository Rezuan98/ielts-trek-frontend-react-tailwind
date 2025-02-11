import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

const ReadingTestDetail = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [currentPassage, setCurrentPassage] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [testStarted, setTestStarted] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Sample test data
  const testData = {
    id: testId,
    title: "Cambridge IELTS 18 Test 1",
    passages: [
      {
        id: 1,
        title: "Urban Development",
        content: `In the face of rapid urbanization and environmental challenges, cities worldwide are reimagining urban planning strategies. The traditional approach to city development, which often prioritized automobiles and segregated land use, is giving way to more sustainable and human-centered design principles.

        Modern urban planners are increasingly adopting a holistic approach that considers environmental impact, social equity, and economic viability. This shift has led to the emergence of concepts such as the "15-minute city," where residents can access essential services within a short walk or bike ride from their homes.

        The integration of green spaces has become a fundamental aspect of contemporary urban planning. These areas serve multiple purposes: they provide recreational spaces, improve air quality, reduce urban heat island effects, and support biodiversity.`,
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            text: "What is the main focus of modern urban planning according to the passage?",
            options: [
              "Prioritizing automobile infrastructure",
              "Maximizing real estate development",
              "Sustainable and human-centered design",
              "Historical preservation",
            ],
          },
          {
            id: "q2",
            type: "multiple-choice",
            text: "What is the purpose of the '15-minute city' concept?",
            options: [
              "To increase car usage",
              "To make services accessible by walking or cycling",
              "To reduce city population",
              "To increase property values",
            ],
          },
          {
            id: "q3",
            type: "multiple-choice",
            text: "Which of the following is NOT mentioned as a benefit of green spaces?",
            options: [
              "Improving air quality",
              "Providing recreational areas",
              "Increasing property values",
              "Supporting biodiversity",
            ],
          },
          {
            id: "q4",
            type: "true-false",
            text: "According to the passage, traditional urban planning prioritized public transportation.",
            options: ["True", "False"],
          },
        ],
      },
      {
        id: 2,
        title: "Marine Biology",
        content: `The deep ocean, despite its seemingly inhospitable conditions, hosts a remarkable diversity of life forms. These organisms have evolved unique adaptations to survive in an environment characterized by extreme pressure, darkness, and cold temperatures.

        Recent scientific expeditions have revealed previously unknown species and ecological relationships in deep-sea communities. Hydrothermal vents, in particular, have emerged as oases of life, supporting complex food webs based on chemosynthetic bacteria rather than photosynthesis.

        Many deep-sea organisms produce bioluminescence, creating their own light through chemical reactions. This adaptation serves various purposes, including attracting prey, finding mates, and deterring predators. Scientists estimate that approximately 90% of deep-sea marine life can produce some form of bioluminescence.`,
        questions: [
          {
            id: "q5",
            type: "multiple-choice",
            text: "What is the primary energy source for life around hydrothermal vents?",
            options: [
              "Sunlight",
              "Chemosynthetic bacteria",
              "Thermal energy",
              "Organic debris",
            ],
          },
          {
            id: "q6",
            type: "multiple-choice",
            text: "What percentage of deep-sea marine life can produce bioluminescence?",
            options: ["50%", "70%", "90%", "100%"],
          },
          {
            id: "q7",
            type: "multiple-choice",
            text: "Which of the following is NOT mentioned as a purpose of bioluminescence?",
            options: [
              "Attracting prey",
              "Finding mates",
              "Navigation",
              "Deterring predators",
            ],
          },
          {
            id: "q8",
            type: "true-false",
            text: "Deep-sea organisms have evolved to survive in high-pressure environments.",
            options: ["True", "False"],
          },
        ],
      },
    ],
  };

  useEffect(() => {
    if (testStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [testStarted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitTest = () => {
    // Here you would typically:
    // 1. Calculate the score
    // 2. Save the results
    // 3. Navigate to results page
    console.log("Submitted answers:", userAnswers);
    navigate("/results"); // Create a results page
  };

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              {testData.title}
            </h1>

            <div className="mb-8">
              <div className="flex items-center gap-3 text-gray-600 mb-4">
                <Clock size={20} />
                <span>Time allowed: 60 minutes</span>
              </div>

              <ul className="space-y-2 text-gray-600">
                <li>• Read each passage carefully</li>
                <li>• Answer all 40 questions</li>
                <li>• You can move between passages using the tabs</li>
                <li>• Submit your answers before the time runs out</li>
              </ul>
            </div>

            <button
              onClick={() => setTestStarted(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Timer and Navigation */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 sticky top-20 z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Time Remaining:</span>
              <span className="font-mono text-xl font-bold text-blue-600">
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="flex gap-2">
              {testData.passages.map((passage, index) => (
                <button
                  key={passage.id}
                  onClick={() => setCurrentPassage(index)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentPassage === index
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Passage {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Reading Passage */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {testData.passages[currentPassage].title}
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {testData.passages[currentPassage].content}
              </p>
            </div>
          </div>

          {/* Questions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Questions</h3>
            <div className="space-y-6">
              {testData.passages[currentPassage].questions.map((question) => (
                <div key={question.id} className="border-b pb-6">
                  <p className="font-medium text-gray-800 mb-4">
                    {question.text}
                  </p>
                  <div className="space-y-2">
                    {question.options.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={index}
                          checked={userAnswers[question.id] === index}
                          onChange={() =>
                            handleAnswerSelect(question.id, index)
                          }
                          className="form-radio text-blue-600"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Submit Test?
              </h4>
              <p className="text-gray-600 mb-6">
                Are you sure you want to submit your test? This action cannot be
                undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitTest}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Confirm Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingTestDetail;
