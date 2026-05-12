/* ============================================
   MONOWAR ISLAM — ACADEMIC PORTFOLIO
   script.js — All Data + Interactive Logic
   ============================================ */

// ============================================
// EDITABLE DATA — Replace with your own info
// ============================================

const PERSONAL = {
  name: "Monowar Islam",
  nativeName: "",
  role: "ML Engineer | DL Engineer | CV Researcher",
  university: "Faridpur Engineering College",
  universityFull: "Faridpur Engineering College (University of Dhaka)",
  location: "Dhaka, Bangladesh",
  email: "monowar.1002@fec.edu.bd",
  phone: "+8801761672327",
  linkedin: "https://linkedin.com/in/monowarcse",
  github: "https://github.com/dewshishir",
  scholar: "https://scholar.google.com/citations?user=hGRMCpAAAAAJ&hl=en",
  kaggle: "https://kaggle.com/monowarislamshishir",
  medium: "https://medium.com/@monowarcse",
  twitter: "https://x.com/haiShishir",
  facebook: "https://facebook.com/monowarcse",
  instagram: "https://instagram.com/haishishir",
  portfolio: "#",
  cv: "https://drive.google.com/file/d/1XIDrnXDlnPqRVADB2jngCmpIxRIHniWv/view?usp=drive_link",
  profileImage: "profile.jpg",
  greeting: "Hi there, I'm",
  heroBio: `I am a Computer Science and Engineering student passionate about Machine Learning, 
    Deep Learning, Computer Vision, and AI research. I enjoy building real-world AI systems, 
    solving challenging problems, and conducting research that creates practical impact.`,
  typingStrings: [
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Computer Vision Researcher",
    "Competitive Programmer",
    "Open-Source Builder"
  ]
};

const RESEARCH_INTERESTS = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Medical AI",
  "Object Detection",
  "Image Classification",
  "Explainable AI"
];

