import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  Star,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const task1Categories = [
  { id: "all", label: "All" },
  { id: "line-graph", label: "Line Graph" },
  { id: "bar-chart", label: "Bar Chart" },
  { id: "pie-chart", label: "Pie Chart" },
  { id: "table", label: "Table" },
  { id: "map", label: "Map" },
  { id: "process", label: "Process" },
  { id: "mixed", label: "Mixed Chart" },
];

const writingSamples = [
  {
    id: 1,
    title: "Line Graph Analysis: Global Temperature Changes",
    description:
      "A detailed analysis of temperature variations over 50 years with band 9 sample answer",
    type: "line-graph",
    score: 9.0,
    views: "2.3k",
    date: "2024-02-01",
    image: "/ws1.png",
    tags: ["Line Graph", "Climate", "Band 9", "Academic"],
    question:
      "The line graph shows global temperature changes from 1970 to 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer:
      "The line graph illustrates the variations in global temperatures over a 50-year period from 1970 to 2020...",
  },
  {
    id: 2,
    title: "Bar Chart: Global Energy Consumption",
    description:
      "Comparative analysis of energy usage across different countries",
    type: "bar-chart",
    score: 8.5,
    views: "1.8k",
    date: "2024-01-28",
    image: "/ws2.png",
    tags: ["Bar Chart", "Energy", "Band 8.5", "Academic"],
    question:
      "The bar chart compares energy consumption in different countries. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer:
      "The bar chart presents a comparison of energy usage across various countries...",
  },
  {
    id: 3,
    title: "Process Diagram: Water Treatment",
    description: "Step-by-step explanation of water purification process",
    type: "process",
    score: 9.0,
    views: "3.1k",
    date: "2024-01-25",
    image: "/ws3.png",
    tags: ["Process", "Environment", "Band 9", "Academic"],
    question:
      "The diagram shows the process of water treatment. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer:
      "The diagram illustrates the various stages involved in the water treatment process...",
  },
  {
    id: 4,
    title: "Mixed Chart: Population and Housing Prices",
    description: "Analysis of population growth and housing price trends",
    type: "mixed",
    score: 8.5,
    views: "2.7k",
    date: "2024-01-22",
    image: "/ws1.png",
    tags: ["Mixed Chart", "Housing", "Band 8.5", "Academic"],
    question:
      "The charts below show population growth and housing prices in a city from 2000 to 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer:
      "The mixed charts present the relationship between population growth and housing prices...",
  },
];

const WritingTask1AcademicPage = () => {
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
            IELTS Academic Writing Task 1 Samples
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Explore our collection of high-scoring IELTS Academic Writing Task 1
            samples with expert analysis and explanations.
          </p>
          <Link
            to="/writing-task2-samples"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold mt-4"
          >
            View Writing Task 2 Samples
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 rounded-r-lg max-w-3xl mx-auto">
          <div className="flex items-start">
            <AlertTriangle className="text-yellow-400 mr-2 mt-1" size={18} />
            <div>
              <h4 className="text-yellow-800 font-semibold text-sm">
                Study Tips
              </h4>
              <p className="text-yellow-700 text-xs">
                Dont just read these samples - analyze them! Pay attention to
                structure, vocabulary usage, and how ideas are developed.
              </p>
            </div>
          </div>
        </div>

        {/* Category Selection */}
        <div className="w-full max-w-3xl mx-auto mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-white rounded-lg shadow-sm p-2">
            {task1Categories.map((category) => (
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
                  <p className="text-gray-700">{selectedSample.answer}</p>
                </div>
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

export default WritingTask1AcademicPage;
