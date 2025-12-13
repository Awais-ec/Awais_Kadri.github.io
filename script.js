const modal = document.getElementById("projectModal");
const title = document.getElementById("projectTitle");
const description = document.getElementById("projectDescription");
const tech = document.getElementById("projectTech");
const github = document.getElementById("projectGitHub");

function openProject(project) {
    modal.style.display = "block";
    tech.innerHTML = "";

    if (project === "hexaload") {
        title.innerText = "Hexaload – Load Carrying Hexapod Robot";
        description.innerText =
            "Hexaload is a six-legged robotic system designed to carry loads across uneven terrain. "
            + "The project focuses on stability, balance, and autonomous movement. "
            + "It received SSIP funding and won recognition at Robofest 4.0.";

        ["Embedded Systems", "Robotics", "Motor Control", "PCB Design"].forEach(t =>
            tech.innerHTML += `<li>${t}</li>`
        );

        github.href = "https://github.com/yourusername/hexaload";
    }

    if (project === "parking") {
        title.innerText = "Smart Parking System";
        description.innerText =
            "An embedded-system-based smart parking solution that uses sensors to detect "
            + "vehicle presence and efficiently manage parking slots. "
            + "The system reduces congestion and manual intervention.";

        ["Embedded Systems", "Sensors", "C Programming"].forEach(t =>
            tech.innerHTML += `<li>${t}</li>`
        );

        github.href = "https://github.com/yourusername/smart-parking";
    }

    if (project === "pipeline") {
        title.innerText = "Sea Pipeline Corrosion Detection System";
        description.innerText =
            "An AI-based system developed to detect corrosion in underwater pipelines "
            + "using image analysis techniques. This project aims to improve maintenance "
            + "and prevent industrial failures.";

        ["Python", "AI", "Image Processing"].forEach(t =>
            tech.innerHTML += `<li>${t}</li>`
        );

        github.href = "https://github.com/yourusername/pipeline-corrosion-detection";
    }
}

function closeProject() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        closeProject();
    }
};
