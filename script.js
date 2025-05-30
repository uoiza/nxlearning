// --- DATA ---
const aiLearningVideos = [
    {
        id: 1,
        title: "How to Use ChatGPT - Beginner Tutorial",
        youtubeId: "JTxsNm9IdYU",
        description: "A step-by-step guide to getting started with ChatGPT for productivity and creativity.",
        thumbnailUrl: "https://img.youtube.com/vi/JTxsNm9IdYU/hqdefault.jpg",
        category: "Chatbot"
    },
    {
        id: 2,
        title: "Ultimate ChatGPT 4o Guide 2025",
        youtubeId: "yFMVT3bcrJo",
        description: "How to use ChatGPT 4o for advanced tasks and automation.",
        thumbnailUrl: "https://img.youtube.com/vi/yFMVT3bcrJo/hqdefault.jpg",
        category: "Chatbot"
    },
    {
        id: 3,
        title: "Deepseek vs. Claude vs. Gemini vs. ChatGPT: AI Demo",
        youtubeId: "19uFkbMKyGI",
        description: "Comparison and demo of Deepseek, Claude, Gemini, and ChatGPT.",
        thumbnailUrl: "https://img.youtube.com/vi/19uFkbMKyGI/hqdefault.jpg",
        category: "Chatbot"
    },
    {
        id: 4,
        title: "GitHub Copilot: AI Coding Assistant Explained",
        youtubeId: "SGUCcjHTmGY",
        description: "Learn how to use GitHub Copilot to write code faster and smarter with AI.",
        thumbnailUrl: "https://img.youtube.com/vi/SGUCcjHTmGY/hqdefault.jpg",
        category: "Coding"
    },
    {
        id: 5,
        title: "Google Gemini AI: What You Need to Know",
        youtubeId: "QwZT7T-TXT0",
        description: "Introduction to Google Gemini AI and its applications in daily life.",
        thumbnailUrl: "https://img.youtube.com/vi/QwZT7T-TXT0/hqdefault.jpg",
        category: "Chatbot"
    },
    {
        id: 6,
        title: "Claude AI by Anthropic: How to Use It",
        youtubeId: "p2XlhMg8PpQ",
        description: "A practical guide to using Claude AI for writing, brainstorming, and more.",
        thumbnailUrl: "https://img.youtube.com/vi/p2XlhMg8PpQ/hqdefault.jpg",
        category: "Chatbot"
    },
    {
        id: 7,
        title: "How to Use the New Canva AI Features (Create 2025 Update)!",
        youtubeId: "rQPEvmr-TQc",
        description: "Learn about Canva's latest AI-powered features for design and content creation.",
        thumbnailUrl: "https://img.youtube.com/vi/rQPEvmr-TQc/hqdefault.jpg",
        category: "Design"
    },
    {
        id: 8,
        title: "Full Gamma AI App Tutorial For Beginners (2024)",
        youtubeId: "FJGCaTjB5x4",
        description: "Create presentations with Gamma AI in minutes.",
        thumbnailUrl: "https://img.youtube.com/vi/FJGCaTjB5x4/hqdefault.jpg",
        category: "Presentation"
    },
    {
        id: 9,
        title: "This AI Changes Everything... Google AI Studio Tutorial",
        youtubeId: "vAvs4lBqSFo",
        description: "A beginner's guide to Google AI Studio for data and AI projects.",
        thumbnailUrl: "https://img.youtube.com/vi/vAvs4lBqSFo/hqdefault.jpg",
        category: "Data"
    },
    {
        id: 10,
        title: "Google Notebook LM Tutorial - Become A Power User in 15 Minutes",
        youtubeId: "UG0DP6nVnrc",
        description: "How to use Google Notebook LM for smarter note-taking.",
        thumbnailUrl: "https://img.youtube.com/vi/UG0DP6nVnrc/hqdefault.jpg",
        category: "Note-taking"
    },
    {
        id: 11,
        title: "Mastering Leonardo AI: A Comprehensive Step-by-Step Tutorial",
        youtubeId: "gv0wm-_ajgM",
        description: "How to use Leonardo AI to generate stunning digital artwork.",
        thumbnailUrl: "https://img.youtube.com/vi/gv0wm-_ajgM/hqdefault.jpg",
        category: "Art"
    },
    {
        id: 12,
        title: "Midjourney AI: Text to Image Generation",
        youtubeId: "V5aZjsWM2wo",
        description: "A beginner's guide to creating images from text prompts using Midjourney.",
        thumbnailUrl: "https://img.youtube.com/vi/V5aZjsWM2wo/hqdefault.jpg",
        category: "Art"
    },
    {
        id: 13,
        title: "Microsoft Copilot: AI in Office 365",
        youtubeId: "QwZT7T-TXT0",
        description: "How to use Microsoft Copilot in Word, Excel, and PowerPoint.",
        thumbnailUrl: "https://img.youtube.com/vi/QwZT7T-TXT0/hqdefault.jpg",
        category: "Productivity"
    },
    {
        id: 14,
        title: "Bard AI: Google's Conversational AI",
        youtubeId: "Qw2aE8FJb6w",
        description: "Overview and demo of Bard AI for research and productivity.",
        thumbnailUrl: "https://img.youtube.com/vi/Qw2aE8FJb6w/hqdefault.jpg",
        category: "Chatbot"
    },
    {
        id: 15,
        title: "Runway ML: AI Video Editing Tools",
        youtubeId: "caD0PHJcxG8",
        description: "How to use Runway ML for video editing and special effects with AI.",
        thumbnailUrl: "https://img.youtube.com/vi/caD0PHJcxG8/hqdefault.jpg",
        category: "Video"
    },
    {
        id: 16,
        title: "Notion AI: Supercharge Your Notes",
        youtubeId: "mnULGqkVONI",
        description: "How to use Notion AI to automate and enhance your note-taking.",
        thumbnailUrl: "https://img.youtube.com/vi/mnULGqkVONI/hqdefault.jpg",
        category: "Note-taking"
    },
    {
        id: 17,
        title: "Descript AI: Edit Audio & Video with Text",
        youtubeId: "Qw2aE8FJb6w",
        description: "A guide to using Descript's AI tools for fast and easy editing.",
        thumbnailUrl: "https://img.youtube.com/vi/Qw2aE8FJb6w/hqdefault.jpg",
        category: "Video"
    },
    {
        id: 18,
        title: "Pictory AI: Turn Text into Video",
        youtubeId: "s3PGnk0XFSU",
        description: "How to use Pictory AI to create videos from scripts and articles.",
        thumbnailUrl: "https://img.youtube.com/vi/s3PGnk0XFSU/hqdefault.jpg",
        category: "Video"
    },
    {
        id: 19,
        title: "Synthesia: Create AI Avatars & Videos",
        youtubeId: "Py5aHOLpAMg",
        description: "A tutorial on using Synthesia to generate AI-powered video content.",
        thumbnailUrl: "https://img.youtube.com/vi/Py5aHOLpAMg/hqdefault.jpg",
        category: "Video"
    },
    {
        id: 20,
        title: "Fireflies AI: Meeting Transcription & Notes",
        youtubeId: "40fwl9bYPiU",
        description: "How to use Fireflies AI to transcribe and summarize meetings automatically.",
        thumbnailUrl: "https://img.youtube.com/vi/40fwl9bYPiU/hqdefault.jpg",
        category: "Meeting"
    }
];

