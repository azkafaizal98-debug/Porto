// ==========================================
// 1. LOOPING HOVER EFFECTS (NAV, LOGO, CARD)
// ==========================================
function applyHoverEffect(elements, scaleVal = "1.2", colorVal = "rgb(255, 81, 0)") {
    elements.forEach(el => {
        if (!el) return;
        el.addEventListener("mousemove", () => {
            el.style.transform = `scale(${scaleVal})`;
            if (colorVal) el.style.color = colorVal;
            el.style.transition = "0.8s";
        });
        el.addEventListener("mouseout", () => {
            el.style.transform = "none";
            el.style.color = "";
        });
    });
}

// Terapkan ke Navigasi (nav s/d nav6)
applyHoverEffect([1, 2, 3, 4, 5, 6].map(i => document.getElementById(`nav${i === 1 ? '' : i}`)));

// Terapkan ke Logo (hover s/d hover3)
applyHoverEffect([1, 2, 3].map(i => document.getElementById(`hover${i === 1 ? '' : i}`)), "1.2", "orange");

// Terapkan ke Card (card s/d card3)
applyHoverEffect([1, 2, 3].map(i => document.getElementById(`card${i === 1 ? '' : i}`)), "1.1", null);


// ==========================================
// 2. DARK / LIGHT THEME TOGGLE
// ==========================================
const them = document.getElementById("them");
const body = document.getElementById("tema");
const navElements = [1, 2, 3, 4, 5, 6].map(i => document.getElementById(`nav${i === 1 ? '' : i}`));

if (them) {
    them.addEventListener("click", () => {
        const isMoon = them.classList.contains("fa-moon");
        them.classList.toggle("fa-moon", !isMoon);
        them.classList.toggle("fa-sun", isMoon);
        if (body) body.classList.toggle("mode", isMoon);
        
        them.style.color = isMoon ? "#FFA94D" : "#DDE1E7";
        navElements.forEach(nav => {
            if (nav) nav.style.color = isMoon ? "rgb(255, 81, 0)" : "white";
        });
    });
}


// ==========================================
// 3. TYPE SECTION & BUTTON TOGGLE
// ==========================================
const btn = document.getElementById("btn");
const type = document.getElementById("type");

if (btn && type) {
    btn.addEventListener("click", () => {
        const isHidden = type.style.display === "none" || getComputedStyle(type).display === "none";
        
        if (isHidden) {
            type.style.display = "block";
            type.classList.add("animate__jackInTheBox");
            setTimeout(() => type.classList.remove("animate__jackInTheBox"), 1000);
        } else {
            type.classList.add("animate__hinge");
            setTimeout(() => {
                type.style.display = "none";
                type.classList.remove("animate__hinge");
            }, 2000);
        }

        // Toggle Style Button
        const isWhite = btn.style.background === "white";
        btn.style.background = isWhite ? "none" : "white";
        btn.style.color = isWhite ? "white" : "black";
        btn.style.border = isWhite ? "2px solid white" : "2px solid black";
        btn.textContent = isWhite ? "Click Me to Type" : "Click Me To Remove";
    });

    btn.addEventListener("mousemove", () => {
        btn.style.transition = "0.8s";
        btn.style.boxShadow = "1px 2px 12px var(--orange)";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.transition = "0.8s";
        btn.style.boxShadow = "none";
    });
}


// ==========================================
// 4. SKILLS INTERACTION
// ==========================================
const skills = [
    document.getElementById("skill"),
    document.getElementById("skill2"),
    document.getElementById("skill3"),
    document.getElementById("skill4"),
    document.getElementById("skill5")
];
const img = document.getElementById("img");
const skillColors = ["orange", "rgb(52, 52, 219)", "orangered", "yellow", "black"];

skills.forEach((skillEl, idx) => {
    if (!skillEl) return;
    skillEl.addEventListener("click", () => {
        skills.forEach((s, i) => {
            if (!s) return;
            const isActive = i === idx;
            s.style.background = isActive ? skillColors[i] : "none";
            s.style.color = isActive ? "white" : (i === 1 ? "rgb(52, 52, 219)" : (i === 3 ? "yellow" : (i === 4 ? "black" : (i === 2 ? "white" : "orange"))));
            s.style.transform = isActive ? "scale(1.1)" : "none";
            s.style.transition = isActive ? "1s" : "";
        });
        if (img) img.style.transform = "none";
    });
});

if (img) {
    img.addEventListener("click", () => {
        skills.forEach((s, i) => {
            if (!i) return;
            if (!s) return;
            s.style.background = "none";
            s.style.color = i === 1 ? "rgb(52, 52, 219)" : (i === 3 ? "yellow" : (i === 4 ? "black" : "orange"));
            s.style.transform = "none";
        });
        img.style.transform = "scale(1.1)";
        img.style.transition = "1s";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "none";
    });
}