const ABOUT = {
  biography: `I am a CSE student at Faridpur Engineering College (affiliated with University of Dhaka) 
    with a deep passion for Machine Learning, Deep Learning, and Computer Vision. As an active researcher, 
    I have authored research papers on AI-driven agricultural solutions. I am also a competitive programmer 
    who has solved 400+ problems across multiple online judges and participated in ICPC preliminary contests. 
    I enjoy building open-source AI projects, contributing to the ML community through technical blog posts, 
    and developing practical systems that bridge the gap between research and real-world applications.`,
  skills: [
    {
      category: "Programming",
      items: ["Python", "C++", "Java", "C"]
    },
    {
      category: "ML / DL",
      items: ["CNN", "Transfer Learning", "Model Evaluation", "Data Augmentation"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Django"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "VS Code", "Streamlit", "Google Colab", "Kaggle"]
    },
    {
      category: "Databases",
      items: ["SQLite", "MySQL"]
    },
    {
      category: "Core Research Areas",
      items: ["Computer Vision", "Image Classification", "Object Detection"]
    }
  ],
  achievements: [
    "Published and presented MSLeafNet at ECCT 2026 (Paper ID: 267) — Malabar Spinach Leaf Disease Classification using Transfer Learning",
    "Published research paper in Journal of Bangladesh Academy of Sciences (2026)",
    "Competed in CUET CSE Fest Datathon 2025 — Slang Meme Image Classification",
    "Solved 400+ problems on Codeforces, CodeChef, LeetCode, and Beecrowd",
    "Participated in 2025 ICPC Asia Dhaka Regional Online Preliminary Contest",
    "Participated in 2021 ICPC Asia Dhaka Regional Online Preliminary Contest",
    "Built mango variety classifier achieving 98.01% accuracy with EfficientNetB0",
    
  ]
};

const PUBLICATIONS = [
  {
    "title": "MSLeafNet: Multi-Classes Classification with Transfer Learning of Imbalanced Malabar Spinach Leaf Diseases",
    "authors": "Monowar Islam, Safaruzzaman Shovo, Md Khalilur Rahman Faysal, Azizul Hakim Topo, Sameya Akter",
    "venue": "International Conference on Electrical, Computer and Communication Technologies (ECCT 2026), Dhaka International University, Bangladesh, May 07-09, 2026",
    "badge": "Conference",
    "thumbnail": "malabar.jpeg",
    "pdf": "https://drive.google.com/file/d/1PeNi_tzL1hgeZSAVXy3YzkdMZmf2JHIM/view?usp=sharing",
    "code": "",
    "project": "",
    "video": ""
  },
  {
    title: "Empowering Local Agriculture: A Deep Learning-Powered Web System for Identifying Bangladeshi Mango Varieties",
    authors: "Monowar Islam, Safaruzzaman Shovo",
    venue: "Journal of Bangladesh Academy of Sciences — Vol. 50, Supplement 1, 2026, pp. 03",
    badge: "Journal",
    thumbnail: "Mango.png",
    pdf: "https://bas.org.bd/storage/app/uploads/public/69d/059/2a1/69d0592a1ef95605755782.pdf",
    code: "",
    project: "",
    video: ""
  }
  
];

const PROJECTS = [
  {
    title: "Bangladeshi Mango Variety Classifier",
    tech: ["Deep Learning", "EfficientNetB0", "Streamlit"],
    description: "Built a mango classification system achieving 98.01% accuracy for Bangladeshi mango variety prediction from uploaded images.",
    link: "#"
  },
  {
    title: "Road Scene Object Detection — Improved YOLO",
    tech: ["YOLOv8", "Computer Vision", "OpenCV"],
    description: "Built a road scene object detection system optimized for dense Dhaka traffic and high occlusion scenarios.",
    link: "#"
  },
  {
    title: "E-Book Subscription Platform",
    tech: ["Django", "Python", "SQLite", "Stripe"],
    description: "Built subscription-based ebook platform with payment integration, user auth, and a reading dashboard.",
    link: "#"
  },
  {
    title: "Wireless Notice Board using GSM",
    tech: ["Arduino IDE", "Proteus"],
    description: "Built GSM based notice board for remote message display through SMS communication.",
    link: "#"
  },
  {
    title: "Smart Dustbin",
    tech: ["Arduino IDE", "Proteus"],
    description: "Built automated dustbin using ultrasonic sensor and servo motor for contactless waste disposal.",
    link: "#"
  }
];

const COMPETITIONS = [
  {
    title: "400+ Problems Solved",
    description: "Solved 400+ problems across Codeforces, CodeChef, LeetCode, and Beecrowd.",
    link: "",
    icon: "fa-code"
  },
  {
    title: "Slang Meme Image Classification — CUET CSE Fest Datathon 2025",
    description: "Deep learning-based slang meme image classification competition.",
    link: "https://drive.google.com/file/d/1vm0QxD_JG7g9zYe0e4e9y-b855PJT0G6/view?usp=drive_link",
    icon: "fa-trophy"
  },
  {
    title: "2025 ICPC Asia Dhaka Regional Online Preliminary",
    description: "Participated in the 2025 ICPC Asia Dhaka Regional Site Online Preliminary Contest.",
    link: "https://drive.google.com/file/d/1XCUcmxhbOl5LTdBRkOnM-xolVJCEmHzn/view?usp=drive_link",
    icon: "fa-medal"
  },
  {
    title: "2021 ICPC Asia Dhaka Regional Online Preliminary",
    description: "Participated in the 2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest.",
    link: "https://drive.google.com/file/d/1nKNpXNySxToOGwHMSlUdF2Os26Is_umT/view?usp=drive_link",
    icon: "fa-medal"
  }
];

const CERTIFICATIONS = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    link: "https://www.coursera.org/account/accomplishments/verify/7BLE3KF4RXZO",
    icon: "fa-certificate"
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI",
    link: "https://www.coursera.org/account/accomplishments/verify/RV0F78BSNRMA",
    icon: "fa-certificate"
  }
];

