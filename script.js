document.addEventListener("DOMContentLoaded", () => {
    // ========================
    // CONSTANTS & DATA
    // ========================
    const TITLES = [
        { title: "Solo Leveling", img: "https://loremflickr.com/500/750/anime,poster?lock=1" },
        { title: "Jujutsu Kaisen", img: "https://loremflickr.com/500/750/anime,poster?lock=2" },
        { title: "Demon Slayer", img: "https://loremflickr.com/500/750/anime,poster?lock=3" },
        { title: "Spider-Verse", img: "https://loremflickr.com/500/750/movie,poster?lock=4" },
        { title: "One Piece", img: "https://loremflickr.com/500/750/anime,poster?lock=5" },
        { title: "Chainsaw Man", img: "https://loremflickr.com/500/750/anime,poster?lock=6" },
        { title: "Kaiju No. 8", img: "https://loremflickr.com/500/750/anime,poster?lock=7" },
        { title: "Gladiator II", img: "https://loremflickr.com/500/750/movie,poster?lock=8" },
        { title: "Sonic 3", img: "https://loremflickr.com/500/750/movie,poster?lock=9" },
        { title: "Moana 2", img: "https://loremflickr.com/500/750/movie,poster?lock=10" },
    ];

    // ========================
    // NAVBAR SCROLL
    // ========================
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    // ========================
    // BUILD REEL BG
    // ========================
    function buildReel(id, offset) {
        const col = document.getElementById(id);
        if (!col) return;
        const total = 20;
        for (let i = 0; i < total * 2; i++) {
            const div = document.createElement('div');
            div.className = 'reel-poster';
            const ti = (i + offset) % TITLES.length;
            div.style.backgroundImage = `url(${TITLES[ti].img})`;
            col.appendChild(div);
        }
    }
    buildReel('reel1', 0);
    buildReel('reel2', 3);
    buildReel('reel3', 6);
    buildReel('reel4', 1);

    // ========================
    // TRENDING SCROLL
    // ========================
    const trendingRow = document.getElementById("trendingRow");
    const trendRight = document.getElementById("trendRight");
    const trendLeft = document.getElementById("trendLeft");

    if (trendingRow && trendRight && trendLeft) {
        const scrollAmount = 440;
        trendRight.addEventListener("click", () => {
            trendingRow.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
        trendLeft.addEventListener("click", () => {
            trendingRow.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    }

    // ========================
    // MOBILE MENU
    // ========================
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileClose = document.getElementById('mobileClose');

    if (menuToggle && mobileNav && mobileClose) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        };

        mobileClose.addEventListener('click', closeMenu);

        // Close menu when clicking on the background
        mobileNav.addEventListener('click', (e) => {
            if (e.target === mobileNav) {
                closeMenu();
            }
        });
        
        document.querySelectorAll('.mobile-nav a').forEach(a => {
            a.addEventListener('click', closeMenu);
        });
    }

    // ========================
    // SCROLL REVEAL
    // ========================
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));

    // ========================
    // GENRE PILLS
    // ========================
    document.querySelectorAll('.genre-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
});
