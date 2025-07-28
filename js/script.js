// GothGirlCreative Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Collection card click handlers
    document.querySelectorAll('.collection-card').forEach(card => {
        card.addEventListener('click', function() {
            const collection = this.dataset.collection;
            // For now, just show an alert - later this will open a gallery
            alert(`Opening ${collection} gallery - Coming soon!`);
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(45, 27, 61, 0.95)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5a 50%, #6b4c7a 100%)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.collection-card, .mockup-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects for collection cards
    document.querySelectorAll('.collection-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Dynamic text effects
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Add loading states
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.animation = 'fadeInUp 1s ease forwards';
            }, 500);
        }
    });

    // Add click effects
    document.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(139, 90, 155, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = (e.clientX - 10) + 'px';
        ripple.style.top = (e.clientY - 10) + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9999';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .loaded .collection-card {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .loaded .collection-card:nth-child(odd) {
            animation-delay: 0.1s;
        }
        
        .loaded .collection-card:nth-child(even) {
            animation-delay: 0.2s;
        }
    `;
    document.head.appendChild(style);
});

// Collection data for future gallery implementation
const collections = {
    chroma_mechanical_fleet: {
        name: "Chroma-Mechanical Fleet",
        count: 110,
        description: "Stunning steampunk airships and mechanical balloons"
    },
    clockwork_menagerie: {
        name: "Clockwork Menagerie", 
        count: 98,
        description: "Intricate mechanical creatures and clockwork designs"
    },
    gothic_romance_fantasy: {
        name: "Gothic Romance & Fantasy",
        count: 45,
        description: "Romantic gothic scenes with mystical elements"
    },
    cathedral_collection: {
        name: "Cathedral Collection",
        count: 28,
        description: "Majestic cathedral and architectural scenes"
    },
    ethereal_beauties: {
        name: "Ethereal Beauties",
        count: 27,
        description: "Mystical and magical portrait studies"
    },
    cyber_goth_pop: {
        name: "Cyber-Goth & Cyber-Pop",
        count: 26,
        description: "Futuristic cyberpunk and gothic fusion art"
    },
    gilded_dreams: {
        name: "Gilded Dreams",
        count: 17,
        description: "Luxurious golden and metallic artworks"
    },
    ornate_art_deco: {
        name: "Ornate & Art Deco Patterns",
        count: 16,
        description: "Elegant decorative and pattern designs"
    },
    portrait_studies: {
        name: "Portrait Studies",
        count: 3,
        description: "Clean and elegant portrait artworks"
    }
};

