const modal = document.getElementById("projectModal");
const title = document.getElementById("projectTitle");
const desc = document.getElementById("projectDescription");
const tech = document.getElementById("projectTech");
const github = document.getElementById("projectGitHub");

function openProject(project) {
    modal.style.display = "block";
    tech.innerHTML = "";

    if (project === "hexaload") {
        title.innerText = "Hexaload – Hexapod Robot";
        desc.innerText =
            "Hexaload is a six-legged autonomous robot designed to transport loads across uneven terrain. "
            + "The project focuses on mechanical stability, embedded motor control, and balance optimization. "
            + "It received SSIP funding and recognition at Robofest 4.0.";

        ["Embedded Systems", "Robotics", "Motor Control", "PCB Design"].forEach(t =>
            tech.innerHTML += `<li>${t}</li>`
        );

        github.href = "https://github.com/yourusername/hexaload";
    }

    if (project === "parking") {
        title.innerText = "Smart Parking System";
        desc.innerText =
            "An embedded parking automation system using sensors to detect vehicle presence. "
            + "It improves parking efficiency and reduces congestion through real-time monitoring.";

        ["Embedded Systems", "Sensors", "C Programming"].forEach(t =>
            tech.innerHTML += `<li>${t}</li>`
        );

        github.href = "https://github.com/yourusername/smart-parking";
    }

    if (project === "pipeline") {
        title.innerText = "Sea Pipeline Corrosion Detection";
        desc.innerText =
            "An AI-powered solution that detects corrosion in underwater pipelines using image processing. "
            + "The system helps prevent industrial failures and improves maintenance planning.";

        ["Python", "AI", "Image Processing"].forEach(t =>
            tech.innerHTML += `<li>${t}</li>`
        );

        github.href = "https://github.com/yourusername/pipeline-corrosion";
    }
}

function closeProject() {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target === modal) closeProject();
};