// --- State Management ---
let currentUser = null;
let currentPage = 'landing';
let likedVideos = new Set();
let favoriteVideos = new Set();
let viewHistory = [];
let users = [];

// --- DOM Elements ---
const landingPage = document.getElementById('landing-page');
const homePage = document.getElementById('home-page');
const historyPage = document.getElementById('history-page');
const favoritesPage = document.getElementById('favorites-page');
const videoGrid = document.getElementById('video-grid');
const historyGrid = document.getElementById('history-grid');
const favoritesGrid = document.getElementById('favorites-grid');
const navbarUser = document.querySelector('.navbar-user');
const searchInput = document.querySelector('.search-input');
const startLearningBtn = document.getElementById('start-learning-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const darkmodeToggle = document.getElementById('darkmode-toggle');

const loginModal = document.getElementById('login-modal');
const closeLoginModalBtn = document.getElementById('close-login-modal');
const loginForm = document.getElementById('login-form');
const loginErrorMsg = document.getElementById('login-error');
const openRegisterBtn = document.getElementById('open-register');

const registerModal = document.getElementById('register-modal');
const closeRegisterModalBtn = document.getElementById('close-register-modal');
const registerForm = document.getElementById('register-form');
const registerErrorMsg = document.getElementById('register-error');

const videoPlayerModal = document.getElementById('video-player-modal');
const closeVideoModalBtn = document.getElementById('close-video-modal');
const youtubePlayerContainer = document.getElementById('youtube-player-container');

// --- Category Filter ---
const categoryFilter = document.getElementById('category-filter');
let currentCategory = 'All';

// --- Video Sort Filter ---
const videoSortFilter = document.getElementById('video-sort-filter');
let currentSort = 'recent'; // 'recent' or 'popular'

// --- LANGUAGE & TRANSLATIONS ---
let currentLang = 'en';
const translations = {
  en: {
    home: 'Home',
    history: 'History',
    favorites: 'Favorites',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    username: 'Username:',
    password: 'Password:',
    displayName: 'Display Name:',
    dontHaveAccount: "Don't have an account?",
    startLearning: 'Start Learning',
    latestAI: 'Latest AI Learning',
    historyTitle: 'History',
    favoritesTitle: 'Favorites',
    searchPlaceholder: 'Search videos...',
    suggestForYou: 'Suggest for you',
    categories: {
      All: 'All',
      'Chatbot': 'Chatbot',
      'Coding': 'Coding',
      'Design': 'Design',
      'Presentation': 'Presentation',
      'Data': 'Data',
      'Note-taking': 'Note-taking',
      'Art': 'Art',
      'Productivity': 'Productivity',
      'Video': 'Video',
      'Meeting': 'Meeting',
    },
    sort: {
      recent: 'Recently Added',
      popular: 'Popular'
    },
    landingTitle: 'Welcome to NX Learning Hub',
    landingDesc1: 'Embrace AI to enhance efficiency, drive innovation, and lead in the fast-changing digital era. Adapt, automate, and succeed with smart technology.',
    landingDesc2: 'Leverage AI to boost efficiency, drive innovation, and lead in the changing digital era. Adapt, automate, and succeed with smart technology.',
    footerAboutTitle: 'About Us',
    footerAboutDesc: 'NX Learning Hub is the most comprehensive AI learning platform for business applications with easy-to-understand tutorials.',
    footerQuickTitle: 'Quick Links',
    footerContactTitle: 'Contact Us',
    footerEmail: 'Email: sakornonk@gmail.com',
    footerPhone: 'Phone: 081-991-8769',
    footerCopyright: '© 2024 NX Learning Hub. All rights reserved.'
  }
};

// --- LocalStorage Management ---
function loadFromLocalStorage() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
    }
    const storedLikes = localStorage.getItem('likedVideos');
    if (storedLikes) {
        likedVideos = new Set(JSON.parse(storedLikes));
    }
    const storedFavorites = localStorage.getItem('favoriteVideos');
    if (storedFavorites) {
        favoriteVideos = new Set(JSON.parse(storedFavorites));
    }
    const storedHistory = localStorage.getItem('viewHistory');
    if (storedHistory) {
        viewHistory = JSON.parse(storedHistory);
    }
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    } else {
        users = [];
    }
    // Dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function saveToLocalStorage() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('likedVideos', JSON.stringify([...likedVideos]));
    localStorage.setItem('favoriteVideos', JSON.stringify([...favoriteVideos]));
    localStorage.setItem('viewHistory', JSON.stringify(viewHistory));
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// --- Page Navigation ---
function showPage(pageId) {
    currentPage = pageId;
    landingPage.style.display = pageId === 'landing' ? 'flex' : 'none';
    homePage.style.display = pageId === 'home' ? 'block' : 'none';
    historyPage.style.display = pageId === 'history' ? 'block' : 'none';
    favoritesPage.style.display = pageId === 'favorites' ? 'block' : 'none';
    if (pageId === 'home') {
        renderVideos();
    } else if (pageId === 'history') {
        renderHistoryVideos();
    } else if (pageId === 'favorites') {
        renderFavoriteVideos();
    }
    mobileMenu.classList.remove('active');
}

