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
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    // Create mobile menu button if it doesn't exist yet
    if (!document.querySelector('.mobile-menu-btn')) {
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.setAttribute('aria-label', 'Toggle navigation menu');
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        header.querySelector('.container').insertBefore(mobileBtn, nav);
        
        // Toggle mobile menu
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
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

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !mobileBtn.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Check window width and adjust navigation
    const checkWidth = () => {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        
        if (window.innerWidth <= 768) {
            // Mobile view
            mobileBtn.style.display = 'flex';
            
            // Only set these styles if they're not already set
            if (!nav.classList.contains('mobile-styled')) {
                nav.classList.add('mobile-styled');
            }
        } else {
            // Desktop view
            mobileBtn.style.display = 'none';
            nav.classList.remove('active', 'mobile-styled');
        }
    };
    
    // Run on load and resize
    window.addEventListener('resize', checkWidth);
    checkWidth();
};

// Initialize mobile navigation on DOMContentLoaded and window load
document.addEventListener('DOMContentLoaded', setupMobileNav);
window.addEventListener('load', setupMobileNav);

// Horizontal swipable timeline
document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.getElementById('timeline');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!timeline || !prevBtn || !nextBtn) return;
    
    let scrollAmount = 0;
    let itemWidth = 0;
    let maxScroll = 0;
    
    // Calculate dimensions
    function calculateDimensions() {
        if (timeline.children.length > 0) {
            // Include margins in the calculation
            const firstItem = timeline.children[0];
            const style = window.getComputedStyle(firstItem);
            const marginLeft = parseInt(style.marginLeft) || 0;
            const marginRight = parseInt(style.marginRight) || 0;
            
            // Adjust item width based on screen size for better mobile experience
            const isMobile = window.innerWidth <= 768;
            const isSmallMobile = window.innerWidth <= 576;
            
            // Smaller gap for mobile devices
            const gapSize = isSmallMobile ? 8 : (isMobile ? 10 : 20);
            
            itemWidth = firstItem.offsetWidth + marginLeft + marginRight + gapSize;
            maxScroll = timeline.scrollWidth - timeline.clientWidth;
            
            // Adjust scroll padding based on screen size
            const scrollPadding = isSmallMobile ? '15px' : (isMobile ? '20px' : '30px');
            timeline.style.scrollPaddingLeft = scrollPadding;
            timeline.style.scrollPaddingRight = scrollPadding;
            
            // Fix for Aligne Consulting card - ensure it's properly sized
            if (timeline.children.length > 1) {
                const aligneCard = timeline.children[1]; // Second card (index 1)
                if (aligneCard) {
                    // Ensure the card has proper width
                    aligneCard.style.minWidth = firstItem.style.minWidth;
                    
                    // Ensure the content is properly sized
                    const aligneContent = aligneCard.querySelector('.timeline-content');
                    if (aligneContent) {
                        aligneContent.style.width = '100%';
                        aligneContent.style.boxSizing = 'border-box';
                    }
                }
            }
            
            // Apply mobile-specific styles
            if (isMobile) {
                // Make cards more visible on mobile
                timeline.querySelectorAll('.timeline-item').forEach(item => {
                    const content = item.querySelector('.timeline-content');
                    if (content) {
                        // Reduce animation intensity on mobile for better performance
                        content.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
                    }
                });
                
                // Ensure navigation arrows are properly positioned
                const timelineContainer = document.querySelector('.timeline-container');
                const navArrows = document.querySelectorAll('.timeline-arrow');
                
                if (timelineContainer && navArrows.length) {
                    // Position arrows relative to the container
                    const containerRect = timelineContainer.getBoundingClientRect();
                    const arrowSize = isSmallMobile ? 36 : 40;
                    
                    // Adjust arrow positions to ensure they don't overlap with content
                    navArrows.forEach(arrow => {
                        if (arrow.classList.contains('prev')) {
                            arrow.style.left = isSmallMobile ? '3px' : '5px';
                        } else if (arrow.classList.contains('next')) {
                            arrow.style.right = isSmallMobile ? '3px' : '5px';
                        }
                        
                        // Ensure arrows are vertically centered
                        arrow.style.top = '50%';
                        arrow.style.transform = 'translateY(-50%)';
                        
                        // Increase z-index to ensure arrows are above content
                        arrow.style.zIndex = '30';
                    });
                }
            }
        }
        
        // Initial button state
        updateButtonState();
    }
    
    // Update navigation button states
    function updateButtonState() {
        // We're making the scroll cyclic, so buttons are always enabled
        prevBtn.classList.remove('disabled');
        nextBtn.classList.remove('disabled');
    }
    
    // Scroll to previous item
    prevBtn.addEventListener('click', function() {
        // Scroll to the previous item with snap alignment
        const items = Array.from(timeline.children);
        const currentIndex = findCurrentVisibleItemIndex();
        
        if (currentIndex > 0) {
            const targetItem = items[currentIndex - 1];
            scrollToItem(targetItem);
        } else {
            // If at the beginning, loop to the last item (cyclic behavior)
            const targetItem = items[items.length - 1];
            scrollToItem(targetItem);
        }
    });
    
    // Scroll to next item
    nextBtn.addEventListener('click', function() {
        // Scroll to the next item with snap alignment
        const items = Array.from(timeline.children);
        const currentIndex = findCurrentVisibleItemIndex();
        
        if (currentIndex < items.length - 1) {
            const targetItem = items[currentIndex + 1];
            scrollToItem(targetItem);
        } else {
            // If at the end, loop to the first item (cyclic behavior)
            const targetItem = items[0];
            scrollToItem(targetItem);
        }
    });
    
    // Find the current visible item index
    function findCurrentVisibleItemIndex() {
        const items = Array.from(timeline.children);
        const timelineRect = timeline.getBoundingClientRect();
        const timelineCenter = timelineRect.left + timelineRect.width / 2;
        
        // Find the item whose center is closest to the timeline center
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const distance = Math.abs(itemCenter - timelineCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        
        return closestIndex;
    }
    
    // Scroll to a specific item
    function scrollToItem(item) {
        const itemRect = item.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        
        // Calculate the scroll position to center the item
        // Add extra padding to ensure the card is fully visible
        const scrollLeft = timeline.scrollLeft + (itemRect.left - timelineRect.left) - 
                          (timelineRect.width - itemRect.width) / 2;
        
        scrollAmount = scrollLeft;
        
        // Enhanced smooth scrolling with easing
        timeline.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        
        // Apply a subtle bounce effect to the centered item
        const content = item.querySelector('.timeline-content');
        if (content) {
            // Adjust animation based on screen size
            const isMobile = window.innerWidth <= 768;
            
            if (isMobile) {
                // Simpler animation for mobile
                content.style.transition = 'transform 0.4s ease-out';
                content.style.transform = 'scale(1.01)';
                
                setTimeout(() => {
                    content.style.transform = 'scale(1)';
                }, 250);
            } else {
                // More pronounced animation for desktop
                content.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                content.style.transform = 'scale(1.02)';
                
                setTimeout(() => {
                    content.style.transition = 'transform 0.3s ease-out';
                    content.style.transform = 'scale(1)';
                }, 300);
            }
        }
        
        // Force a recalculation of the shadow effect after scrolling completes
        setTimeout(updateShadowEffect, 500);
    }
    
    // Update on scroll
    timeline.addEventListener('scroll', function() {
        scrollAmount = timeline.scrollLeft;
        updateButtonState();
        updateShadowEffect();
    });
    
    // Handle touch events for swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    timeline.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    timeline.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - go to next
            nextBtn.click();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - go to previous
            prevBtn.click();
        }
    }
    
    // Calculate dimensions on load and resize
    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    
    // Update shadow effect to make animation smoother
    function updateShadowEffect() {
        const timelineItems = timeline.querySelectorAll('.timeline-item');
        const timelineRect = timeline.getBoundingClientRect();
        const timelineCenter = timelineRect.left + timelineRect.width / 2;
        const isMobile = window.innerWidth <= 768;
        
        timelineItems.forEach((item, index) => {
            // Reset styles
            item.style.transform = '';
            item.style.opacity = '1';
            item.style.zIndex = '1';
            
            // Calculate visibility
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const distance = Math.abs(itemCenter - timelineCenter);
            const maxDistance = timelineRect.width;
            
            // Calculate how centered the item is (1 = perfectly centered, 0 = far away)
            const centeredness = Math.max(0, 1 - (distance / (maxDistance / 1.5)));
            
            // Adjust scaling and opacity based on device
            // Less dramatic effects on mobile for better performance and aesthetics
            const scale = isMobile 
                ? 0.98 + (centeredness * 0.02) // Subtle scaling on mobile
                : 0.95 + (centeredness * 0.05); // More noticeable on desktop
                
            const opacity = isMobile
                ? 0.85 + (centeredness * 0.15) // Higher base opacity on mobile
                : 0.7 + (centeredness * 0.3);
            
            // Apply styles only if the item is partially visible
            if (rect.right > timelineRect.left && rect.left < timelineRect.right) {
                // Apply transform to the timeline-content instead of the item itself
                // This prevents the content from being cut off
                const content = item.querySelector('.timeline-content');
                if (content) {
                    // Special handling for Aligne Consulting card (index 1)
                    if (index === 1) {
                        // Apply minimal scaling to prevent text cutoff
                        content.style.transform = `scale(${Math.min(scale, 0.99)})`;
                        content.style.opacity = Math.max(opacity, 0.9);
                    } else {
                        content.style.transform = `scale(${scale})`;
                        content.style.opacity = opacity;
                    }
                    
                    // Add a subtle transition for smoother animation
                    // Shorter duration on mobile for better performance
                    content.style.transition = isMobile
                        ? 'transform 0.3s ease-out, opacity 0.3s ease-out'
                        : 'transform 0.4s ease-out, opacity 0.4s ease-out';
                }
                
                // Higher z-index for more centered items
                item.style.zIndex = Math.round(centeredness * 10);
            }
        });
    }
    
    // Update shadow effect on scroll
    timeline.addEventListener('scroll', updateShadowEffect);
    window.addEventListener('resize', updateShadowEffect);
    
    // Initial update with a delay to ensure proper rendering
    setTimeout(updateShadowEffect, 100);
    
    // Additional fix for Aligne Consulting card - ensure it's properly displayed after page load
    setTimeout(function() {
        if (timeline.children.length > 1) {
            const aligneCard = timeline.children[1]; // Second card (index 1)
            if (aligneCard) {
                const aligneContent = aligneCard.querySelector('.timeline-content');
                if (aligneContent) {
                    // Ensure the content is properly sized and visible
                    aligneContent.style.width = '100%';
                    aligneContent.style.boxSizing = 'border-box';
                    aligneContent.style.opacity = '1';
                    aligneContent.style.transform = 'scale(1)';
                    
                    // Ensure the company name is properly displayed
                    const companyName = aligneContent.querySelector('.company');
                    if (companyName) {
                        companyName.style.display = 'inline-block';
                        companyName.style.maxWidth = '100%';
                        companyName.style.wordBreak = 'break-word';
                    }
                }
            }
        }
    }, 500);
});

