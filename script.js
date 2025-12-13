// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("light");
};

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});
reveals.forEach(r => observer.observe(r));

// PROJECT DATA
const projects = {
    hexaload: {
        title: "Hexaload Robot",
        desc: "Autonomous hexapod robot for load transportation.",
        tech: ["Embedded", "Robotics"],
        img: "images/hexaload.jpg",
        git: "#"
    },
    parking: {
        title: "Smart Parking",
        desc: "Sensor-based parking automation.",
        tech: ["Embedded", "Sensors"],
        img: "images/parking.jpg",
        git: "#"
    },
    pipeline: {
        title: "Pipeline Corrosion Detection",
        desc: "AI-based corrosion detection system.",
        tech: ["AI", "Python"],
        img: "images/pipeline.jpg",
        git: "#"
    },
    maze: {
        title: "Maze Solver PCB",
        desc: "Custom PCB for autonomous maze solver robot.",
        tech: ["PCB Design"],
        img: "images/maze_pcb.jpg",
        git: "#"
    }
};

// MODAL LOGIC
const modal = document.getElementById("projectModal");
const img = document.getElementById("modalImg");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const tech = document.getElementById("modalTech");
const git = document.getElementById("modalGit");

function openProject(key) {
    const p = projects[key];
    modal.style.display = "block";
    img.src = p.img;
    title.innerText = p.title;
    desc.innerText = p.desc;
    tech.innerHTML = p.tech.map(t => `<li>${t}</li>`).join("");
    git.href = p.git;
}

function closeProject() {
    modal.style.display = "none";
}
