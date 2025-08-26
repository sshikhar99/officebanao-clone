import React from "react";

const ContactPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>We'd Love to Hear from <span>You</span></h2>
        <p>Start your journey to a beautifully designed office today</p>
        <form>
          <input type="text" placeholder="Full Name *" required />
          <input type="text" placeholder="Company Name *" required />
          <input type="email" placeholder="Work Email ID *" required />
          <input type="text" placeholder="City Name *" required />
          <button type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ContactPopup;