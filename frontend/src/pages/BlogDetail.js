import React from "react";
import { useParams, Link } from "react-router-dom";

const blogData = {
  1: {
    title: "How to Design Modern Workspaces",
    date: "Aug 28, 2025",
    content: `
     Designing modern workspaces is no longer just about arranging desks and chairs. Today’s offices are dynamic environments that influence productivity, collaboration, and employee well-being. A thoughtfully designed workspace reflects a company’s culture while adapting to the evolving needs of its teams.

The first step in creating a modern office is embracing flexibility. Open layouts with modular furniture allow teams to reconfigure spaces quickly for collaboration or focused work. Startups and enterprises alike benefit from adaptable designs that grow with their people and projects.

Another key element is technology integration. Smart solutions such as wireless charging, video conferencing facilities, and collaborative digital boards help employees stay connected and efficient. Seamless tech experiences reduce friction and keep work flowing smoothly.

Ergonomics should be a top priority. Comfortable chairs, adjustable desks, and well-lit areas promote physical well-being, reducing fatigue and increasing focus. Pairing ergonomics with biophilic design—bringing in natural light, plants, and earthy tones—creates a refreshing environment that inspires creativity and reduces stress.

Equally important is zoning. Not every task requires the same atmosphere. Dedicated collaboration hubs, private focus zones, and breakout lounges give employees the freedom to choose how they work best. This balance supports both teamwork and individual productivity.

Finally, modern workspaces must express brand identity. Through colors, artwork, and materials, the office should tell a story about the company’s values and vision. A unique yet professional aesthetic strengthens culture and leaves a lasting impression on clients and visitors.

In essence, designing a modern workspace means blending style, functionality, and purpose. By prioritizing flexibility, technology, ergonomics, and brand storytelling, businesses can create offices that not only look impressive but also empower people to thrive.
    `,
  },
  2: {
    title: "Top 5 Office Interior Trends in 2025",
    date: "Aug 20, 2025",
    content: `
      Office interiors in 2025 are evolving rapidly to meet the demands of a new era of work. From hybrid models to wellness-driven design, companies are reimagining workplaces as more than just spaces to work—they are hubs for collaboration, creativity, and culture. Here are the top five trends shaping office design this year.

1. Flexible and Hybrid Workspaces
Adaptability is key in 2025. Offices are moving toward modular furniture, mobile partitions, and reconfigurable layouts that support both in-person collaboration and remote connectivity. This flexibility ensures spaces can evolve with changing business needs.

2. Wellness-Centric Design
Employee well-being is central to office planning. Expect more natural lighting, indoor greenery, air-purifying systems, and ergonomic furniture. Wellness zones with meditation corners, relaxation pods, and fitness areas are becoming standard, reducing stress and boosting productivity.

3. Smart Technology Integration
Technology is seamlessly embedded into modern workspaces. From AI-powered meeting rooms to IoT-enabled climate control and touchless systems, tech is enhancing efficiency and comfort. Smart boards, AR collaboration tools, and intelligent lighting further support a connected work culture.

4. Sustainable Materials and Practices
Sustainability is no longer optional. Offices in 2025 are embracing recycled materials, energy-efficient lighting, and eco-friendly furniture. Green certifications and circular design practices are driving businesses toward environmentally responsible interiors that align with global climate goals.

5. Branded Experiences
Workspaces are increasingly being designed to reflect brand values and identity. Custom artwork, thematic color palettes, and experiential zones help companies express their culture, making offices engaging for employees and memorable for clients.

In 2025, office interiors balance flexibility, well-being, technology, sustainability, and storytelling. Together, these trends redefine the workplace as a destination that inspires innovation, nurtures people, and strengthens organizational identity.
    `,
  },
  3: {
    title: "Why Good Office Design Boosts Productivity",
    date: "Aug 15, 2025",
    content: `
      A well-designed office is more than just an attractive space—it’s a powerful tool for boosting productivity, creativity, and employee satisfaction. The environment in which people work directly influences how they think, feel, and perform. Good office design removes friction, supports focus, and inspires collaboration.

One of the most important aspects of effective office design is ergonomics. Comfortable chairs, adjustable desks, and proper lighting reduce fatigue and prevent health issues, allowing employees to stay energized and engaged throughout the day. A workspace that supports physical well-being naturally enhances performance.

Layout and zoning also play a key role. Open areas encourage teamwork and quick idea exchanges, while private zones provide the quiet needed for deep focus. By offering a balance between collaboration and concentration, offices cater to different working styles and tasks.

Aesthetics and environment influence mood and motivation. Natural light, calming colors, and biophilic elements like plants reduce stress and create a more enjoyable atmosphere. Studies show that employees working in well-lit, nature-inspired spaces report higher levels of creativity and satisfaction.

Another factor is technology integration. Smart meeting rooms, wireless solutions, and collaborative digital tools minimize time wasted on technical issues and make teamwork seamless. When technology works smoothly, employees can focus on meaningful work instead of troubleshooting.

Finally, good office design helps express company culture and values. A thoughtfully branded space fosters pride, belonging, and motivation among employees, while also making a strong impression on clients and visitors.

In short, a well-planned office design is not just about aesthetics—it’s about creating an environment that supports people. When employees feel comfortable, inspired, and connected, productivity naturally follows, turning the office into a true engine of growth and success.
    `,
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return <h2 style={{ textAlign: "center", padding: "50px" }}>Blog not found</h2>;
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h1>{blog.title}</h1>
      <p style={{ fontSize: "14px", color: "#777", marginBottom: "20px" }}>
        {blog.date}
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>{blog.content}</p>

      {/* ✅ Back button styled like your "View More" */}
      <div style={{ marginTop: "30px" }}>
        <Link to="/blogs">
          <button
            style={{
              padding: "10px 20px",
              background: "#00bcd4",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0097a7")}
            onMouseOut={(e) => (e.target.style.background = "#00bcd4")}
          >
            ← Back to Blogs
          </button>
        </Link>
      </div>
    </div>
  );
}
