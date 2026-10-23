import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [goal, setGoal] = useState("");
  const [skills, setSkills] = useState("");
  const [interest, setInterest] = useState("");
  const [result, setResult] = useState(null);

  const submit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/career",
        {
          name,
          cgpa,
          goal,
          skills,
          interest
        }
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);
      alert("Backend Connection Failed");
    }
  };

  const getSalary = (role) => {
    if (role === "Cloud Engineer") return "₹6 LPA - ₹18 LPA";
    if (role === "ML Engineer") return "₹8 LPA - ₹25 LPA";
    if (role === "DevOps Engineer") return "₹7 LPA - ₹20 LPA";
    if (role === "Frontend Developer") return "₹4 LPA - ₹12 LPA";

    return "₹4 LPA - ₹15 LPA";
  };

  return (
    <div className="container">

      <h1>☁️ CloudCareer AI</h1>

      <p className="subtitle">
        AI Powered Career Navigator for AWS Careers
      </p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="CGPA"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
      />

      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      >
        <option value="">Career Goal</option>
        <option>Job</option>
        <option>Higher Studies</option>
        <option>Startup</option>
      </select>

      <input
        type="text"
        placeholder="Skills (Python, AWS, React...)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      >
        <option value="">Select Interest</option>
        <option>Cloud Computing</option>
        <option>Machine Learning</option>
        <option>Web Development</option>
      </select>

      <button onClick={submit}>
        🚀 Find My Career Path
      </button>

      {result && (
        <div className="result-card">

          <h2>Recommended Role</h2>

          <h1>{result.role}</h1>

          <p>{result.reason}</p>

          <h3>
            Confidence Score: {result.confidence}%
          </h3>

          <div className="progress">
            <div
              className="progress-fill"
              style={{
                width: `${result.confidence}%`
              }}
            ></div>
          </div>

          <h3>🎯 Why This Career?</h3>

          <ul>
            <li>High industry demand</li>
            <li>Strong future opportunities</li>
            <li>Matches your interests and skills</li>
            <li>Excellent growth potential</li>
          </ul>

          <h3>📚 Learning Roadmap</h3>

          <ul>
            <li>AWS Cloud Practitioner</li>
            <li>Learn IAM</li>
            <li>Learn EC2</li>
            <li>Learn Lambda</li>
            <li>Build Cloud Projects</li>
            <li>Apply for Internships</li>
          </ul>

          <h3>💰 Estimated Salary Range</h3>

          <p>{getSalary(result.role)}</p>

          <h3>✅ Next Immediate Action</h3>

          <p>
            Start AWS Cloud Practitioner preparation and build
            one AWS-hosted project within the next 30 days.
          </p>

        </div>
      )}

    </div>
  );
}

export default App;