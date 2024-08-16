import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>
        <p className="text-gray-600 mb-4">
          Experienced Senior Front-end Engineer with a history of delivering successful projects globally. With over 8 years in the field and experience with front-end technologies, I have consistently achieved impactful project outcomes and provided effective leadership to teams. Proficient in ReactJS, TypeScript, JavaScript, and CSS, with a history of leading cross-functional teams to achieve successful project outcomes for banking platforms with smart contracts, blockchain voting systems, and the Oil and Gas Industry. Demonstrated ability to collaborate effectively within Scrum teams and autonomously drive product development initiatives. Known for fostering a collaborative work environment conducive to high performance through effective team management and mentorship.
        </p>
        <p className="text-gray-600 mb-4">
          I have worked with various technologies and frameworks, including ReactJS, TypeScript, JavaScript ES6, Redux, TailwindCSS, and more. My background includes significant achievements in developing applications for banking systems, care management platforms, and more, with a focus on enhancing user experiences and optimizing performance.
        </p>
        <p className="text-gray-600 mb-4">
          I hold a Master’s degree in Data Science from the University of Greenwich, London, and a Bachelor’s degree in Computer Science and Engineering from Shahjalal University of Science and Technology. My goal is to continue leveraging my expertise to drive innovation and contribute to impactful projects.
        </p>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Download My CV</h2>
          <a
            href="/path-to-your-resume/foysalahmedemon_cv.pdf"
            download
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
