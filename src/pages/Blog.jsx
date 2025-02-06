const blogPosts = [
  {
    title: "IELTS Writing Tips",
    description: "Essential strategies to improve your IELTS writing.",
  },
  {
    title: "Mastering IELTS Speaking",
    description:
      "How to sound confident and score higher in the IELTS speaking test.",
  },
  {
    title: "IELTS Listening Hacks",
    description: "Boost your listening score with these proven techniques.",
  },
];

const Blog = () => {
  return (
    <section className="container mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