const VIDEO_RESUME = {
  youtubeId: "4jiI9Z_kMJU",
  youtubeUrl: "https://www.youtube.com/watch?v=4jiI9Z_kMJU"
};

const BLOGS = [
  {
    title: "Machine Learning Algorithms: A Comprehensive Explanation",
    tags: ["Machine Learning", "Supervised", "Ensemble"],
    description: "A structured breakdown of ML algorithms with practical examples.",
    date: "Oct 28, 2025",
    link: "https://medium.com/@monowarcse"
  },
  {
    title: "CNNs Made Simple: How Computers Learn to See Like Humans",
    tags: ["CNN", "Deep Learning", "Computer Vision"],
    description: "Explains CNNs, feature extraction, pooling layers, and how neural networks process images.",
    date: "Oct 25, 2025",
    link: "https://medium.com/@monowarcse"
  },
  {
    title: "Logistic Regression: The Friendly Guide to Yes/No Predictions",
    tags: ["Logistic Regression", "Classification", "ML"],
    description: "Explains sigmoid function and classification intuition in a beginner-friendly way.",
    date: "Oct 24, 2025",
    link: "https://medium.com/@monowarcse"
  },
  {
    title: "Computer Vision in the Wild: From Pixels to Practical Magic",
    tags: ["Computer Vision", "AI", "Real-World"],
    description: "Explains real-world computer vision applications from autonomous vehicles to medical imaging.",
    date: "",
    link: "https://medium.com/@monowarcse"
  }
];

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Faridpur Engineering College (University of Dhaka)",
    duration: "Feb 2022 – Present",
    location: "Faridpur, Bangladesh"
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Govt. Edward College",
    duration: "Jun 2018 – Jun 2021",
    location: "Pabna, Bangladesh"
  }
];

// ============================================
// DOM RENDERING
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  renderHero();
  renderAbout();
  renderPublications();
  renderProjects();
  renderCompetitions();
  renderBlogs();
  renderEducation();
  renderCertifications();
  renderContact();
  initScrollProgress();
  initActiveNav();
  initThemeToggle();
  initHamburger();
  initScrollTop();
  initFadeAnimations();
  initTypingEffect();
  initLazyImages();
});

// ---------- Sidebar ----------
function renderSidebar() {
  const el = document.getElementById("sidebar-content");
  el.innerHTML = `
    <div class="profile-img-wrapper">
      <img src="${PERSONAL.profileImage}" alt="${PERSONAL.name} profile photo" loading="lazy" />
    </div>
    <h1 class="sidebar-name">${PERSONAL.name}</h1>
    ${PERSONAL.nativeName ? `<p class="sidebar-native-name">${PERSONAL.nativeName}</p>` : ""}
    <p class="sidebar-title">${PERSONAL.role}</p>
    <div class="sidebar-info">
      <div class="sidebar-info-item"><i class="fas fa-university"></i><span>${PERSONAL.university}</span></div>
      <div class="sidebar-info-item"><i class="fas fa-map-marker-alt"></i><span>${PERSONAL.location}</span></div>
      <div class="sidebar-info-item"><i class="fas fa-envelope"></i><a href="mailto:${PERSONAL.email}">${PERSONAL.email}</a></div>
      <div class="sidebar-info-item"><i class="fas fa-phone"></i><a href="tel:${PERSONAL.phone}">${PERSONAL.phone}</a></div>
    </div>
    <div class="sidebar-social">
      <a href="${PERSONAL.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="${PERSONAL.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="${PERSONAL.kaggle}" target="_blank" rel="noopener" aria-label="Kaggle"><i class="fab fa-kaggle"></i></a>
      <a href="${PERSONAL.medium}" target="_blank" rel="noopener" aria-label="Medium"><i class="fab fa-medium"></i></a>
      <a href="${PERSONAL.twitter}" target="_blank" rel="noopener" aria-label="Twitter / X"><i class="fab fa-x-twitter"></i></a>
      <a href="${PERSONAL.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="${PERSONAL.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="${PERSONAL.scholar}" target="_blank" rel="noopener" aria-label="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
    </div>
    <a href="${PERSONAL.cv}" class="cv-btn" target="_blank" rel="noopener"><i class="fas fa-download"></i> Download CV</a>
  `;
}

