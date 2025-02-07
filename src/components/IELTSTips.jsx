const IELTSTips = () => {
  const tips = [
    {
      title: "100 Common Phrases For IELTS Academic Writing Task 2",
      description:
        "The IELTS Academic Writing Task 2 is an important component of the IELTS exam and requires you to write a well-structured essay on a given topic. One of the key tips to crafting an effective IELTS Academic Writing Task 2 essay is the use of appropriate phrases to convey ideas and arguments.",
      category: "IELTS Tips",
      tags: ["IELTS Writing Task 2"],
      image: "/api/placeholder/400/300",
    },
    {
      title: "All IELTS Academic Writing Task 1 Types (+Tips & Examples)",
      description:
        "IELTS Academic Writing Task 1 can be a challenging test for many students. One of the reasons for this is the variety of question types that may appear on the test, including bar charts, line graphs, pie charts, tables, maps, diagrams, and more.",
      category: "IELTS Tips",
      tags: ["IELTS Writing Task 1"],
      image: "/api/placeholder/400/300",
    },
    {
      title: "25 Expert Tips For IELTS Academic Writing Task 2 Success",
      description:
        "The IELTS Academic Writing Task 2 can be challenging as it requires test takers to complete an essay of at least 250 words within 40 minutes. The test is designed to evaluate your ability to convey information in a clear, organized manner.",
      category: "IELTS Tips",
      tags: ["IELTS Writing Task 2"],
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Latest IELTS Tips
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-[rgb(40,54,209)] hover:text-orange-500 transition-colors duration-300">
                {tip.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {tip.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                  {tip.category}
                </span>
                {tip.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-[rgb(40,54,209)] rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">
          View All Tips
        </button>
      </div>
    </div>
  );
};

export default IELTSTips;
