import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(saved);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>📊 Admin Dashboard</h2>

      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <thead>
            <tr style={{ background: "#f5f5f5", textAlign: "left" }}>
              <th style={thStyle}>Company</th>
              <th style={thStyle}>Contact Person</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Services</th>
              <th style={thStyle}>Location</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>{sub.companyName}</td>
                <td style={tdStyle}>{sub.contactPerson}</td>
                <td style={tdStyle}>{sub.email}</td>
                <td style={tdStyle}>{sub.phone}</td>
                <td style={tdStyle}>{sub.services}</td>
                <td style={tdStyle}>{sub.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  padding: "12px",
  borderBottom: "2px solid #ddd",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "12px",
};