// ---------- Hero ----------
function renderHero() {
  const el = document.getElementById("hero-content");
  el.innerHTML = `
    <p class="hero-greeting">${PERSONAL.greeting}</p>
    <h2 class="hero-name">${PERSONAL.name}</h2>
    <div class="hero-typing"><span id="typing-text"></span><span class="cursor"></span></div>
    <p class="hero-bio">${PERSONAL.heroBio}</p>
    <div class="hero-details">
      <div class="hero-detail"><i class="fas fa-university"></i>${PERSONAL.universityFull}</div>
      <div class="hero-detail"><i class="fas fa-map-marker-alt"></i>${PERSONAL.location}</div>
    </div>
    <div class="hero-interests" id="hero-interests"></div>
  `;
  const interestsEl = document.getElementById("hero-interests");
  RESEARCH_INTERESTS.forEach(item => {
    const tag = document.createElement("span");
    tag.className = "interest-tag";
    tag.textContent = item;
    interestsEl.appendChild(tag);
  });
}

// ---------- About ----------
function renderAbout() {
  const el = document.getElementById("about-content");
  let html = `<p class="about-bio">${ABOUT.biography}</p>`;

  // Video Resume
  html += `
<div class="video-resume">
    
    <a href="${VIDEO_RESUME.youtubeUrl}" 
       target="_blank" 
       rel="noopener noreferrer"
       class="video-thumbnail-link">
       
        <img
            src="https://img.youtube.com/vi/${VIDEO_RESUME.youtubeId}/maxresdefault.jpg"
            alt="Video Resume Thumbnail"
            class="video-thumbnail"
        />
        
        <div class="play-button">
            <i class="fab fa-youtube"></i>
        </div>
    </a>

    <a href="${VIDEO_RESUME.youtubeUrl}" 
       class="video-yt-btn" 
       target="_blank" 
       rel="noopener noreferrer">
        <i class="fab fa-youtube"></i> Watch Video Resume
    </a>

</div>
`;

  html += `<h3 class="about-subsection-title"><i class="fas fa-cogs"></i> Skills & Tech Stack</h3>`;
  html += `<div class="skills-grid">`;
  ABOUT.skills.forEach(skill => {
    html += `
      <div class="skill-card">
        <div class="skill-card-title">${skill.category}</div>
        <div class="skill-card-items">
          ${skill.items.map(i => `<span class="skill-item">${i}</span>`).join("")}
        </div>
      </div>`;
  });
  html += `</div>`;

  html += `<h3 class="about-subsection-title"><i class="fas fa-trophy"></i> Achievements</h3>`;
  html += `<div class="achievements-list">`;
  ABOUT.achievements.forEach(a => {
    html += `<div class="achievement-item"><i class="fas fa-award"></i><span>${a}</span></div>`;
  });
  html += `</div>`;

  el.innerHTML = html;
}

