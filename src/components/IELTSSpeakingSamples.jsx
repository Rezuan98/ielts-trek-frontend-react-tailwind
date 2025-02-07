const IELTSSpeakingSamples = () => {
  const samples = [
    {
      title:
        "Band-9 Samples: What kinds of things make a museum or art gallery an interesting place to visit?",
      image: "/st1.jpg",
      description:
        'This post contains ideas and band-9 sample answers (audio included) for the Cambridge IELTS 18 Academic Speaking Part 3 Question 3 Test 2 question: "What kinds of things make a museum or art gallery an interesting place to visit?" Sample 1: In my opinion, the presence of rare collections is what makes museums and art...',
      categories: ["Band-9 IELTS Speaking Samples"],
      tags: ["Band 9", "Cambridge IELTS 18 Academic", "IELTS Speaking Part 3"],
    },
    {
      title:
        "Band-9 Samples: Do you believe that all museums and art galleries should be free?",
      image: "/sp2.jpg",
      description:
        'This post contains ideas and band-9 sample answers (audio included) for the Cambridge IELTS 18 Academic Speaking Part 3 Question 2 Test 2 question: "Do you believe that all museums and art galleries should be free?" Sample 1: No While I understand the appeal of free museums and galleries, I personally don\'t agree that they...',
      categories: ["Band-9 IELTS Speaking Samples"],
      tags: ["Band 9", "Cambridge IELTS 18 Academic", "IELTS Speaking Part 3"],
    },
    {
      title:
        "Band-9 Samples: What are the most popular museums and art galleries where you live?",
      image: "/sp3.jpg",
      description:
        "This post contains ideas and band-9 sample answers (audio included) for the Cambridge IELTS 18 Academic Speaking Part 3 Question 1 Test 2 question: \"What are the most popular museums and art galleries where you live?\" Sample 1: Not Remembering Names In my hometown, there's a war museum that's always buzzing with activity. Even though I can't...",
      categories: ["Band-9 IELTS Speaking Samples"],
      tags: ["Band 9", "Cambridge IELTS 18 Academic", "IELTS Speaking Part 3"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Latest IELTS Speaking Samples
      </h1>

      <div className="space-y-8">
        {samples.map((sample, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              {/* Image with double border */}
              <div className="md:w-1/4">
                <div className="p-2 border-4 border-double border-gray-200">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/4 p-6">
                {/* Title */}
                <a
                  href="#"
                  className="text-xl md:text-2xl font-semibold text-red-600 hover:text-red-700 transition-colors duration-300"
                >
                  {sample.title}
                </a>

                {/* Description */}
                <p className="mt-4 text-gray-600">{sample.description}</p>

                {/* Categories and Tags */}
                <div className="mt-4 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {sample.categories.map((category, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sample.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-[rgb(40,54,209)] rounded-full text-sm"
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

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2">
          View More Samples
        </button>
      </div>
    </div>
  );
};

export default IELTSSpeakingSamples;
