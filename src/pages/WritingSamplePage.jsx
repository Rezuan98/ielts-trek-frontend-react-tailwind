import { useState } from "react";

const sampleEssays = [
  {
    id: 1,
    title: "Band-9 Samples: Product Innovation in Advertising",
    question:
      "In their advertising, businesses nowadays usually emphasize that their products are new in some way. Why is this? Do you think it is a positive or negative development?",
    essay: `In modern advertising, companies frequently highlight the novel aspects of their products, a trend that has become increasingly prevalent. This essay will explore the reasons behind this phenomenon and evaluate its implications.

Companies emphasize product novelty for several compelling reasons. Firstly, in today's highly competitive market, businesses need to differentiate themselves from their rivals. By highlighting new features or improvements, they can capture consumer attention and establish a unique selling proposition. Secondly, modern consumers often associate newness with progress and better quality. This psychological association makes them more likely to purchase products that are marketed as innovative or improved.

I believe this development has both positive and negative aspects. On the positive side, the focus on novelty drives innovation and technological advancement. Companies invest heavily in research and development to create genuine improvements, which can benefit consumers through better products and services. For example, smartphone manufacturers continually develop better cameras and faster processors, resulting in improved user experience.

However, there are notable drawbacks to this trend. The constant emphasis on newness can create artificial obsolescence, where perfectly functional products are perceived as outdated simply because newer versions exist. This not only leads to unnecessary consumer spending but also contributes to environmental waste. Additionally, some companies may exaggerate minor changes as revolutionary improvements, potentially misleading consumers.

In conclusion, while the emphasis on product novelty in advertising drives innovation and meets consumer expectations, it also creates environmental and economic challenges. A more balanced approach, where companies focus on meaningful improvements rather than superficial changes, would be more beneficial for both consumers and society.`,
    bandScore: 9,
    keyFeatures: [
      "Clear and logical structure",
      "Sophisticated vocabulary use",
      "Balanced argument",
      "Relevant examples",
      "Strong conclusion",
    ],
    tags: ["Band 9", "Cambridge IELTS 16 Academic", "IELTS Writing Task 2"],
    image: "ws1.png",
  },
  {
    id: 2,
    title: "Band-9 Samples: History of Buildings",
    question:
      "In some countries, more and more people are becoming interested in finding out about the history of the house or building they live in. What are the reasons for this? How can people research this?",
    essay: `There is a growing trend of people investigating the historical background of their residences. This essay will examine the motivations behind this interest and explore various research methods available to those seeking such information.

Several factors drive people's curiosity about their homes' history. Primarily, understanding a building's past creates a deeper connection to one's living space and community. This knowledge can provide a sense of continuity and belonging, especially in an increasingly transient world. Additionally, historical information can enhance a property's value, as buildings with interesting histories often attract premium prices in the real estate market.

There are numerous ways people can research their building's history. Official records and archives provide a wealth of information. Local government offices typically maintain property records, building permits, and land registries that can reveal previous owners and structural changes. Libraries often house old maps, photographs, and local newspapers that can offer insights into neighborhood development. Additionally, online genealogy websites and historical databases have made research more accessible than ever.

The investigation process can extend beyond official documents. Interviewing long-term residents of the area can provide valuable oral histories and personal anecdotes about the building and its previous occupants. Archaeological evidence, such as old foundations or artifacts found during renovation, can also offer clues about a building's past use and evolution.

In conclusion, the growing interest in building histories reflects people's desire for connection and understanding of their immediate environment. With various research tools available, from official records to personal accounts, interested individuals can piece together fascinating narratives about their homes' past.`,
    bandScore: 9,
    keyFeatures: [
      "Well-organized paragraphs",
      "Complex sentence structures",
      "Precise vocabulary",
      "Clear explanations",
      "Comprehensive coverage",
    ],
    tags: ["Band 9", "Cambridge IELTS 16 Academic", "IELTS Writing Task 2"],
    image: "ws2.png",
  },
];

const WritingSamplesPage = () => {
  const [selectedEssay, setSelectedEssay] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          IELTS Writing Task 2 Sample Essays
        </h1>

        {selectedEssay ? (
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <button
              onClick={() => setSelectedEssay(null)}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              ← Back to all samples
            </button>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <img
                  src={selectedEssay.image}
                  alt={selectedEssay.title}
                  className="w-24 h-24 object-contain rounded-lg border-2 border-blue-300"
                />
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">
                    {selectedEssay.title}
                  </h2>
                  <div className="flex gap-2">
                    {selectedEssay.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Question:</h3>
                <p className="text-gray-700">{selectedEssay.question}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Sample Essay:
                </h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedEssay.essay}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-4">
                  Key Features (Band Score: {selectedEssay.bandScore})
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedEssay.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-blue-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {sampleEssays.map((essay) => (
              <div
                key={essay.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer"
                onClick={() => setSelectedEssay(essay)}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/6 flex items-center justify-center">
                    <img
                      src={essay.image}
                      alt={essay.title}
                      className="w-24 h-24 object-contain rounded-lg border-2 border-blue-300"
                    />
                  </div>
                  <div className="md:w-5/6">
                    <h2 className="text-xl font-semibold text-blue-700 hover:text-blue-900 mb-3">
                      {essay.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{essay.question}</p>
                    <div className="flex flex-wrap gap-2">
                      {essay.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm"
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
        )}
      </div>
    </div>
  );
};

export default WritingSamplesPage;
