// ==================== DOM Elements ==================== 

const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const chatInput = document.querySelector('.chat-input');
const chatSend = document.querySelector('.chat-send');
const chatMessages = document.querySelector('.chat-messages');
const contactForm = document.getElementById('contactForm');

// ==================== Intersection Observer for Animations ==================== 

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards on load
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const pricingCards = document.querySelectorAll('.pricing-card');

    featureCards.forEach(card => {
        observer.observe(card);
    });

    testimonialCards.forEach(card => {
        observer.observe(card);
    });

    pricingCards.forEach(card => {
        observer.observe(card);
    });
});

// ==================== Navbar Scroll Effect ==================== 

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = scrollTop;
});

// ==================== Smooth Navigation ==================== 

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Interactive Chat Demo ==================== 

const responses = [
    "That's a great idea! Let me help you draft that.",
    "I can assist with grammar, tone, and structure improvements.",
    "Would you like me to make it more formal or casual?",
    "How does this version sound?",
    "Perfect! I've made some suggestions for you.",
    "Let me analyze the best approach for this.",
    "Would you like me to suggest some alternatives?"
];

let messageCount = 0;

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const span = document.createElement('span');
    span.textContent = text;

    messageDiv.appendChild(span);
    chatMessages.appendChild(messageDiv);

    // Auto-scroll to latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
    const message = chatInput.value.trim();

    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Simulate AI response after a delay
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * responses.length);
        const aiResponse = responses[randomIndex];
        addMessage(aiResponse, 'ai');
    }, 400);
}

chatSend.addEventListener('click', sendChatMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// ==================== Contact Form Handling ==================== 

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = contactForm.querySelector('input[type="email"]').value;
    const button = contactForm.querySelector('.btn');
    const originalText = button.textContent;

    // Disable button and show feedback
    button.disabled = true;
    button.textContent = 'Subscribed! ✓';
    button.style.background = '#107C10';

    // Reset after 3 seconds
    setTimeout(() => {
        button.disabled = false;
        button.textContent = originalText;
        button.style.background = '#0078D4';
        contactForm.reset();
    }, 3000);

    console.log('Newsletter subscription:', email);
});

// ==================== Button Interactions ==================== 

const primaryButtons = document.querySelectorAll('.btn-primary');
const secondaryButtons = document.querySelectorAll('.btn-secondary');

primaryButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

secondaryButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== Parallax Scroll Effect ==================== 

window.addEventListener('scroll', () => {
    const blobs = document.querySelectorAll('.gradient-blob');

    blobs.forEach((blob, index) => {
        const scrollPosition = window.pageYOffset;
        const parallaxOffset = scrollPosition * (0.2 + index * 0.1);
        blob.style.transform = `translateY(${parallaxOffset}px)`;
    });
});

// ==================== Typing Animation for Hero Title ==================== 

function typeAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.textContent;

    heroTitle.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    type();
}

// Run typing animation on page load (only if visible)
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');

    if (heroTitle) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                typeAnimation();
                observer.unobserve(heroTitle);
            }
        });

        observer.observe(heroTitle);
    }
});

// ==================== Counter Animation ==================== 

function animateCounter(element, target, duration = 1000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ==================== Feature Card Hover Effects ==================== 

const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#50E6FF';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#E1DFDD';
    });
});

// ==================== Testimonial Card Rotation ==================== 

const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach((card, index) => {
    card.style.setProperty('--rotation', `${(index % 2 === 0 ? 1 : -1) * 2}deg`);

    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotate(var(--rotation))';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0)';
    });
});

// ==================== Pricing Card Scale ==================== 

const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    const isFeatures = card.classList.contains('featured');

    card.addEventListener('mouseenter', function() {
        if (!isFeatures) {
            this.style.transform = 'scale(1.02)';
        } else {
            this.style.transform = 'scale(1.07)';
        }
    });

    card.addEventListener('mouseleave', function() {
        if (!isFeatures) {
            this.style.transform = 'scale(1)';
        } else {
            this.style.transform = 'scale(1.05)';
        }
    });
});

// ==================== Smooth Section Background Transitions ==================== 

const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = '0.95';
    sectionObserver.observe(section);
});

// ==================== Mobile Menu Toggle (for future enhancement) ==================== 

function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

setupMobileMenu();

// ==================== Utility Functions ==================== 

// Print welcome message to console
console.log('%cProdigyAI - AI Productivity Reimagined', 'font-size: 20px; color: #0078D4; font-weight: bold;');
console.log('%cExperience the power of AI with our modern, aesthetic design.', 'font-size: 14px; color: #605E5C;');
