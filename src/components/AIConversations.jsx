const conversationTopics = [
  {
    title: "Introducing Yourself",
    image: "/ai2.jpg",
    path: "/ai2.jpg",
  },
  {
    title: "Introducing Family Members",
    image: "/ai3.jpg",
    path: "/conversations/family-intro",
  },
  {
    title: "Introducing Hobbies/Interests",
    image: "/ai4.jpg",
    path: "/conversations/hobbies",
  },
  {
    title: "Introducing Your Country/Hometown",
    image: "/ai2.jpg",
    path: "/conversations/hometown",
  },
  {
    title: "Introducing Your Job",
    image: "/ai3.jpg",
    path: "/conversations/job",
  },
  {
    title: "Introducing Your Home",
    image: "/ai4.jpg",
    path: "/conversations/home",
  },
  {
    title: "Introducing Your Birthday",
    image: "/ai3.jpg",
    path: "/conversations/birthday",
  },
  {
    title: "Introducing Your School",
    image: "/ai2.jpg",
    path: "/conversations/school",
  },
];

const AIConversations = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          AI Conversations
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Engage in real-time dialogues with AI and receive suggestions on how
          to enhance the quality of your responses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {conversationTopics.map((topic, index) => (
            <a
              key={index}
              href={topic.path}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-blue-600 font-semibold hover:text-blue-700">
                  {topic.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIConversations;
