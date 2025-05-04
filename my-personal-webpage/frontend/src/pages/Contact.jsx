import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (res.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const error = await res.json();
        alert('Error: ' + error.error);
      }
    } catch (err) {
      alert('Error submitting form: ' + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-[#353535] text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            className="w-full p-2 rounded bg-[#353535] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3c6e71]"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            className="w-full p-2 rounded bg-[#353535] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3c6e71]"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 h-32 rounded bg-[#353535] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3c6e71]"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#284b63] hover:bg-[#3c6e71] text-white font-semibold py-2 rounded transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
