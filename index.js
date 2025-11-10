 // Typing Effect
        const typingElement = document.getElementById('typing');
        const professions = ['a QA Automation Engineer', 'a Front-end Developer', 'a UI/UX Designer'];
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentProfession = professions[professionIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentProfession.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentProfession.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentProfession.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
                typingSpeed = 500; // Pause before starting next word
            }

            setTimeout(type, typingSpeed);
        }

        // Initialize typing effect
        document.addEventListener('DOMContentLoaded', type);

        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Gallery Carousel
        const galleryCarouselInner = document.querySelector('.gallery .carousel-inner');
        const galleryItems = document.querySelectorAll('.gallery .carousel-item');
        const galleryPrevBtn = document.querySelector('.gallery .carousel-control.prev');
        const galleryNextBtn = document.querySelector('.gallery .carousel-control.next');
        const galleryIndicators = document.querySelectorAll('.gallery .indicator');
        let galleryCurrentIndex = 0;

        function updateGalleryCarousel() {
            galleryCarouselInner.style.transform = `translateX(-${galleryCurrentIndex * 100}%)`;
            
            // Update indicators
            galleryIndicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === galleryCurrentIndex);
            });
        }

        galleryPrevBtn.addEventListener('click', () => {
            galleryCurrentIndex = (galleryCurrentIndex - 1 + galleryItems.length) % galleryItems.length;
            updateGalleryCarousel();
        });

        galleryNextBtn.addEventListener('click', () => {
            galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryItems.length;
            updateGalleryCarousel();
        });

        // Add click event to indicators
        galleryIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                galleryCurrentIndex = index;
                updateGalleryCarousel();
            });
        });

        // Auto slide for gallery
        setInterval(() => {
            galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryItems.length;
            updateGalleryCarousel();
        }, 5000);

           // Project Carousels
        const projectCarousels = document.querySelectorAll('.project-carousel');

        projectCarousels.forEach(carousel => {
            const inner = carousel.querySelector('.project-carousel-inner');
            const items = carousel.querySelectorAll('.project-carousel-item');
            const prevBtn = carousel.querySelector('.project-control.prev');
            const nextBtn = carousel.querySelector('.project-control.next');
            let currentIndex = 0;

            function updateProjectCarousel() {
                inner.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                updateProjectCarousel();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % items.length;
                updateProjectCarousel();
            });

            // Auto slide for project carousels
            setInterval(() => {
                currentIndex = (currentIndex + 1) % items.length;
                updateProjectCarousel();
            }, 4000);
        });

        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would integrate with EmailJS here
            // For now, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = '#fff';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
 // Dark Mode Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        
        // Check for saved theme preference or respect OS preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            body.classList.add('dark-mode');
        }
        
        // Toggle dark mode
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Save user preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    });