// Data detail skill kamu
const skillData = {
    backend: `
        <strong>[+] Backend & Programming Languages:</strong><br>
        - JavaScript / Node.js & Express.js (Web & API Development)<br>
        - Telegram Bot Automation (Telegraf Framework)<br>
        - Java (Data Structures & Algorithms: Stack, Queue, BFS, DFS)<br>
        - R Language (Data Analysis & Statistical Computing)
    `,
    database: `
        <strong>[+] Database & Containerization:</strong><br>
        - MariaDB & MySQL (Relational DB, Foreign Keys, Replication)<br>
        - MongoDB (NoSQL Database Management)<br>
        - Docker & phpMyAdmin (Local Environment & Container Services)<br>
        - Database Migration & Design (ERD / draw.io)
    `,
    system: `
        <strong>[+] Operating Systems & Developer Tools:</strong><br>
        - Arch Linux (Hyprland Customization & Shell Scripting)<br>
        - Debian Server (VirtualBox Administration & Replication)<br>
        - Termux (Android Local Server Environment)<br>
        - Git & GitHub (Version Control & Repository Management)
    `
};

function showSkill(category) {
    // Ubah active class pada tombol
    const buttons = document.querySelectorAll('.skill-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Tampilkan data ke dalam terminal box dengan efek sederhana
    const terminalBody = document.getElementById('terminal-content');
    terminalBody.style.opacity = 0;
    
    setTimeout(() => {
        terminalBody.innerHTML = skillData[category];
        terminalBody.style.opacity = 1;
    }, 150);
}

// Jalankan default kategori pertama saat halaman dimuat
window.onload = () => {
    showSkill('backend');
};



// Database Detail Skill Lengkap Kamu
const skillDetails = {
    js: {
        title: "JavaScript / Node.js",
        desc: "Pengembangan aplikasi backend web, REST API dengan Express.js, dan otomatisasi Bot Telegram.",
        tags: ["Node.js", "Express.js", "Telegraf", "ES6+"]
    },
    html: {
        title: "HTML5 & Web Structuring",
        desc: "Membangun kerangka dasar halaman web yang semantik, responsif, terstruktur, serta siap diintegrasikan dengan CSS dan Bootstrap.",
        tags: ["HTML5", "Semantic Markup", "Responsive Design"]
    },
    css: {
        title: "CSS3 & Styling",
        desc: "Mengatur tata letak web menggunakan Flexbox, Grid, kustomisasi tema visual, serta animasi bergaya retro/pixel.",
        tags: ["CSS3", "Flexbox", "Grid", "UI/UX Styling"]
    },
    r: {
        title: "R Programming Language",
        desc: "Praktik analisis data, pengolahan statistik dasar, serta pembuatan *dataframe* untuk kebutuhan komputasi analitis.",
        tags: ["R Studio", "Data Frames", "Statistical Computing"]
    },
    mariadb: {
        title: "MySQL & MariaDB",
        desc: "Perancangan database relasional, pembuatan tabel, relasi foreign key, pengelolaan data, hingga replikasi master-slave.",
        tags: ["MySQL", "MariaDB", "Relational DB", "phpMyAdmin"]
    },
    docker: {
        title: "Docker & Containerization",
        desc: "Menjalankan & mengisolasi layanan lokal seperti MariaDB, MySQL, dan phpMyAdmin tanpa instalasi native.",
        tags: ["Docker CLI", "Container", "Volume", "phpMyAdmin"]
    },
    java: {
        title: "Java Programming",
        desc: "Pemahaman struktur data dan algoritma seperti Stack, Queue, BFS, DFS, dan Quick Sort.",
        tags: ["OOP", "Data Structures", "Algorithms"]
    },
    linux: {
        title: "Arch Linux & System Admin",
        desc: "Penggunaan OS harian dengan Hyprland, Kitty terminal, Shell Scripting, serta administrasi Debian server di VirtualBox.",
        tags: ["Arch Linux", "Hyprland", "Bash/Fish", "Debian Server"]
    },
    github: {
        title: "Git & GitHub",
        desc: "Manajemen versi kode, branching, commit, dan deployment static site menggunakan GitHub Pages.",
        tags: ["Git CLI", "GitHub", "Version Control"]
    }
};

function openSkillModal(skillKey) {
    const data = skillDetails[skillKey];
    if (!data) return;

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;

    const tagsBox = document.getElementById('modal-tags');
    tagsBox.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');

    document.getElementById('skill-modal').style.display = 'flex';
}

function closeSkillModal(forceClose) {
    if (forceClose === true || event.target.id === 'skill-modal') {
        document.getElementById('skill-modal').style.display = 'none';
    }
}