         // JavaScript untuk website Warkop Candra
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menuToggle = document.getElementById('menuToggle');
            const mainNav = document.getElementById('mainNav');
            const header = document.getElementById('header');
            const bgAnimation = document.getElementById('bgAnimation');

            // Create animated background
            function createCoffeeBeans() {
                for (let i = 0; i < 20; i++) {
                    const bean = document.createElement('div');
                    bean.className = 'coffee-bean';
                    bean.style.width = Math.random() * 10 + 5 + 'px';
                    bean.style.height = bean.style.width;
                    bean.style.left = Math.random() * 100 + '%';
                    bean.style.top = Math.random() * 100 + '%';
                    bean.style.animationDelay = Math.random() * 6 + 's';
                    bgAnimation.appendChild(bean);
                }
            }
            createCoffeeBeans();

            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Mobile menu functionality
            if (menuToggle && mainNav) {
                function toggleMenu(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    mainNav.classList.toggle('active');
                    menuToggle.classList.toggle('active');
                    
                    // Prevent body scroll when menu is open
                    if (mainNav.classList.contains('active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                }

                menuToggle.addEventListener('click', toggleMenu);
                menuToggle.addEventListener('touchend', function(e) {
                    e.preventDefault();
                    toggleMenu(e);
                }, { passive: false });
            }

            // Navigation functionality
            const navLinks = document.querySelectorAll('.nav-link');
            const contentSections = document.querySelectorAll('.content-section');

            // Function to show section
            window.showSection = function(sectionId) {
                // Remove active class from all links and sections
                navLinks.forEach(function(l) {
                    l.classList.remove('active');
                });
                contentSections.forEach(function(s) {
                    s.classList.remove('active');
                });
                
                // Add active class to corresponding link and section
                const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
                const targetSection = document.getElementById(sectionId);
                
                if (targetLink && targetSection) {
                    targetLink.classList.add('active');
                    targetSection.classList.add('active');
                }
                
                // Close mobile menu
                if (mainNav && menuToggle) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                // Scroll to top smoothly
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            navLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const sectionId = link.dataset.section;
                    showSection(sectionId);
                });
            });
            // Membuat logo dapat diklik untuk kembali ke home
            const logo = document.getElementById('logo');
            if (logo) {
                logo.addEventListener('click', function(e) {
                    e.preventDefault(); // Mencegah perilaku default jika ada
                    showSection('home');
                });
            }

            // Close mobile menu when clicking outside
            function closeMenuOutside(e) {
                if (menuToggle && mainNav && 
                    !menuToggle.contains(e.target) && 
                    !mainNav.contains(e.target)) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }

            document.addEventListener('click', closeMenuOutside);
            document.addEventListener('touchend', closeMenuOutside);

            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    if (mainNav && menuToggle) {
                        mainNav.classList.remove('active');
                        menuToggle.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }
            });

            // Gallery item click effect
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(function(item) {
                item.addEventListener('click', function() {
                    // Simple click effect - you can enhance this with lightbox functionality
                    item.style.transform = 'scale(0.95)';
                    setTimeout(function() {
                        item.style.transform = '';
                    }, 150);
                });
            });

            // Smooth scroll for CTA button
            const ctaButtons = document.querySelectorAll('.cta-button');
            ctaButtons.forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = btn.getAttribute('onclick');
                    if (target && target.includes('showSection')) {
                        const sectionName = target.match(/'([^']+)'/)[1];
                        showSection(sectionName);
                    }
                });
            });

            // Add hover effects for feature boxes
            const featureBoxes = document.querySelectorAll('.feature-box');
            featureBoxes.forEach(function(box) {
                box.addEventListener('mouseenter', function() {
                    box.querySelector('.feature-icon').style.transform = 'scale(1.1) rotate(5deg)';
                });
                box.addEventListener('mouseleave', function() {
                    box.querySelector('.feature-icon').style.transform = '';
                });
            });

            // Add loading animation for menu items
            const menuCards = document.querySelectorAll('.menu-card');
            menuCards.forEach(function(card, index) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(function() {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });

            // Add parallax effect to hero section
            window.addEventListener('scroll', function() {
                const heroSection = document.querySelector('.hero-section');
                if (heroSection) {
                    const scrolled = window.pageYOffset;
                    const parallax = scrolled * 0.5;
                    heroSection.style.transform = `translateY(${parallax}px)`;
                }
            });

            // Add typing effect to hero title (optional enhancement)
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                const text = heroTitle.textContent;
                heroTitle.textContent = '';
                let i = 0;
                
                function typeWriter() {
                    if (i < text.length) {
                        heroTitle.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                }
                
                // Start typing effect after a short delay
                setTimeout(typeWriter, 1000);
            }

            // Add intersection observer for animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
                    }
                });
            }, observerOptions);

            // Observe all cards and sections
            const animatedElements = document.querySelectorAll('.card, .feature-box, .news-card');
            animatedElements.forEach(function(el) {
                observer.observe(el);
            });

            // Add click-to-call functionality for phone numbers
            const phoneNumbers = document.querySelectorAll('a[href^="tel:"]');
            phoneNumbers.forEach(function(phone) {
                phone.addEventListener('click', function(e) {
                    if (navigator.userAgent.match(/(iPhone|iPad|Android|BlackBerry|Windows Phone)/)) {
                        // Allow default behavior on mobile
                        return true;
                    } else {
                        // Show alert on desktop
                        e.preventDefault();
                        alert('Nomor telepon: ' + phone.textContent);
                    }
                });
            });

            // Add social media link functionality
            const socialLinks = document.querySelectorAll('.footer-section a');
            socialLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const icon = link.querySelector('i');
                    if (icon) {
                        let url = '';
                        if (icon.classList.contains('fa-instagram')) {
                            url = 'https://instagram.com/warkopcandra';
                        } else if (icon.classList.contains('fa-facebook')) {
                            url = 'https://facebook.com/warkopcandra';
                        } else if (icon.classList.contains('fa-tiktok')) {
                            url = 'https://tiktok.com/@warkopcandra';
                        } else if (icon.classList.contains('fa-youtube')) {
                            url = 'https://youtube.com/@warkopcandra';
                        }
                        
                        if (url) {
                            window.open(url, '_blank');
                        }
                    }
                });
            });

