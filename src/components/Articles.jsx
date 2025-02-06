const articles = [
  {
    title: "IELTS Writing Tips",
    description: "Improve your IELTS writing with expert tips.",
  },
  {
    title: "Speaking Strategies",
    description: "Ace your IELTS Speaking with confidence.",
  },
];

const Articles = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {articles.map((article, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
