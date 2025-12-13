const modal = document.getElementById("projectModal");
const title = document.getElementById("projectTitle");
const desc = document.getElementById("projectDescription");
const tech = document.getElementById("projectTech");
const github = document.getElementById("projectGitHub");

function openProject(project) {
    modal.style.display = "block";
    tech.innerHTML = "";

    const data = {
        hexaload: {
            title: "Hexaload – Hexapod Robot",
            desc: "A six-legged autonomous robot designed for load transportation on uneven terrain. Focused on stability, balance, and embedded motor control. SSIP funded and Robofest recognized.",
            tech: ["Embedded Systems", "Robotics", "Motor Control", "PCB Design"],
            link: "https://github.com/yourusername/hexaload"
        },
        parking: {
            title: "Smart Parking System",
            desc: "An embedded system that detects vehicle presence using sensors and manages parking slots efficiently.",
            tech: ["Embedded Systems", "Sensors", "C Programming"],
            link: "https://github.com/yourusername/smart-parking"
        },
        pipeline: {
            title: "Sea Pipeline Corrosion Detection",
            desc: "AI-based system to detect corrosion in underwater pipelines using image processing techniques.",
            tech: ["Python", "AI", "Image Processing"],
            link: "https://github.com/yourusername/pipeline-corrosion"
        },
        maze: {
            title: "PCB for Maze Solver Robot",
            desc: "Designed a custom PCB for a maze-solving robot focusing on compact layout, motor control, and sensor integration.",
            tech: ["PCB Design", "Embedded Systems", "Motor Drivers"],
            link: "https://github.com/yourusername/maze-solver-pcb"
        }
    };

    const p = data[project];
    title.textContent = p.title;
    desc.textContent = p.desc;
    p.tech.forEach(t => tech.innerHTML += `<li>${t}</li>`);
    github.href = p.link;
}

function closeProject() {
    modal.style.display = "none";
}

window.onclick = e => {
    if (e.target === modal) closeProject();
};
