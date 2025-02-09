import { Link } from "react-router-dom";

const sampleCategories = [
  {
    title: "Writing Samples",
    description:
      "Explore band 9 sample essays for IELTS Writing Task 1 & 2. Learn from expertly written responses covering various topics and question types.",
    image: "/ws1.png",
    link: "/writing-task1-samples",
    categories: ["Band-9 IELTS Writing Samples"],
    tags: ["Task 1", "Task 2", "General", "Academic"],
  },
  {
    title: "Reading Samples",
    description:
      "Access high-scoring IELTS Reading answers with detailed explanations. Practice with authentic test materials and improve your comprehension.",
    image: "/ws2.png",
    link: "/reading-samples",
    categories: ["Band-9 IELTS Reading Samples"],
    tags: ["Academic", "General", "MCQs", "True/False/NG"],
  },
  {
    title: "Speaking Samples",
    description:
      "Watch and learn from band 9 speaking responses. Get insights into all three parts of the speaking test with model answers.",
    image: "/ws3.png",
    link: "/speaking-samples",
    categories: ["Band-9 IELTS Speaking Samples"],
    tags: ["Part 1", "Part 2", "Part 3", "Cue Cards"],
  },
  {
    title: "Listening Samples",
    description:
      "Practice with sample answers for all IELTS Listening question types. Understand scoring criteria and common question patterns.",
    image: "/ws1.png",
    link: "/listening-samples",
    categories: ["Band-9 IELTS Listening Samples"],
    tags: ["Section 1", "Section 2", "Section 3", "Section 4"],
  },
];

const SampleCategories = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Latest IELTS Samples
        </h2>

        {/* Grid Layout: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleCategories.map((sample, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 bg-white rounded-lg border border-orange-400 p-6 hover:shadow-xl transition-shadow"
            >
              {/* Image Section */}
              <div className="md:w-1/4 flex items-center justify-center">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-24 h-24 object-contain rounded-lg border border-blue-300"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-3/4">
                <Link to={sample.link}>
                  <h3 className="text-lg font-semibold text-blue-600 hover:text-orange-500 transition-colors mb-2">
                    {sample.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-3">{sample.description}</p>

                {/* Categories */}
                <div className="text-sm text-blue-700 font-medium">
                  Categories:{" "}
                  {sample.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="text-orange-500 hover:text-orange-600 cursor-pointer"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="text-sm text-blue-700 font-medium mt-2">
                  Tags:{" "}
                  <div className="inline-flex flex-wrap gap-2">
                    {sample.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm hover:bg-orange-200 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            to="/all-samples"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Samples
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SampleCategories;
