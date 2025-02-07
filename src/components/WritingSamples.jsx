const writingSamples = [
  {
    title:
      "Band-9 Samples: In their advertising, businesses nowadays usually emphasize that their products are new in some way. Why is this? Do you think it is a positive or negative development?",
    description:
      "This post contains ideas and band-9 sample essays for the Cambridge IELTS 16 Academic Writing Task 2 Test 2 topic...",
    image: "ws1.png",
    categories: ["Band-9 IELTS Writing Samples"],
    tags: ["Band 9", "Cambridge IELTS 16 Academic", "IELTS Writing Task 2"],
  },
  {
    title:
      "Band-9 Samples: In some countries, more and more people are becoming interested in finding out about the history of the house or building they live in. What are the reasons for this? How can people research this?",
    description:
      "This post contains ideas and band-9 sample essays for the Cambridge IELTS 16 Academic Writing Task 2 Test 1 topic...",
    image: "ws2.png",
    categories: ["Band-9 IELTS Writing Samples"],
    tags: ["Band 9", "Cambridge IELTS 16 Academic", "IELTS Writing Task 2"],
  },
  {
    title:
      "Band-9 Samples: Nowadays, a growing number of people with health problems are trying alternative medicines and treatments instead of visiting their usual doctor. Do you think this is a positive or a negative development?",
    description:
      "This post contains ideas and band-9 sample essays for the Cambridge IELTS 17 Academic Writing Task 2 Test 4 topic...",
    image: "ws3.png",
    categories: ["Band-9 IELTS Writing Samples"],
    tags: ["Band 9", "Cambridge IELTS 17 Academic", "IELTS Writing Task 2"],
  },
];

const WritingSamples = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Latest IELTS Writing Samples
        </h2>

        <div className="space-y-8">
          {writingSamples.map((sample, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-white rounded-lg border-4 border-double border-orange-400 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="md:w-1/6 flex items-center justify-center">
                <div className="w-24 h-24">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-contain rounded-lg border-2 border-blue-300"
                  />
                </div>
              </div>

              <div className="md:w-5/6">
                <h3 className="text-xl font-semibold text-blue-600 hover:text-orange-500 transition-colors mb-3">
                  {sample.title}
                </h3>
                <p className="text-gray-600 mb-4">{sample.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-700 font-medium">
                      Categories:
                    </span>
                    {sample.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="text-orange-500 hover:text-orange-600 cursor-pointer"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-blue-700 font-medium">Tags:</span>
                    <div className="flex flex-wrap gap-2">
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-orange-500 transition-colors font-semibold border-2 border-white shadow-lg">
            View More Samples
          </button>
        </div>
      </div>
    </section>
  );
};

export default WritingSamples;