// Skills Carousel
document.addEventListener('DOMContentLoaded', function() {
    const skillsCarousel = document.getElementById('skillsCarousel');
    const prevSkillBtn = document.getElementById('prevSkillBtn');
    const nextSkillBtn = document.getElementById('nextSkillBtn');
    
    if (!skillsCarousel || !prevSkillBtn || !nextSkillBtn) return;
    
    let scrollAmount = 0;
    let itemWidth = 0;
    let maxScroll = 0;
    let isAnimating = false; // Flag to prevent multiple swipes during animation
    let currentIndex = 0; // Track the current index for cyclic navigation
    
    // Calculate dimensions
    function calculateDimensions() {
        if (skillsCarousel.children.length > 0) {
            const isMobile = window.innerWidth <= 768;
            const isSmallMobile = window.innerWidth <= 576;
            
            // Calculate item width based on viewport
            if (isMobile) {
                // On mobile, each swipe should show exactly one card
                itemWidth = skillsCarousel.clientWidth;
            } else {
                // On desktop, each swipe should show exactly two cards
                itemWidth = skillsCarousel.clientWidth / 2;
            }
            
            maxScroll = skillsCarousel.scrollWidth - skillsCarousel.clientWidth;
            
            // Position navigation arrows consistently
            const skillsContainer = document.querySelector('.skills-container');
            const navArrows = document.querySelectorAll('.skills-arrow');
            
            if (skillsContainer && navArrows.length) {
                // Set consistent positioning for both arrows
                navArrows.forEach(arrow => {
                    // Ensure arrows are vertically centered
                    arrow.style.top = '50%';
                    arrow.style.transform = 'translateY(-50%)';
                    
                    // Set consistent distance from edge based on screen size
                    let distance;
                    if (isSmallMobile) {
                        distance = '10px';
                    } else if (isMobile) {
                        distance = '15px';
                    } else {
                        distance = '20px';
                    }
                    
                    if (arrow.classList.contains('prev')) {
                        arrow.style.left = distance;
                    } else if (arrow.classList.contains('next')) {
                        arrow.style.right = distance;
                    }
                    
                    // Increase z-index to ensure arrows are above content
                    arrow.style.zIndex = '30';
                });
            }
            
            // Also update timeline arrows for consistency if they exist
            const timelineContainer = document.querySelector('.timeline-container');
            const timelineArrows = document.querySelectorAll('.timeline-arrow');
            
            if (timelineContainer && timelineArrows.length) {
                timelineArrows.forEach(arrow => {
                    // Set consistent distance from edge based on screen size
                    let distance;
                    if (isSmallMobile) {
                        distance = '10px';
                    } else if (isMobile) {
                        distance = '15px';
                    } else {
                        distance = '20px';
                    }
                    
                    if (arrow.classList.contains('prev')) {
                        arrow.style.left = distance;
                    } else if (arrow.classList.contains('next')) {
                        arrow.style.right = distance;
                    }
                    
                    // Ensure arrows are vertically centered
                    arrow.style.top = '50%';
                    arrow.style.transform = 'translateY(-50%)';
                    
                    // Increase z-index to ensure arrows are above content
                    arrow.style.zIndex = '30';
                });
            }
        }
        
        // Initial button state
        updateButtonState();
    }
    
    // Update navigation button states - always enabled for cyclic navigation
    function updateButtonState() {
        prevSkillBtn.classList.remove('disabled');
        nextSkillBtn.classList.remove('disabled');
    }
    
    // Scroll to previous item(s) - but actually move forward in the cycle
    prevSkillBtn.addEventListener('click', function() {
        if (isAnimating) return; // Prevent multiple clicks during animation
        isAnimating = true;
        
        const isMobile = window.innerWidth <= 768;
        const items = Array.from(skillsCarousel.children);
        const totalItems = items.length;
        
        // For cyclic navigation, we'll actually move forward through the list
        // but show the "previous" items by calculating the correct index
        if (isMobile) {
            // On mobile, go back one card (which means forward totalItems-1)
            currentIndex = (currentIndex + totalItems - 1) % totalItems;
        } else {
            // On desktop, go back two cards (which means forward totalItems-2)
            currentIndex = (currentIndex + totalItems - 2) % totalItems;
        }
        
        scrollToItem(items[currentIndex], true);
        
        // Add visual feedback for the button
        prevSkillBtn.classList.add('active');
        setTimeout(() => {
            prevSkillBtn.classList.remove('active');
        }, 300);
    });
    
    // Scroll to next item(s)
    nextSkillBtn.addEventListener('click', function() {
        if (isAnimating) return; // Prevent multiple clicks during animation
        isAnimating = true;
        
        const isMobile = window.innerWidth <= 768;
        const items = Array.from(skillsCarousel.children);
        const totalItems = items.length;
        
        // Calculate the next index based on device
        if (isMobile) {
            // On mobile, advance one card
            currentIndex = (currentIndex + 1) % totalItems;
        } else {
            // On desktop, advance two cards
            currentIndex = (currentIndex + 2) % totalItems;
        }
        
        scrollToItem(items[currentIndex], false);
        
        // Add visual feedback for the button
        nextSkillBtn.classList.add('active');
        setTimeout(() => {
            nextSkillBtn.classList.remove('active');
        }, 300);
    });
    
    // Find the current visible item index
    function findCurrentVisibleItemIndex() {
        const items = Array.from(skillsCarousel.children);
        const carouselRect = skillsCarousel.getBoundingClientRect();
        const carouselCenter = carouselRect.left + carouselRect.width / 2;
        
        // Find the item whose center is closest to the carousel center
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const distance = Math.abs(itemCenter - carouselCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        
        return closestIndex;
    }
    
    // Scroll to a specific item
    function scrollToItem(item, isPrev) {
        const itemRect = item.getBoundingClientRect();
        const carouselRect = skillsCarousel.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;
        
        // Calculate the scroll position
        let scrollLeft;
        
        if (isMobile) {
            // On mobile, center the target item
            scrollLeft = skillsCarousel.scrollLeft + (itemRect.left - carouselRect.left) - 
                        (carouselRect.width - itemRect.width) / 2;
        } else {
            // On desktop, position to show two cards
            const itemIndex = Array.from(skillsCarousel.children).indexOf(item);
            
            if (itemIndex === 0 || itemIndex === 1) {
                // First two items - align to start
                scrollLeft = 0;
            } else if (itemIndex >= skillsCarousel.children.length - 2) {
                // Last two items - align to end
                scrollLeft = skillsCarousel.scrollWidth - skillsCarousel.clientWidth;
            } else {
                // Middle items - center the current item
                scrollLeft = skillsCarousel.scrollLeft + (itemRect.left - carouselRect.left) - 
                            (carouselRect.width - itemRect.width) / 2;
            }
        }
        
        scrollAmount = scrollLeft;
        
        // Apply a pre-animation effect to indicate direction
        const allItems = skillsCarousel.querySelectorAll('.skill-card');
        allItems.forEach(card => {
            const content = card.querySelector('.skill-content');
            if (content) {
                content.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                content.style.transform = `scale(0.98) translateX(${isPrev ? '10px' : '-10px'})`;
                content.style.opacity = '0.8';
            }
        });
        
        // Enhanced smooth scrolling with easing
        setTimeout(() => {
            skillsCarousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            // Reset and apply the animation to the centered item
            setTimeout(() => {
                allItems.forEach(card => {
                    const content = card.querySelector('.skill-content');
                    if (content) {
                        content.style.transform = 'scale(1)';
                        content.style.opacity = '1';
                    }
                });
                
                // Apply a subtle bounce effect to the centered item
                const content = item.querySelector('.skill-content');
                if (content) {
                    content.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease';
                    content.style.transform = 'scale(1.03)';
                    content.style.opacity = '1';
                    content.style.zIndex = '10';
                    
                    setTimeout(() => {
                        content.style.transform = 'scale(1)';
                        isAnimating = false; // Animation complete, allow new swipes
                    }, 300);
                } else {
                    isAnimating = false;
                }
                
                // Force a recalculation of the shadow effect after scrolling completes
                updateShadowEffect();
            }, 300);
        }, 50);
    }
    
    // Update on scroll
    skillsCarousel.addEventListener('scroll', function() {
        scrollAmount = skillsCarousel.scrollLeft;
        updateButtonState();
        updateShadowEffect();
        
        // Update current index based on scroll position
        currentIndex = findCurrentVisibleItemIndex();
    });
    
    // Handle touch events for swipe
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwiping = false;
    
    skillsCarousel.addEventListener('touchstart', function(e) {
        if (isAnimating) return;
        touchStartX = e.changedTouches[0].screenX;
        isSwiping = true;
        
        // Add visual feedback for touch start
        skillsCarousel.style.cursor = 'grabbing';
    }, { passive: true });
    
    skillsCarousel.addEventListener('touchmove', function(e) {
        if (!isSwiping) return;
        
        const currentX = e.changedTouches[0].screenX;
        const diff = touchStartX - currentX;
        
        // Add resistance at the edges
        if ((scrollAmount <= 0 && diff < 0) || 
            (scrollAmount >= maxScroll && diff > 0)) {
            // Apply resistance at the edges
            skillsCarousel.scrollLeft += diff * 0.3;
        }
    }, { passive: true });
    
    skillsCarousel.addEventListener('touchend', function(e) {
        if (!isSwiping) return;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        isSwiping = false;
        
        // Reset cursor
        skillsCarousel.style.cursor = '';
    }, { passive: true });
    
    function handleSwipe() {
        if (isAnimating) return;
        
        const swipeThreshold = 50;
        const swipeDistance = touchStartX - touchEndX;
        
        if (Math.abs(swipeDistance) < swipeThreshold) {
            // Small movement - snap to nearest item
            const currentIndex = findCurrentVisibleItemIndex();
            scrollToItem(skillsCarousel.children[currentIndex], false);
            return;
        }
        
        if (swipeDistance > 0) {
            // Swipe left - go to next
            nextSkillBtn.click();
        } else {
            // Swipe right - go to previous
            prevSkillBtn.click();
        }
    }
    
    // Calculate dimensions on load and resize
    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    
    // Update shadow effect to make animation smoother
    function updateShadowEffect() {
        const skillItems = skillsCarousel.querySelectorAll('.skill-card');
        const carouselRect = skillsCarousel.getBoundingClientRect();
        const carouselCenter = carouselRect.left + carouselRect.width / 2;
        const isMobile = window.innerWidth <= 768;
        
        skillItems.forEach((item) => {
            // Reset styles
            item.style.transform = '';
            item.style.opacity = '1';
            item.style.zIndex = '1';
            
            // Calculate visibility
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const distance = Math.abs(itemCenter - carouselCenter);
            const maxDistance = carouselRect.width;
            
            // Calculate how centered the item is (1 = perfectly centered, 0 = far away)
            const centeredness = Math.max(0, 1 - (distance / (maxDistance / 1.5)));
            
            // Adjust scaling and opacity based on device
            // Less dramatic effects on mobile for better performance and aesthetics
            const scale = isMobile 
                ? 0.98 + (centeredness * 0.02) // Subtle scaling on mobile
                : 0.95 + (centeredness * 0.05); // More noticeable on desktop
                
            const opacity = isMobile
                ? 0.85 + (centeredness * 0.15) // Higher base opacity on mobile
                : 0.7 + (centeredness * 0.3);
            
            // Apply styles only if the item is partially visible
            if (rect.right > carouselRect.left && rect.left < carouselRect.right) {
                // Apply transform to the skill-content instead of the item itself
                // This prevents the content from being cut off
                const content = item.querySelector('.skill-content');
                if (content) {
                    content.style.transform = `scale(${scale})`;
                    content.style.opacity = opacity;
                    
                    // Add a subtle transition for smoother animation
                    // Shorter duration on mobile for better performance
                    content.style.transition = isMobile
                        ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
                        : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease';
                }
                
                // Higher z-index for more centered items
                item.style.zIndex = Math.round(centeredness * 10);
            }
        });
    }
    
    // Update shadow effect on scroll
    skillsCarousel.addEventListener('scroll', updateShadowEffect);
    window.addEventListener('resize', updateShadowEffect);
    
    // Initial update with a delay to ensure proper rendering
    setTimeout(updateShadowEffect, 100);
    
    // Set initial index
    currentIndex = findCurrentVisibleItemIndex();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (isElementInViewport(skillsCarousel)) {
            if (e.key === 'ArrowLeft') {
                prevSkillBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextSkillBtn.click();
            }
        }
    });
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}); 