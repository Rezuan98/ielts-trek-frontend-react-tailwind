import { useNavigate } from "react-router-dom";
import { Clock, FileText } from "lucide-react";

const ReadingTest = () => {
  const navigate = useNavigate();

  const tests = [
    {
      id: 1,
      title: "Cambridge IELTS 18 Test 1",
      difficulty: "Medium",
      description:
        "Reading passages about sustainable urban development, marine biology, and historical linguistics.",
      image: "/rt1.jpg",
    },
    {
      id: 2,
      title: "Cambridge IELTS 18 Test 2",
      difficulty: "Hard",
      description:
        "Topics include ancient civilizations, renewable energy technologies, and cognitive psychology.",
      image: "/rt2.jpg",
    },
    {
      id: 3,
      title: "Cambridge IELTS 17 Test 3",
      difficulty: "Medium",
      description:
        "Passages covering environmental conservation, technological innovation, and cultural anthropology.",
      image: "/rt3.jpg",
    },
    {
      id: 4,
      title: "Cambridge IELTS 17 Test 4",
      difficulty: "Medium-Hard",
      description:
        "Reading materials about space exploration, human psychology, and ancient architecture.",
      image: "/rt4.jpg",
    },
  ];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      "Medium-Hard": "bg-orange-100 text-orange-800",
      Hard: "bg-red-100 text-red-800",
    };
    return colors[difficulty] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          IELTS Reading Tests
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {test.title}
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                      test.difficulty
                    )}`}
                  >
                    {test.difficulty}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FileText size={16} />
                    <span>40 questions</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{test.description}</p>

                <button
                  onClick={() => navigate(`/reading-test/${test.id}`)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Start Test
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingTest;
