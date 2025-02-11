import { useState } from "react";
import WritingTask1 from "../components/WritingComponents/WritingTask1";
import WritingTask2 from "../components/WritingComponents/WritingTask2";

const WritingTestPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  if (selectedTask) {
    return selectedTask === "task1" ? (
      <WritingTask1 onBack={() => setSelectedTask(null)} />
    ) : (
      <WritingTask2 onBack={() => setSelectedTask(null)} />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          IELTS Writing Test
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Task 1 Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Academic Task 1
              </h2>
              <p className="text-gray-600 mb-4">
                Analyze and describe visual information (graphs, charts,
                diagrams, etc.)
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Time: 20 minutes</li>
                <li>• Word count: Minimum 150 words</li>
                <li>• Data analysis and description</li>
              </ul>
              <button
                onClick={() => setSelectedTask("task1")}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Task 1
              </button>
            </div>
          </div>

          {/* Task 2 Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Task 2</h2>
              <p className="text-gray-600 mb-4">
                Write an essay in response to a point of view, argument, or
                problem
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Time: 40 minutes</li>
                <li>• Word count: Minimum 250 words</li>
                <li>• Essay writing</li>
              </ul>
              <button
                onClick={() => setSelectedTask("task2")}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Task 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingTestPage;
