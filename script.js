/* ================= THEME TOGGLE ================= */
const toggle = document.getElementById("themeToggle");
const prefersLight = localStorage.getItem("theme") === "light";

if (prefersLight) {
    document.body.classList.add("light");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggle.textContent = isLight ? "☀️" : "🌙";
});

/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".section, .project-card, .skill-box");
reveals.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

/* ================= MAGNETIC EFFECT ================= */
document.querySelectorAll(".btn").forEach(btn => {
    btn.classList.add("magnetic");
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
    });
});

/* ================= PROJECT MODAL ================= */
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
            desc: "A six-legged autonomous robot designed for load transportation across uneven terrain. Focused on balance, stability, and embedded motor control. SSIP funded & Robofest recognized.",
            tech: ["Embedded Systems", "Robotics", "Motor Control", "PCB Design"],
            link: "https://github.com/yourusername/hexaload"
        },
        parking: {
            title: "Smart Parking System",
            desc: "Embedded parking automation using sensors to detect vehicle presence and manage slots efficiently.",
            tech: ["Embedded Systems", "Sensors", "C Programming"],
            link: "https://github.com/yourusername/smart-parking"
        },
        pipeline: {
            title: "Sea Pipeline Corrosion Detection",
            desc: "AI-based image analysis system to detect corrosion in underwater pipelines, improving maintenance planning.",
            tech: ["Python", "AI", "Image Processing"],
            link: "https://github.com/yourusername/pipeline-corrosion"
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

window.onclick = e => { if (e.target === modal) closeProject(); };
