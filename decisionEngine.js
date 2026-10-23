const { getRoadmap } = require("./roadmapGenerator");

function decideCareer(data) {

    const skills = data.skills.toLowerCase();

    let role = "";
    let confidence = 80;
    let reason = "";

    if (
        skills.includes("python") &&
        data.interest === "Machine Learning"
    ) {

        role = "ML Engineer";
        confidence = 90;
        reason = "Strong Python and AI interest";

    } 
    else if (
        skills.includes("aws") ||
        data.interest === "Cloud Computing"
    ) {

        role = "Cloud Engineer";
        confidence = 80;
        reason = "Cloud interest and scalable infrastructure mindset";

    } 
    else if (
        skills.includes("docker") ||
        skills.includes("linux")
    ) {

        role = "DevOps Engineer";
        confidence = 85;
        reason = "Infrastructure automation background";

    } 
    else if (
        skills.includes("react") ||
        skills.includes("javascript")
    ) {

        role = "Frontend Developer";
        confidence = 82;
        reason = "Strong web development skills";

    } 
    else {

        role = "Software Engineer";
        confidence = 75;
        reason = "General software development profile";

    }

    return {
        role,
        confidence,
        reason,
        roadmap: getRoadmap(role)
    };
}

module.exports = { decideCareer };