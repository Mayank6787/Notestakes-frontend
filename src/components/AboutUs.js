import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div style={containerStyle} className="container">
      <div style={textContainerStyle}>
        <h2 style={headingStyle}>Our Story</h2>
        <p style={paragraphStyle}>
          In a remarkable 20-day sprint, our dedicated team successfully conceptualized, designed, and developed a cutting-edge full-stack website with a visually striking interface. Embracing agile methodologies, the project seamlessly integrated front-end creativity with back-end robustness. Collaborative efforts and daily feedback loops ensured a harmonious workflow, while rigorous quality assurance processes maintained the project's high standards.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with your image URL
        alt="About Us"
        style={imageStyle}
      />
      
    </div>
  );
};

const containerStyle = {
  maxWidth: '1000px', // Adjust the width as needed
  height: '600px', // Adjust the height as needed
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column', // Change the layout to a column
  justifyContent: 'center', // Center content vertically
  alignItems: 'center', // Center content horizontally
};

const textContainerStyle = {
  textAlign: 'center', // Center the text within the container
  flex: 1,
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '10px',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
};

const imageStyle = {
  width: '400px', // Adjust the width as needed
  height: '300px', // Adjust the height as needed
  borderRadius: '8px',
};

export default AboutUs;
