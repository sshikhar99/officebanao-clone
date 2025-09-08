import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const API_BASE = process.env.REACT_APP_API_URL || "";

  useEffect(() => {
    const loadData = async () => {
      try {
        let data = [];

        // ✅ 1. Load from localStorage
        const local = JSON.parse(localStorage.getItem("submissions") || "[]");
        data = [...local];

        // ✅ 2. Load from backend if available
        if (API_BASE) {
          const res = await fetch(`${API_BASE}/api/vendors`);
          if (res.ok) {
            const backendData = await res.json();
            data = [...data, ...backendData];
          }
        }

        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching submissions:", err);
      }
    };

    loadData();
  }, [API_BASE]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>📊 Admin Dashboard</h2>

      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        submissions.map((s, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
              background: "#f9f9f9",
            }}
          >
            <h3>{s.companyName}</h3>
            <p><b>Contact Person:</b> {s.contactPerson}</p>
            <p><b>Email:</b> {s.email}</p>
            <p><b>Phone:</b> {s.phone}</p>
            <p><b>Services:</b> {s.services}</p>
            <p><b>Location:</b> {s.location}</p>
          </div>
        ))
      )}
    </div>
  );
}
