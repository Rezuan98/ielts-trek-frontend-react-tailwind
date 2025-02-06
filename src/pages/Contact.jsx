const Contact = () => {
  return (
    <section className="container mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
      <p className="mt-4 text-gray-600">Have questions? Reach out to us!</p>

      <form className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded mb-4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