// --- Video Card Rendering ---
function createVideoCard(video) {
    const card = document.createElement('div');
    card.classList.add('video-card');
    card.dataset.youtubeId = video.youtubeId;

    const isLiked = likedVideos.has(video.youtubeId);
    const isFavorited = favoriteVideos.has(video.youtubeId);

    // Thumbnail with fallback
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'video-thumbnail';
    const img = document.createElement('img');
    img.src = video.thumbnailUrl;
    img.alt = video.title;
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/320x180?text=No+Preview';
    };
    thumbnailDiv.appendChild(img);
    // เพิ่มปุ่ม play overlay แบบ YouTube
    const playBtn = document.createElement('span');
    playBtn.className = 'yt-play-btn';
    thumbnailDiv.appendChild(playBtn);

    // Actions
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'video-actions';
    actionsDiv.innerHTML = `
        <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-action="like">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </button>
        <button class="action-btn favorite-btn ${isFavorited ? 'favorited' : ''}" data-action="favorite">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
        </button>
    `;
    thumbnailDiv.appendChild(actionsDiv);

    // Info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'video-info';
    infoDiv.innerHTML = `
        <h3 class="video-title">${video.title}</h3>
        <p class="video-description">${video.description}</p>
    `;

    card.appendChild(thumbnailDiv);
    card.appendChild(infoDiv);

    // Add click handlers
    actionsDiv.querySelector('.like-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(video.youtubeId);
    });
    actionsDiv.querySelector('.favorite-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(video.youtubeId);
    });
    card.addEventListener('click', () => {
        openVideoPlayer(video.youtubeId);
        addToHistory(video.youtubeId);
    });
    return card;
}

