import { useState } from "react";
import { CheckCircle } from "lucide-react";

const ReadingSample = () => {
  const [activeTab, setActiveTab] = useState("format");

  const samplePassages = [
    {
      title: "Impact of Remote Work on Urban Development",
      difficulty: "Medium",
      type: "Academic",
      content: `The rise of remote work has fundamentally altered urban development patterns in many cities worldwide. This shift, accelerated by recent global events, has challenged traditional assumptions about workplace locations and commuting patterns. Urban planners and real estate developers are now reimagining city spaces to accommodate this new reality.

      Studies indicate that the increase in remote work has led to significant changes in housing preferences. Many workers, no longer bound by commuting distances, are choosing to relocate to suburban or rural areas. This migration has implications for both urban cores and peripheral regions. City centers are seeing adaptations of office spaces into residential units, while smaller towns are experiencing increased development pressure.

      However, this transformation presents both opportunities and challenges. While reduced commuting may lower traffic congestion and environmental impact, it also affects local businesses that traditionally relied on office workers. Cities must now balance these competing interests while ensuring sustainable development.`,
      questions: [
        "What impact has remote work had on urban development?",
        "How are housing preferences changing?",
        "What are the challenges faced by city centers?",
      ],
    },
    {
      title: "Advancements in Renewable Energy Storage",
      difficulty: "Hard",
      type: "Academic",
      content: `Energy storage technology has become a crucial factor in the widespread adoption of renewable energy sources. Traditional batteries, while effective for short-term storage, face limitations in scaling up to grid-level requirements. Recent innovations in storage methods are addressing these challenges through various approaches.

      One promising development is the use of flow batteries, which store energy in liquid electrolytes. Unlike traditional solid-state batteries, flow batteries can be easily scaled by simply using larger storage tanks. This technology shows particular promise for industrial-scale energy storage applications.

      Additionally, researchers are exploring novel materials and methods, including solid-state batteries and hydrogen storage systems. These advancements could potentially revolutionize how we store and distribute renewable energy, making it more reliable and cost-effective.`,
      questions: [
        "Why is energy storage important for renewable energy?",
        "How do flow batteries differ from traditional batteries?",
        "What new storage methods are being researched?",
      ],
    },
  ];

  const testInfo = {
    format: {
      title: "Test Format",
      points: [
        "3 passages of increasing difficulty",
        "40 questions to complete in 60 minutes",
        "No extra time for transferring answers",
        "Each section contains 13-14 questions",
        "Texts range from descriptive to analytical",
        "Total word count: 2,150-2,750 words",
      ],
    },
    questionTypes: {
      title: "Question Types",
      points: [
        "Multiple choice",
        "Identifying information (True/False/Not Given)",
        "Identifying writer's views (Yes/No/Not Given)",
        "Matching information",
        "Matching headings",
        "Matching features",
        "Matching sentence endings",
        "Sentence completion",
        "Summary completion",
        "Note completion",
        "Table completion",
        "Flow-chart completion",
        "Diagram label completion",
      ],
    },
    tips: {
      title: "Reading Tips",
      points: [
        "Skim read first to understand the main idea",
        "Read questions carefully before detailed reading",
        "Don't spend too long on one question",
        "Pay attention to word limits in answers",
        "Practice time management regularly",
        "Look for keywords and synonyms",
        "Check spelling in your answers",
        "Transfer answers carefully to answer sheet",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          IELTS Reading: Sample Passages & Information
        </h1>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          {Object.keys(testInfo).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {testInfo[tab].title}
            </button>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {testInfo[activeTab].title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testInfo[activeTab].points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Passages */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Sample Passages
        </h2>
        <div className="space-y-8">
          {samplePassages.map((passage, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {passage.title}
                  </h3>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {passage.type}
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      {passage.difficulty}
                    </span>
                  </div>
                </div>

                <div className="prose max-w-none mb-6">
                  <p className="text-gray-700">{passage.content}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Sample Questions:
                  </h4>
                  <ul className="space-y-2">
                    {passage.questions.map((question, qIndex) => (
                      <li key={qIndex} className="text-gray-700">
                        {qIndex + 1}. {question}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingSample;
