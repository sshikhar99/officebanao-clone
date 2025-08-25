import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      {submitted && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required/>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