function getUniqueCategories() {
    const cats = aiLearningVideos.map(v => v.category);
    return ['All', ...Array.from(new Set(cats))];
}

function renderVideoSortFilter() {
    videoSortFilter.innerHTML = '';
    const sorts = [
        { key: 'recent', label: translations[currentLang].sort.recent },
        { key: 'popular', label: translations[currentLang].sort.popular }
    ];
    sorts.forEach(sort => {
        const btn = document.createElement('button');
        btn.className = 'sort-btn' + (currentSort === sort.key ? ' active' : '');
        btn.textContent = sort.label;
        btn.addEventListener('click', () => {
            currentSort = sort.key;
            renderVideoSortFilter();
            renderSuggestedVideos();
            renderVideos();
        });
        videoSortFilter.appendChild(btn);
    });
}

function renderCategoryFilter() {
    const categories = getUniqueCategories();
    categoryFilter.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn' + (cat === currentCategory ? ' active' : '');
        btn.textContent = translations[currentLang].categories[cat] || cat;
        btn.addEventListener('click', () => {
            currentCategory = cat;
            renderCategoryFilter();
            renderVideoSortFilter();
            renderSuggestedVideos();
            renderVideos();
        });
        categoryFilter.appendChild(btn);
    });
}

function renderVideos(videos) {
    videoGrid.innerHTML = '';
    let filtered = aiLearningVideos;
    if (currentCategory !== 'All') {
        filtered = aiLearningVideos.filter(v => v.category === currentCategory);
    }
    // Sort
    if (currentSort === 'recent') {
        filtered = filtered.slice().sort((a, b) => b.id - a.id);
    } else if (currentSort === 'popular') {
        // Use viewHistory count as popularity metric
        const countMap = {};
        viewHistory.forEach(id => { countMap[id] = (countMap[id] || 0) + 1; });
        filtered = filtered.slice().sort((a, b) => (countMap[b.youtubeId] || 0) - (countMap[a.youtubeId] || 0));
    }
    (videos || filtered).forEach(video => {
        videoGrid.appendChild(createVideoCard(video));
    });
}

function renderHistoryVideos() {
    historyGrid.innerHTML = '';
    const historyVideos = viewHistory
        .map(id => aiLearningVideos.find(v => v.youtubeId === id))
        .filter(v => v);
    historyVideos.forEach(video => {
        historyGrid.appendChild(createVideoCard(video));
    });
}

function renderFavoriteVideos() {
    favoritesGrid.innerHTML = '';
    const favoriteVideosList = [...favoriteVideos]
        .map(id => aiLearningVideos.find(v => v.youtubeId === id))
        .filter(v => v);
    favoriteVideosList.forEach(video => {
        favoritesGrid.appendChild(createVideoCard(video));
    });
}

// --- Video Actions ---
function toggleLike(videoId) {
    if (likedVideos.has(videoId)) {
        likedVideos.delete(videoId);
    } else {
        likedVideos.add(videoId);
    }
    saveToLocalStorage();
    renderVideos();
}

function toggleFavorite(videoId) {
    if (favoriteVideos.has(videoId)) {
        favoriteVideos.delete(videoId);
    } else {
        favoriteVideos.add(videoId);
    }
    saveToLocalStorage();
    renderVideos();
}

