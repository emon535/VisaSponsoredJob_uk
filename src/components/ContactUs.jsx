import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          If you have any questions or would like to get in touch, please feel free to reach out using the contact information below.
        </p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Contact Information</h2>
          <p className="text-gray-600 mt-2">
            <strong>Phone:</strong> 07404653490
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> <a href="mailto:emon535@gmail.com" className="text-blue-500 hover:underline">emon535@gmail.com</a>
          </p>
          <p className="text-gray-600">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/emon535/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/emon535</a>
          </p>
          <p className="text-gray-600">
            <strong>GitHub:</strong> <a href="https://github.com/emon535/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">github.com/emon535</a>
          </p>
          <p className="text-gray-600">
            <strong>Website:</strong> <a href="http://www.foysalahmed.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">foysalahmed.com</a>
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Send a Message</h2>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded mt-1" rows="5" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
