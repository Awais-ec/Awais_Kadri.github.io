/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};

/* MODAL ELEMENTS */
const modal = document.getElementById("projectModal");
const title = document.getElementById("projectTitle");
const desc = document.getElementById("projectDescription");
const tech = document.getElementById("projectTech");
const github = document.getElementById("projectGitHub");
const image = document.getElementById("projectImage");
const liveBtn = document.getElementById("projectLive");


/* PROJECT DATA */
const projects = {
    hexaload: {
        title: "Hexaload – Hexapod Robot",
        desc: "A six-legged autonomous robot designed to carry loads across uneven terrain. Focused on stability, balance, and embedded motor control. SSIP funded and Robofest award winner.",
        tech: ["Embedded Systems", "Robotics", "Motor Control", "PCB Design"],
        link: "https://github.com/Awais-ec/Hexaload",
        image: "images/hexaload.jpg"
    },
    parking: {
        title: "Smart Parking System",
        desc: "Embedded solution using sensors to detect vehicle presence and manage parking slots efficiently.",
        tech: ["Embedded Systems", "Sensors", "C Programming"],
        link: "https://github.com/Awais-ec/Smart-Parking-System",
        image: "images/parking.jpg"
    },
  pipeline: {
    title: "Sea Pipeline Corrosion Detection",
    desc: "AI-based image analysis system to detect corrosion in underwater pipelines for industrial safety.",
    tech: ["Python", "AI", "Image Processing"],
    link: "https://github.com/Awais-ec/corrosion--app",
    live: "https://lnkd.in/g8b2PhfW",
    image: "images/pipeline.jpg"
},

    maze: {
        title: "PCB for Maze Solver Robot",
        desc: "Custom PCB designed for an autonomous maze-solving robot with optimized routing, compact layout, and efficient motor driver integration.",
        tech: ["PCB Design", "Embedded Systems", "Motor Drivers"],
        link: "https://github.com/Awais-ec/PCB-Design-Maze-solver",
        image: "images/maze_pcb.jpg"
    }
};

function openProject(key) {
    const p = projects[key];
    modal.style.display = "block";

    // Basic content
    title.textContent = p.title;
    desc.textContent = p.desc;
    image.src = p.image;
    image.alt = p.title;

    // Technologies list
    tech.innerHTML = "";
    p.tech.forEach(t => {
        tech.innerHTML += `<li>${t}</li>`;
    });

    // -------- BUTTON LOGIC --------

    // View Details button
    if (p.link) {
        github.style.display = "inline-block";
        github.href = p.link;
        github.textContent = "View Details";
    } else {
        github.style.display = "none"; // Hexaload
    }

    // Live App button (ONLY Pipeline)
    if (p.live) {
        liveBtn.style.display = "inline-block";
        liveBtn.href = p.live;
    } else {
        liveBtn.style.display = "none";
    }
}
// ===== MODAL CLOSE LOGIC (FINAL FIX) =====

// Close button
document.getElementById("closeModal").addEventListener("click", closeProject);

// Click outside modal box
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeProject();
    }
});

// ESC key support
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
        closeProject();
    }
});

// Close function
function closeProject() {
    modal.style.display = "none";
}