function addToHistory(videoId) {
    viewHistory = [videoId, ...viewHistory.filter(id => id !== videoId)].slice(0, 50);
    saveToLocalStorage();
}

// --- Search Functionality ---
function searchVideos(query) {
    query = query.toLowerCase();
    const filteredVideos = aiLearningVideos.filter(video => 
        video.title.toLowerCase().includes(query) || 
        video.description.toLowerCase().includes(query)
    );
    renderVideos(filteredVideos);
}

// --- Mobile Menu ---
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
});

mobileMenu.addEventListener('click', (e) => {
    // ถ้าคลิกที่ลิงก์ ให้เปลี่ยนหน้าและปิดเมนู
    if (e.target.matches('a[data-page]')) {
        e.preventDefault();
        const page = e.target.dataset.page;
        if (currentUser) {
            showPage(page);
        } else {
            openLoginModal();
        }
        mobileMenu.classList.remove('active');
    }
    e.stopPropagation();
});

// ปิดเมนูเมื่อคลิกนอกเมนูและปุ่ม
window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// --- Login/Logout/Register Functions ---
function updateNavbar() {
    navbarUser.innerHTML = '';
    const mobileAuthBtn = document.getElementById('mobile-auth-btn');
    if (mobileAuthBtn) mobileAuthBtn.innerHTML = '';
    if (currentUser) {
        const greeting = document.createElement('span');
        greeting.classList.add('user-greeting');
        greeting.textContent = currentLang === 'jp' ? `こんにちは, ${currentUser.displayName}さん!` : `Hello, ${currentUser.displayName}!`;
        const logoutButton = document.createElement('button');
        logoutButton.textContent = translations[currentLang].logout;
        logoutButton.addEventListener('click', handleLogout);
        navbarUser.appendChild(greeting);
        navbarUser.appendChild(logoutButton);
        if (mobileAuthBtn) {
            const logoutBtnMobile = document.createElement('button');
            logoutBtnMobile.textContent = translations[currentLang].logout;
            logoutBtnMobile.addEventListener('click', handleLogout);
            mobileAuthBtn.appendChild(logoutBtnMobile);
        }
        document.querySelector('.navbar-search').style.display = 'block';
    } else {
        const loginButton = document.createElement('button');
        loginButton.textContent = translations[currentLang].login;
        loginButton.addEventListener('click', openLoginModal);
        navbarUser.appendChild(loginButton);
        if (mobileAuthBtn) {
            const loginBtnMobile = document.createElement('button');
            loginBtnMobile.textContent = translations[currentLang].login;
            loginBtnMobile.addEventListener('click', openLoginModal);
            mobileAuthBtn.appendChild(loginBtnMobile);
        }
        document.querySelector('.navbar-search').style.display = 'none';
    }
}

function openLoginModal() {
    loginModal.style.display = 'flex';
    loginErrorMsg.textContent = '';
}

function closeLoginModal() {
    loginModal.style.display = 'none';
    loginForm.reset();
}

function openRegisterModal() {
    registerModal.style.display = 'flex';
    registerErrorMsg.textContent = '';
}

function closeRegisterModal() {
    registerModal.style.display = 'none';
    registerForm.reset();
}

function handleLogin(event) {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    loginErrorMsg.textContent = '';
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = { username: user.username, displayName: user.displayName };
        saveToLocalStorage();
        updateNavbar();
        closeLoginModal();
        showPage('home');
    } else {
        loginErrorMsg.textContent = 'Invalid username or password';
    }
}

function handleRegister(event) {
    event.preventDefault();
    const username = registerForm['register-username'].value.trim();
    const password = registerForm['register-password'].value;
    const displayName = registerForm['register-displayname'].value.trim();
    registerErrorMsg.textContent = '';
    if (!username || !password || !displayName) {
        registerErrorMsg.textContent = 'All fields are required';
        return;
    }
    if (users.some(u => u.username === username)) {
        registerErrorMsg.textContent = 'Username already exists';
        return;
    }
    users.push({ username, password, displayName });
    saveToLocalStorage();
    registerErrorMsg.textContent = 'Registration successful! You can now log in.';
    setTimeout(() => {
        closeRegisterModal();
        openLoginModal();
    }, 1000);
}

function handleLogout() {
    currentUser = null;
    saveToLocalStorage();
    updateNavbar();
    showPage('landing');
}