// ---------- Publications ----------
function renderPublications() {
  const el = document.getElementById("publications-content");
  let html = `<div class="pub-list">`;
  PUBLICATIONS.forEach(pub => {
    const thumbHtml = pub.thumbnail
      ? `<img src="${pub.thumbnail}" alt="${pub.title}" loading="lazy" />`
      : `<i class="fas fa-file-alt pub-thumb-placeholder"></i>`;

    let links = "";
    if (pub.pdf) links += `<a href="${pub.pdf}" class="pub-link" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> PDF</a>`;
    if (pub.code) links += `<a href="${pub.code}" class="pub-link" target="_blank" rel="noopener"><i class="fas fa-code"></i> Code</a>`;
    if (pub.project) links += `<a href="${pub.project}" class="pub-link" target="_blank" rel="noopener"><i class="fas fa-globe"></i> Project</a>`;
    if (pub.video) links += `<a href="${pub.video}" class="pub-link" target="_blank" rel="noopener"><i class="fas fa-video"></i> Video</a>`;

    html += `
      <div class="pub-card fade-in">
        <div class="pub-thumb">${thumbHtml}</div>
        <div class="pub-content">
          <span class="pub-venue-badge">${pub.badge}</span>
          <h3 class="pub-title">${pub.title}</h3>
          <p class="pub-authors">${pub.authors}</p>
          <p class="pub-venue">${pub.venue}</p>
          <div class="pub-links">${links}</div>
        </div>
      </div>`;
  });
  html += `</div>`;
  el.innerHTML = html;
}

