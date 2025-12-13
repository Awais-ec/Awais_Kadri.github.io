const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};

const modal = document.getElementById("projectModal");
const title = document.getElementById("projectTitle");
const desc = document.getElementById("projectDescription");
const tech = document.getElementById("projectTech");
const github = document.getElementById("projectGitHub");
const image = document.getElementById("projectImage");

const projects = {
    hexaload: {
        title: "Hexaload – Hexapod Robot",
        desc: "Autonomous hexapod robot for load transport.",
        tech: ["Embedded", "Robotics", "PCB"],
        link: "https://github.com/yourusername/hexaload",
        image: "./images/hexaload.jpg"
    },
    parking: {
        title: "Smart Parking System",
        desc: "Sensor-based embedded parking system.",
        tech: ["Embedded", "Sensors", "C"],
        link: "https://github.com/yourusername/smart-parking",
        image: "./images/parking.jpg"
    },
    pipeline: {
        title: "Pipeline Corrosion Detection",
        desc: "AI-based corrosion detection system.",
        tech: ["Python", "AI"],
        link: "https://github.com/yourusername/pipeline",
        image: "./images/pipeline.jpg"
    },
    maze: {
        title: "PCB for Maze Solver Robot",
        desc: "Custom PCB for autonomous maze solving.",
        tech: ["PCB Design", "Embedded"],
        link: "https://github.com/yourusername/maze-pcb",
        image: "./images/maze_pcb.jpg"
    }
};

function openProject(key) {
    const p = projects[key];
    modal.style.display = "block";
    title.textContent = p.title;
    desc.textContent = p.desc;
    image.src = p.image;
    tech.innerHTML = p.tech.map(t => `<li>${t}</li>`).join("");
    github.href = p.link;
}

function closeProject() {
    modal.style.display = "none";
}

window.onclick = e => {
    if (e.target === modal) closeProject();
};