// --- Dark Mode ---
darkmodeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Toggle sun/moon icon
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (document.body.classList.contains('dark-mode')) {
        if (sunIcon) sunIcon.style.display = '';
        if (moonIcon) moonIcon.style.display = 'none';
    } else {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = '';
    }
    saveToLocalStorage();
});

// On load, set correct icon
window.addEventListener('DOMContentLoaded', () => {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (document.body.classList.contains('dark-mode')) {
        if (sunIcon) sunIcon.style.display = '';
        if (moonIcon) moonIcon.style.display = 'none';
    } else {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = '';
    }
});

// --- Video Player Functions ---
function openVideoPlayer(youtubeId) {
    // Check if video is available via oEmbed
    fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${youtubeId}&format=json`)
        .then(response => {
            if (response.ok) {
                youtubePlayerContainer.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>`;
            } else {
                youtubePlayerContainer.innerHTML = `<div style="color:red;padding:2em;text-align:center;">This video is unavailable.</div>`;
            }
            videoPlayerModal.style.display = 'flex';
        })
        .catch(() => {
            youtubePlayerContainer.innerHTML = `<div style="color:red;padding:2em;text-align:center;">This video is unavailable.</div>`;
            videoPlayerModal.style.display = 'flex';
        });
}

function closeVideoPlayer() {
    youtubePlayerContainer.innerHTML = '';
    videoPlayerModal.style.display = 'none';
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    showPage('landing');
    updateNavbar();
    renderCategoryFilter();
    renderVideoSortFilter();
    renderSuggestedVideos();
});

startLearningBtn.addEventListener('click', () => {
    if (currentUser) {
        showPage('home');
    } else {
        openLoginModal();
    }
});

document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        if (currentUser) {
            showPage(page);
        } else {
            openLoginModal();
        }
    });
});

searchInput.addEventListener('input', (e) => {
    searchVideos(e.target.value);
});

// Mobile menu events ... unchanged ...

// Register modal events
openRegisterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeLoginModal();
    openRegisterModal();
});
closeRegisterModalBtn.addEventListener('click', closeRegisterModal);
registerForm.addEventListener('submit', handleRegister);

// --- Event Listeners for Modals ---
closeLoginModalBtn.addEventListener('click', closeLoginModal);
loginForm.addEventListener('submit', handleLogin);
closeVideoModalBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeVideoPlayer();
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        closeLoginModal();
    }
    if (event.target === registerModal) {
        closeRegisterModal();
    }
    if (event.target === videoPlayerModal) {
        closeVideoPlayer();
    }
});

function renderSuggestedVideos() {
    const container = document.getElementById('suggested-videos');
    if (!container) return;
    // Find categories user watched/liked most
    let watchedIds = new Set(viewHistory);
    let likedIds = likedVideos;
    let catCount = {};
    viewHistory.forEach(id => {
        const v = aiLearningVideos.find(v => v.youtubeId === id);
        if (v) catCount[v.category] = (catCount[v.category] || 0) + 1;
    });
    likedVideos.forEach(id => {
        const v = aiLearningVideos.find(v => v.youtubeId === id);
        if (v) catCount[v.category] = (catCount[v.category] || 0) + 2;
    });
    // Sort categories by interest
    const sortedCats = Object.entries(catCount).sort((a,b)=>b[1]-a[1]).map(e=>e[0]);
    // Suggest videos from top categories, not watched yet
    let suggestions = [];
    for (const cat of sortedCats) {
        suggestions = suggestions.concat(
            aiLearningVideos.filter(v => v.category === cat && !watchedIds.has(v.youtubeId))
        );
        if (suggestions.length >= 5) break;
    }
    // If not enough, fill with unwatched from any category
    if (suggestions.length < 5) {
        suggestions = suggestions.concat(
            aiLearningVideos.filter(v => !watchedIds.has(v.youtubeId) && !suggestions.includes(v))
        );
    }
    suggestions = suggestions.slice(0,5);
    if (suggestions.length === 0) {
        container.innerHTML = '';
        return;
    }
    container.innerHTML = `<div class='suggested-title'>${translations[currentLang].suggestForYou}</div><div class='suggested-row'></div>`;
    const row = container.querySelector('.suggested-row');
    suggestions.forEach(video => {
        row.appendChild(createVideoCard(video));
    });
}

// --- Top to Home Button ---
const topToHomeBtn = document.getElementById('top-to-home-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        topToHomeBtn.style.display = 'flex';
    } else {
        topToHomeBtn.style.display = 'none';
    }
});
topToHomeBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentPage !== 'home') {
        showPage('home');
    }
});

