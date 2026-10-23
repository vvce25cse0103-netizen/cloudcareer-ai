function getRoadmap(role) {

    if (role === "Cloud Engineer") {
        return [
            "AWS Cloud Practitioner",
            "Learn IAM",
            "Learn EC2",
            "Learn Lambda",
            "Build AWS Project",
            "Apply for Internship"
        ];
    }

    if (role === "ML Engineer") {
        return [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "AWS SageMaker",
            "Deploy ML Models"
        ];
    }

    if (role === "DevOps Engineer") {
        return [
            "Linux",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "AWS DevOps"
        ];
    }

    if (role === "Frontend Developer") {
        return [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Build Portfolio Projects"
        ];
    }

    return [
        "Data Structures",
        "Projects",
        "Internships"
    ];
}

module.exports = { getRoadmap };