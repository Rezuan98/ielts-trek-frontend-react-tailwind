import { useState } from "react";
import { AlertTriangle, CheckCircle, Star, BookOpen } from "lucide-react";

const task2Categories = [
  { id: "all", label: "All" },
  { id: "discussion", label: "Discussion" },
  { id: "opinion", label: "Opinion" },
  { id: "problem-solution", label: "Problem & Solution" },
  { id: "advantages-disadvantages", label: "Advantages & Disadvantages" },
  { id: "double-question", label: "Double Question" },
  { id: "agree-disagree", label: "Agree/Disagree" },
  { id: "cause-solution", label: "Causes & Solutions" },
];

const writingSamples = [
  {
    id: 1,
    title: "Technology's Impact on Traditional Skills",
    description:
      "Discussion of how modern technology affects traditional craftmanship",
    type: "discussion",
    score: 9.0,
    views: "4.2k",
    date: "2024-02-01",
    image: "/lt4.png",
    tags: ["Discussion", "Technology", "Band 9"],
    question:
      "Some people think that the development of technology has led to the loss of traditional skills. To what extent do you agree or disagree with this statement?",
    answer: `The rapid advancement of technology has undoubtedly transformed various aspects of our lives, including traditional crafts and skills. This essay will discuss both perspectives on this issue.

On one hand, technology has certainly contributed to the decline of certain traditional skills. Many manual processes that were once essential have been automated, reducing the need for traditional craftspeople. For example, machine-made furniture has largely replaced hand-crafted pieces, and digital printing has diminished the demand for traditional calligraphy. This shift has led to fewer people learning these time-honored skills, as they may not see them as economically viable career options.

However, I believe that technology has not entirely eroded traditional skills but rather transformed how they are practiced and preserved. Digital platforms now enable artisans to reach global markets and share their craft with wider audiences. Additionally, many traditional skills have been adapted and integrated with modern technology, creating innovative hybrid forms of craftsmanship. For instance, many contemporary jewelry designers combine traditional metalworking techniques with 3D printing technology.

Furthermore, there has been a recent resurgence in interest in traditional crafts, partly as a reaction to mass production. Many people now actively seek out handmade, artisanal products, valuing their uniqueness and cultural significance. Technology has actually helped preserve traditional skills by documenting techniques through videos and online tutorials, making them more accessible to future generations.

In conclusion, while technology has changed the landscape of traditional skills, I disagree that it has led to their complete loss. Instead, it has created new opportunities for their preservation and evolution. The key lies in finding a balance between embracing technological advancement and maintaining valuable traditional practices.`,
    keyPoints: [
      "Clear position stated",
      "Well-structured paragraphs",
      "Relevant examples",
      "Balanced discussion",
      "Strong conclusion",
    ],
  },
  {
    id: 2,
    title: "Environmental Protection vs Economic Growth",
    description: "Analysis of the balance between environment and economy",
    type: "opinion",
    score: 8.5,
    views: "3.7k",
    date: "2024-01-28",
    image: "/lt4.png",
    tags: ["Opinion", "Environment", "Band 8.5"],
    question:
      "Some people believe that environmental problems should be solved by governments, while others think individuals should take responsibility. Discuss both views and give your opinion.",
    answer:
      "The question of who should bear the primary responsibility for addressing environmental issues...",
    keyPoints: [
      "Clear thesis statement",
      "Good use of linking words",
      "Specific examples provided",
      "Logical flow",
      "Personal opinion well-supported",
    ],
  },
  {
    id: 3,
    title: "Working from Home: Advantages and Disadvantages",
    description: "Comprehensive analysis of remote work benefits and drawbacks",
    type: "advantages-disadvantages",
    score: 9.0,
    views: "3.1k",
    date: "2024-01-25",
    image: "/lt4.png",
    tags: ["Advantages/Disadvantages", "Work", "Band 9"],
    question:
      "Working from home has become increasingly common. Discuss the advantages and disadvantages of this trend.",
    answer: "The trend of working from home has gained significant momentum...",
    keyPoints: [
      "Clear organization",
      "Balanced analysis",
      "Relevant examples",
      "Professional vocabulary",
      "Effective conclusion",
    ],
  },
  {
    id: 4,
    title: "Urban Transportation Solutions",
    description: "Analysis of city traffic problems and potential solutions",
    type: "problem-solution",
    score: 8.5,
    views: "2.7k",
    date: "2024-01-22",
    image: "/lt4.png",
    tags: ["Problem/Solution", "Urban Planning", "Band 8.5"],
    question:
      "Traffic congestion is becoming a major problem in many cities. Suggest some solutions to this problem.",
    answer:
      "Urban traffic congestion has become an increasingly pressing issue...",
    keyPoints: [
      "Problem clearly identified",
      "Multiple solutions proposed",
      "Practical examples",
      "Coherent structure",
      "Feasible recommendations",
    ],
  },
];

const WritingTask2Page = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [selectedSample, setSelectedSample] = useState(null);

  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
    setSelectedSample(null);
  };

  const filteredSamples = writingSamples.filter(
    (sample) => currentCategory === "all" || sample.type === currentCategory
  );

  const renderSampleCard = (sample) => (
    <div
      key={sample.id}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedSample(sample)}
    >
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative p-4 flex justify-center">
          <div className="h-32 w-32 rounded-lg overflow-hidden border-2 border-blue-200">
            <img
              src={sample.image}
              alt={sample.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-6 right-6 bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
            Band {sample.score}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-blue-800 hover:text-orange-500 transition-colors line-clamp-2">
              {sample.title}
            </h3>
            <span className="text-gray-500 text-sm flex items-center gap-1 ml-2 whitespace-nowrap">
              <BookOpen size={14} />
              {sample.views}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {sample.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-3">
            {sample.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-auto text-xs">
            <div className="flex gap-2">
              <span className="bg-green-50 text-green-600 px-2 py-1 rounded-md flex items-center gap-1">
                <CheckCircle size={12} />
                Verified
              </span>
              <span className="bg-yellow-50 text-yellow-600 px-2 py-1 rounded-md flex items-center gap-1">
                <Star size={12} />
                Expert
              </span>
            </div>
            <span className="text-gray-500">{sample.date}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-3">
            IELTS Writing Task 2 Samples
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Study high-scoring IELTS Writing Task 2 essays with expert analysis
            and learn how to tackle different question types.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 rounded-r-lg max-w-3xl mx-auto">
          <div className="flex items-start">
            <AlertTriangle className="text-yellow-400 mr-2 mt-1" size={18} />
            <div>
              <h4 className="text-yellow-800 font-semibold text-sm">
                Writing Tips
              </h4>
              <p className="text-yellow-700 text-xs">
                Focus on understanding different question types and their
                requirements. Practice organizing your ideas and developing
                clear arguments.
              </p>
            </div>
          </div>
        </div>

        {/* Category Selection */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-white rounded-lg shadow-sm p-2">
            {task2Categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  currentCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                } transition-colors duration-200`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Sample Detail View */}
        {selectedSample && (
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedSample(null)}
                className="text-blue-600 hover:text-blue-800 mb-4"
              >
                ← Back to samples
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedSample.title}
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Question:
                  </h3>
                  <p className="text-gray-700">{selectedSample.question}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Sample Answer:
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedSample.answer}
                  </p>
                </div>
                {selectedSample.keyPoints && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {selectedSample.keyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Sample Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSamples.map(renderSampleCard)}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 text-sm">
            Load More Samples
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritingTask2Page;
