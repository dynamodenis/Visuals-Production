import React from 'react'

const Contact = () => {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" style={{ display: 'block', margin: '10px 0' }} />
          <input type="email" placeholder="Your Email" style={{ display: 'block', margin: '10px 0' }} />
          <textarea placeholder="Your Message" style={{ display: 'block', margin: '10px 0' }} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  };
  

export default Contact