// Add search functionality (basic)
            function addSearchFunction() {
                // PENGECEKAN: Jika input pencarian sudah ada, hentikan fungsi.
                if (document.getElementById('menuSearchInput')) {
                    return;
                }

                const searchInput = document.createElement('input');
                searchInput.id = 'menuSearchInput'; // Tambahkan ID unik untuk pengecekan
                searchInput.type = 'text';
                searchInput.placeholder = 'Cari menu...';
                searchInput.style.cssText = `
                    width: 100%;
                    padding: 0.8rem;
                    margin-bottom: 1rem;
                    border: 2px solid var(--primary-color);
                    border-radius: 25px;
                    font-size: 1rem;
                    outline: none;
                `;

                searchInput.addEventListener('input', function() {
                    const searchTerm = this.value.toLowerCase();
                    const menuItems = document.querySelectorAll('.menu-item');
                    
                    menuItems.forEach(function(item) {
                        const menuName = item.querySelector('.menu-name').textContent.toLowerCase();
                        if (menuName.includes(searchTerm)) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });

                const menuSection = document.querySelector('#menu');
                if (menuSection) {
                    const menuTitle = menuSection.querySelector('.section-title');
                    menuTitle.after(searchInput);
                }
            }

            // Add search when menu section is active
            const menuNavLink = document.querySelector('[data-section="menu"]');
            if (menuNavLink) {
                menuNavLink.addEventListener('click', function() {
                    setTimeout(addSearchFunction, 100);
                });
            }

            // Add scroll-to-top button
            const scrollToTopBtn = document.createElement('button');
            scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollToTopBtn.style.cssText = `
                position: fixed;
                bottom: 2rem;
                left: 2rem;
                width: 50px;
                height: 50px;
                background: var(--gradient-primary);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 999;
                box-shadow: var(--shadow-soft);
            `;

            document.body.appendChild(scrollToTopBtn);

            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    scrollToTopBtn.style.opacity = '1';
                    scrollToTopBtn.style.visibility = 'visible';
                } else {
                    scrollToTopBtn.style.opacity = '0';
                    scrollToTopBtn.style.visibility = 'hidden';
                }
            });

            scrollToTopBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Add loading screen (optional)
            const loadingScreen = document.createElement('div');
            loadingScreen.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 80px; height: 80px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white; margin-bottom: 1rem; animation: spin 2s linear infinite;">
                        <i class="fas fa-coffee"></i>
                    </div>
                    <h2 style="color: var(--primary-color); margin-bottom: 0.5rem;">Warkop Candra</h2>
                    <p style="color: var(--text-light);">Menyiapkan pengalaman ngopi terbaik...</p>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;
            loadingScreen.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--light-color);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.5s ease;
            `;

            document.body.appendChild(loadingScreen);

            // Hide loading screen after content loads
            window.addEventListener('load', function() {
                setTimeout(function() {
                    loadingScreen.style.opacity = '0';
                    setTimeout(function() {
                        loadingScreen.remove();
                    }, 500);
                }, 1500);
            });

            // Add notification system
            function showNotification(message, type = 'info') {
                const notification = document.createElement('div');
                notification.textContent = message;
                notification.style.cssText = `
                    position: fixed;
                    top: 100px;
                    right: 2rem;
                    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : 'var(--primary-color)'};
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 10px;
                    box-shadow: var(--shadow-medium);
                    z-index: 1001;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                `;

                document.body.appendChild(notification);

                setTimeout(function() {
                    notification.style.transform = 'translateX(0)';
                }, 100);

                setTimeout(function() {
                    notification.style.transform = 'translateX(100%)';
                    setTimeout(function() {
                        notification.remove();
                    }, 300);
                }, 3000);
            }

            // Show welcome notification
            setTimeout(function() {
                showNotification('Selamat datang di Warkop Candra! ☕', 'success');
            }, 2000);
        });