// ---------- Projects ----------
function renderProjects() {
  const el = document.getElementById("projects-content");
  let html = `<div class="projects-grid">`;
  PROJECTS.forEach(proj => {
    html += `
      <div class="project-card fade-in">
        <div class="project-card-header">
          <i class="fas fa-folder-open project-icon"></i>
          ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener" class="project-ext-link" aria-label="Project link"><i class="fas fa-external-link-alt"></i></a>` : ""}
        </div>
        <h3 class="project-card-title">${proj.title}</h3>
        <p class="project-card-desc">${proj.description}</p>
        <div class="project-card-tech">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>`;
  });
  html += `</div>`;
  el.innerHTML = html;
}

// ---------- Competitions ----------
function renderCompetitions() {
  const el = document.getElementById("competitions-content");
  let html = `<div class="competitions-list">`;
  COMPETITIONS.forEach(c => {
    html += `
      <div class="competition-item fade-in">
        <div class="competition-icon"><i class="fas ${c.icon}"></i></div>
        <div class="competition-info">
          <h3 class="competition-title">${c.title}</h3>
          <p class="competition-desc">${c.description}</p>
          ${c.link ? `<a href="${c.link}" class="competition-link" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> View</a>` : ""}
        </div>
      </div>`;
  });
  html += `</div>`;
  el.innerHTML = html;
}

// ---------- Blogs ----------
function renderBlogs() {
  const el = document.getElementById("blogs-content");
  let html = `<div class="blogs-grid">`;
  BLOGS.forEach(blog => {
    html += `
      <a href="${blog.link}" class="blog-card fade-in" target="_blank" rel="noopener">
        <div class="blog-card-top">
          ${blog.date ? `<span class="blog-date"><i class="far fa-calendar-alt"></i> ${blog.date}</span>` : ""}
          <i class="fab fa-medium blog-platform-icon"></i>
        </div>
        <h3 class="blog-card-title">${blog.title}</h3>
        <p class="blog-card-desc">${blog.description}</p>
        <div class="blog-tags">
          ${blog.tags.map(t => `<span class="blog-tag">${t}</span>`).join("")}
        </div>
      </a>`;
  });
  html += `</div>`;
  el.innerHTML = html;
}

// ---------- Certifications ----------
function renderCertifications() {
  const el = document.getElementById("certifications-content");
  let html = `<div class="certifications-list">`;
  CERTIFICATIONS.forEach(cert => {
    html += `
      <div class="cert-item fade-in">
        <div class="cert-icon"><i class="fas ${cert.icon}"></i></div>
        <div class="cert-info">
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-issuer"><i class="fas fa-building"></i> ${cert.issuer}</p>
          ${cert.link ? `<a href="${cert.link}" class="cert-view-btn" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> View Certificate</a>` : ""}
        </div>
      </div>`;
  });
  html += `</div>`;
  el.innerHTML = html;
}

// ---------- Contact ----------
function renderContact() {
  const el = document.getElementById("contact-content");
  el.innerHTML = `
    <div class="contact-wrapper fade-in">
      <div class="contact-info-panel">
        <h3 class="contact-panel-title">Get in Touch</h3>
        <p class="contact-panel-desc">Feel free to reach out for collaborations, research opportunities, or just to say hello!</p>
        <div class="contact-details">
          <div class="contact-detail-item"><i class="fas fa-envelope"></i><a href="mailto:${PERSONAL.email}">${PERSONAL.email}</a></div>
          <div class="contact-detail-item"><i class="fas fa-phone"></i><a href="tel:${PERSONAL.phone}">${PERSONAL.phone}</a></div>
          <div class="contact-detail-item"><i class="fas fa-map-marker-alt"></i><span>${PERSONAL.location}</span></div>
        </div>
      </div>
      <form class="contact-form" id="contact-form" onsubmit="handleContactSubmit(event)">
        <div class="form-row">
          <div class="form-group">
            <label for="contact-name">Name</label>
            <input type="text" id="contact-name" name="name" placeholder="Your name" required />
          </div>
          <div class="form-group">
            <label for="contact-email">Email</label>
            <input type="email" id="contact-email" name="email" placeholder="your@email.com" required />
          </div>
        </div>
        <div class="form-group">
          <label for="contact-subject">Subject</label>
          <input type="text" id="contact-subject" name="subject" placeholder="Subject" required />
        </div>
        <div class="form-group">
          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" placeholder="Write your message..." rows="5" required></textarea>
        </div>
        <button type="submit" class="contact-submit-btn"><i class="fas fa-paper-plane"></i> Send Message</button>
      </form>
    </div>
  `;
}

function handleContactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.contact-submit-btn');
  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = '#10b981';
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.style.background = '';
    e.target.reset();
  }, 2500);
}

// ---------- Education ----------
function renderEducation() {
  const el = document.getElementById("education-content");
  let html = `<div class="timeline">`;
  EDUCATION.forEach(e => {
    html += `
      <div class="timeline-item fade-in">
        <div class="timeline-date">${e.duration}</div>
        <div class="timeline-title">${e.degree}</div>
        <div class="timeline-subtitle">${e.institution}</div>
        ${e.location ? `<div class="timeline-meta"><i class="fas fa-map-marker-alt"></i> ${e.location}</div>` : ""}
      </div>`;
  });
  html += `</div>`;
  el.innerHTML = html;
}

// ============================================
// INTERACTIVE FEATURES
// ============================================

// ---------- Scroll Progress Bar ----------
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrollTop / docHeight) * 100 + "%" : "0%";
  });
}

// ---------- Active Nav Highlighting ----------
function initActiveNav() {
  const sections = document.querySelectorAll(".section, .hero");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  sections.forEach(sec => observer.observe(sec));
}

// ---------- Dark / Light Theme Toggle ----------
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  const icon = btn.querySelector("i");
  const saved = localStorage.getItem("theme");

  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.setAttribute("data-theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
    icon.classList.toggle("fa-moon", isDark);
    icon.classList.toggle("fa-sun", !isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
}

// ---------- Hamburger Menu ----------
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  // Close nav on link click (mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    });
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });
}

// ---------- Scroll to Top ----------
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- Fade-in on Scroll ----------
function initFadeAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // Re-observe dynamically added fade-in elements
  const mo = new MutationObserver(() => {
    document.querySelectorAll(".fade-in:not(.visible)").forEach(el => observer.observe(el));
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

// ---------- Typing Effect ----------
function initTypingEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;
  const strings = PERSONAL.typingStrings;
  let strIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = strings[strIdx];
    el.textContent = current.substring(0, charIdx);

    if (!deleting) {
      charIdx++;
      if (charIdx > current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 70);
    } else {
      charIdx--;
      if (charIdx < 0) {
        deleting = false;
        charIdx = 0;
        strIdx = (strIdx + 1) % strings.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 40);
    }
  }
  type();
}

// ---------- Lazy Load Images ----------
function initLazyImages() {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          observer.unobserve(img);
        }
      });
    });
    document.querySelectorAll("img[data-src]").forEach(img => observer.observe(img));
  }
}
