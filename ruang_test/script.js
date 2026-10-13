// Database Detail Skill Lengkap Kamu
const skillDetails = {
    js: {
        title: "JavaScript / Node.js",
        desc: "Pengembangan aplikasi backend web, REST API dengan Express.js, dan otomatisasi Bot Telegram.",
        tags: ["Node.js", "Express.js", "Telegraf", "ES6+"]
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
    mariadb: {
        title: "MariaDB & SQL",
        desc: "Merancang database relasional, foreign keys, query SQL, serta konfigurasi replikasi master-slave.",
        tags: ["MariaDB", "MySQL", "MongoDB", "SQL Queries"]
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