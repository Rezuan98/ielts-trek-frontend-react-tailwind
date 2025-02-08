import { Link } from "react-router-dom";

const writingSamples = [
  {
    title: "Advertising & New Products: Positive or Negative?",
    description:
      "This post contains ideas and band-9 sample essays for the Cambridge IELTS 16 Academic Writing Task 2 Test 2 topic...",
    image: "ws1.png",
    categories: ["Band-9 IELTS Writing Samples"],
    tags: ["Band 9", "Cambridge IELTS 16 Academic", "IELTS Writing Task 2"],
  },
  {
    title: "Interest in House History: Why & How?",
    description:
      "This post contains ideas and band-9 sample essays for the Cambridge IELTS 16 Academic Writing Task 2 Test 1 topic...",
    image: "ws2.png",
    categories: ["Band-9 IELTS Writing Samples"],
    tags: ["Band 9", "Cambridge IELTS 16 Academic", "IELTS Writing Task 2"],
  },
  {
    title: "Alternative Medicine vs. Doctors: Good or Bad?",
    description:
      "This post contains ideas and band-9 sample essays for the Cambridge IELTS 17 Academic Writing Task 2 Test 4 topic...",
    image: "ws3.png",
    categories: ["Band-9 IELTS Writing Samples"],
    tags: ["Band 9", "Cambridge IELTS 17 Academic", "IELTS Writing Task 2"],
  },
  {
    title: "Ambition & Success: How Important?",
    description:
      "This post contains ideas and band-9 sample essays for the Cambridge IELTS 18 Academic Writing Task 2 Test 3 topic...",
    image: "ws1.png",
    categories: ["Band-9 IELTS Writing Samples"],
    tags: ["Band 9", "Cambridge IELTS 18 Academic", "IELTS Writing Task 2"],
  },
];

const WritingSamples = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Latest IELTS Writing Samples
        </h2>

        {/* Grid Layout: 2 Columns & 2 Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writingSamples.map((sample, index) => (
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
                <h3 className="text-lg font-semibold text-blue-600 hover:text-orange-500 transition-colors mb-2">
                  {sample.title}
                </h3>
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
            to="/writing-samples-page"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Writing Samples
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WritingSamples;
