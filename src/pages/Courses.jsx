const courses = [
  {
    title: "IELTS Writing Masterclass",
    price: "$49",
    description: "Improve your writing skills and ace the IELTS test.",
  },
  {
    title: "IELTS Speaking Intensive",
    price: "$39",
    description:
      "Practice with expert feedback to boost your speaking confidence.",
  },
  {
    title: "IELTS Full Course",
    price: "$99",
    description: "Complete IELTS preparation with mock tests and tips.",
  },
];

const Courses = () => {
  return (
    <section className="container mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Our Courses</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {courses.map((course, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-blue-600 font-bold">{course.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
