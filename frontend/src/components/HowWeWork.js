import React from 'react';

function HowWeWork() {
  const steps = ['Consultation', 'Design', 'Implementation', 'Delivery'];

  return (
    <section id="how-we-work">
      <h2>How We Work</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export default HowWeWork;