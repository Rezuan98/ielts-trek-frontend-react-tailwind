const articles = [
  {
    title: "IELTS Writing Tips",
    description:
      "Improve your IELTS writing with expert tips and techniques for better scores.",
    image: "/c6.jpg",
  },
  {
    title: "Speaking Strategies",
    description:
      "Master IELTS Speaking with proven strategies and practice methods.",
    image: "/c5.jpg",
  },
  {
    title: "Reading Mastery",
    description:
      "Learn time management and comprehension skills for Reading test.",
    image: "/c2.jpg",
  },
  {
    title: "Listening Success",
    description:
      "Essential tips to improve your listening comprehension skills.",
    image: "/c1.jpg",
  },
  {
    title: "Grammar Guide",
    description: "Comprehensive guide to essential grammar for IELTS success.",
    image: "/c3.jpg",
  },
  {
    title: "Vocabulary Builder",
    description: "Expand your vocabulary with topic-specific word lists.",
    image: "/c4.jpg",
  },
];

const Articles = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
