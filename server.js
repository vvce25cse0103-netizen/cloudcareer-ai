const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/career", (req, res) => {

    res.json({
        role: "Cloud Engineer",
        confidence: 80,
        reason: "Cloud interest and scalable infrastructure mindset",
        roadmap: [
            "AWS Cloud Practitioner",
            "Learn IAM",
            "Learn EC2",
            "Learn Lambda",
            "Build AWS Project",
            "Apply for Internship"
        ]
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});