function setLanguage(lang) {
    currentLang = lang;
    document.body.classList.toggle('japan-theme', lang === 'jp');
    // Navbar links
    document.querySelectorAll('.navbar-links a').forEach(link => {
        const page = link.dataset.page;
        link.textContent = translations[lang][page];
    });
    // Mobile menu
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        const page = link.dataset.page;
        link.textContent = translations[lang][page];
    });
    // Main page titles
    document.querySelectorAll('.page-title').forEach(el => {
        if (el.closest('#home-page')) el.textContent = translations[lang].latestAI;
        else if (el.closest('#history-page')) el.textContent = translations[lang].historyTitle;
        else if (el.closest('#favorites-page')) el.textContent = translations[lang].favoritesTitle;
    });
    // Landing page
    const startBtn = document.getElementById('start-learning-btn');
    if (startBtn) startBtn.textContent = translations[lang].startLearning;
    // Search placeholder
    if (searchInput) searchInput.placeholder = translations[lang].searchPlaceholder;
    // Login/Register modal
    const loginFormTitle = document.querySelector('#login-form h2');
    if (loginFormTitle) loginFormTitle.textContent = translations[lang].login;
    const registerFormTitle = document.querySelector('#register-form h2');
    if (registerFormTitle) registerFormTitle.textContent = translations[lang].register;
    const loginUsername = document.querySelector('label[for="username"]');
    if (loginUsername) loginUsername.textContent = translations[lang].username;
    const loginPassword = document.querySelector('label[for="password"]');
    if (loginPassword) loginPassword.textContent = translations[lang].password;
    const registerUsername = document.querySelector('label[for="register-username"]');
    if (registerUsername) registerUsername.textContent = translations[lang].username;
    const registerPassword = document.querySelector('label[for="register-password"]');
    if (registerPassword) registerPassword.textContent = translations[lang].password;
    const registerDisplayName = document.querySelector('label[for="register-displayname"]');
    if (registerDisplayName) registerDisplayName.textContent = translations[lang].displayName;
    const loginRegisterLink = document.querySelector('#login-form p a');
    if (loginRegisterLink) loginRegisterLink.textContent = translations[lang].register;
    const loginRegisterText = document.querySelector('#login-form p');
    if (loginRegisterText) loginRegisterText.childNodes[0].textContent = translations[lang].dontHaveAccount + ' ';
    // Footer
    const footerAboutTitle = document.getElementById('footer-about-title');
    if (footerAboutTitle) footerAboutTitle.textContent = translations[lang].footerAboutTitle;
    const footerAboutDesc = document.getElementById('footer-about-desc');
    if (footerAboutDesc) footerAboutDesc.textContent = translations[lang].footerAboutDesc;
    const footerQuickTitle = document.getElementById('footer-quick-title');
    if (footerQuickTitle) footerQuickTitle.textContent = translations[lang].footerQuickTitle;
    const footerContactTitle = document.getElementById('footer-contact-title');
    if (footerContactTitle) footerContactTitle.textContent = translations[lang].footerContactTitle;
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail) footerEmail.textContent = translations[lang].footerEmail;
    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone) footerPhone.textContent = translations[lang].footerPhone;
    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright) footerCopyright.textContent = translations[lang].footerCopyright;
    // Render filters
    renderCategoryFilter();
    renderVideoSortFilter();
    renderSuggestedVideos();
}

// ปิด modal วีดีโอเมื่อคลิกขอบสีขาว (border) ของ modal-content-video
const BORDER_WIDTH = 12; // px ตาม border สีขาว
const modalContent = document.querySelector('.modal-content-video');
if (modalContent) {
    modalContent.addEventListener('click', function(e) {
        // ถ้าคลิกที่ปุ่ม X หรือ child ใด ๆ ในปุ่ม X ไม่ต้องปิด modal ที่นี่
        if (e.target.closest('.close-btn')) return;
        if (
            e.offsetX < BORDER_WIDTH ||
            e.offsetY < BORDER_WIDTH ||
            e.offsetX > modalContent.clientWidth - BORDER_WIDTH ||
            e.offsetY > modalContent.clientHeight - BORDER_WIDTH
        ) {
            videoPlayerModal.style.display = 'none';
            youtubePlayerContainer.innerHTML = '';
        }
    });
} 