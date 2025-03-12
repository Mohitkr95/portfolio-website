// Custom Cursor
// Disabled as per user request to keep cursor normal
/*
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add a slight delay to the cursor outline for a smooth effect
    setTimeout(() => {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    }, 50);
});

// Hide cursor when mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';
});

// Make cursor bigger when hovering over links and buttons
const hoverElements = document.querySelectorAll('a, button, .project-card, .social-link');

hoverElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });

    element.addEventListener('mouseout', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});
*/

// Typewriter Effect
const typewriterText = document.getElementById('typewriter-text');
const phrases = [
    'I write code, build scalable AI and share ideas.'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[0]; // We only have one phrase
    
    if (isDeleting) {
        // Remove a character
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Faster when deleting
    } else {
        // Add a character
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100; // Normal speed when typing
    }

    // If word is complete, start deleting after a pause
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end of the word
    } 
    // If deletion is complete, start typing again
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingSpeed = 500; // Pause before starting again
    }

    setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect when the page loads
window.addEventListener('load', typeWriter);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Add shadow and reduce height when scrolling down
    if (scrollY > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        header.style.height = '70px';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        header.style.height = '80px';
    }
    
    lastScrollY = scrollY;
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Prevent the default form submission to show our custom acknowledgment first
            e.preventDefault();
            
            // Create the acknowledgment overlay
            const overlay = document.createElement('div');
            overlay.className = 'acknowledgment-overlay';
            overlay.innerHTML = `
                <div class="acknowledgment-modal">
                    <div class="acknowledgment-icon">
                        <svg width="80" height="80" viewBox="0 0 24 24">
                            <path class="checkmark" fill="none" stroke="#10b981" stroke-width="2" d="M1,12 L8,19 L23,5"></path>
                        </svg>
                    </div>
                    <h3>Thank You!</h3>
                    <p>Your message has been received. I appreciate you taking the time to reach out and will get back to you soon.</p>
                    <button class="btn btn-primary close-acknowledgment">Continue</button>
                </div>
            `;
            
            // Add styles for the overlay and modal
            const style = document.createElement('style');
            style.textContent = `
                .acknowledgment-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .acknowledgment-modal {
                    background-color: white;
                    border-radius: 12px;
                    padding: 2rem;
                    text-align: center;
                    max-width: 500px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    transform: translateY(20px);
                    opacity: 0;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .acknowledgment-icon {
                    margin: 0 auto 1.5rem;
                    width: 80px;
                    height: 80px;
                    background-color: rgba(16, 185, 129, 0.1);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .acknowledgment-modal h3 {
                    font-size: 1.8rem;
                    color: #111827;
                    margin-bottom: 1rem;
                }
                .acknowledgment-modal p {
                    color: #6b7280;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                .close-acknowledgment {
                    margin-top: 1rem;
                }
                .checkmark {
                    stroke-dasharray: 30;
                    stroke-dashoffset: 30;
                    animation: draw 1s forwards 0.3s ease-in-out;
                }
                @keyframes draw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(overlay);
            
            // Animate the overlay and modal
            setTimeout(() => {
                overlay.style.opacity = '1';
                const modal = overlay.querySelector('.acknowledgment-modal');
                modal.style.opacity = '1';
                modal.style.transform = 'translateY(0)';
            }, 10);
            
            // Submit form data via AJAX
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
            
            // Handle the close button
            const closeButton = overlay.querySelector('.close-acknowledgment');
            closeButton.addEventListener('click', function() {
                // Fade out the overlay
                overlay.style.opacity = '0';
                
                // Remove the overlay after animation completes
                setTimeout(() => {
                    document.body.removeChild(overlay);
                    
                    // Stay on the contact section instead of scrolling to top
                }, 300);
            });
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .timeline-item, .skill-category, .about-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('animate-in');
        }
    });
};

// Add animation class to CSS
const style = document.createElement('style');
style.textContent = `
    .project-card, .timeline-item, .skill-category, .about-content {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Run the animation check on scroll and on page load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Handle mobile navigation
const setupMobileNav = () => {
    // Create mobile menu button if it doesn't exist yet
    if (!document.querySelector('.mobile-menu-btn')) {
        const nav = document.querySelector('nav');
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileBtn.style.display = 'none';
        
        header.querySelector('.container').insertBefore(mobileBtn, nav);
        
        // Toggle mobile menu
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileBtn.innerHTML = nav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Check window width and adjust navigation
    const checkWidth = () => {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        
        if (window.innerWidth <= 768) {
            mobileBtn.style.display = 'block';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.right = nav.classList.contains('active') ? '0' : '-100%';
            nav.style.backgroundColor = 'white';
            nav.style.width = '250px';
            nav.style.height = 'auto';
            nav.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            nav.style.transition = 'right 0.3s ease';
            nav.style.padding = '1rem';
            
            const navUl = nav.querySelector('ul');
            navUl.style.flexDirection = 'column';
            navUl.style.gap = '1rem';
        } else {
            mobileBtn.style.display = 'none';
            nav.style = '';
            nav.classList.remove('active');
            const navUl = nav.querySelector('ul');
            navUl.style = '';
        }
    };
    
    // Run on load and resize
    window.addEventListener('resize', checkWidth);
    checkWidth();
};

// Initialize mobile navigation
window.addEventListener('load', setupMobileNav); 