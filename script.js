// Portfolio Application - Uses config.js for all data

class PortfolioApp {
    constructor() {
        this.config = portfolioConfig;
        this.init();
    }

    init() {
        // Wait for DOM to load
        document.addEventListener('DOMContentLoaded', () => {
            this.loadSEO();
            this.loadPersonalInfo();
            this.loadSocialLinks();
            this.loadSkills();
            this.loadProjects();
            this.loadExperience();
            this.loadEducation();
            this.loadContactInfo();
            this.setupEventListeners();
            this.setCurrentYear();
            
            console.log('Portfolio loaded successfully with config!');
        });
    }

    // ============ LOAD DATA FROM CONFIG ============

    loadSEO() {
        document.title = this.config.seo.title;
        document.getElementById('meta-description').content = this.config.seo.description;
        document.getElementById('meta-keywords').content = this.config.seo.keywords;
        document.getElementById('meta-author').content = this.config.seo.author;
    }

    loadPersonalInfo() {
        const personal = this.config.personal;
        
        // Name
        document.getElementById('first-name').textContent = personal.firstName;
        document.getElementById('last-name').textContent = personal.lastName;
        document.getElementById('footer-name').textContent = `${personal.firstName} ${personal.lastName}`;
        
        // Title and Bio
        document.getElementById('hero-title').textContent = personal.title;
        document.getElementById('hero-bio').textContent = personal.bio;
        document.getElementById('about-bio').textContent = personal.bio;
        
        // Profile Image
        const profileImg = document.getElementById('profile-image');
        profileImg.src = personal.profileImage;
        profileImg.alt = `${personal.firstName} ${personal.lastName}`;
        
        // About Image
        document.getElementById('about-image').src = personal.aboutImage;
        
        // Logo
        document.getElementById('logo-text').textContent = `${personal.firstName}'s Portfolio`;
        document.getElementById('footer-logo').textContent = `${personal.firstName}'s Portfolio`;
    }

    loadSocialLinks() {
        const social = this.config.social;
        const socialContainer = document.getElementById('social-icons');
        const contactSocialContainer = document.getElementById('contact-social');
        
        const socialIcons = {
            github: 'fab fa-github',
            linkedin: 'fab fa-linkedin',
            twitter: 'fab fa-twitter',
            instagram: 'fab fa-instagram',
            facebook: 'fab fa-facebook'
        };
        
        // Clear containers
        socialContainer.innerHTML = '';
        contactSocialContainer.innerHTML = '';
        
        // Add social links
        Object.entries(social).forEach(([platform, url]) => {
            if (url && socialIcons[platform]) {
                // Hero section social icons
                const link = document.createElement('a');
                link.href = url;
                link.target = "_blank";
                link.className = "text-gray-600 hover:text-blue-600 text-xl transition";
                link.innerHTML = `<i class="${socialIcons[platform]}"></i>`;
                socialContainer.appendChild(link);
                
                // Contact section social icons
                const contactLink = document.createElement('a');
                contactLink.href = url;
                contactLink.target = "_blank";
                contactLink.className = "bg-white/20 p-3 rounded-lg hover:bg-white/30 transition";
                contactLink.innerHTML = `<i class="${socialIcons[platform]}"></i>`;
                contactSocialContainer.appendChild(contactLink);
            }
        });
    }

    loadSkills() {
        const skillsContainer = document.getElementById('skills-container');
        const technicalSkillsContainer = document.getElementById('technical-skills');
        
        // Clear containers
        skillsContainer.innerHTML = '';
        technicalSkillsContainer.innerHTML = '';
        
        // Color mapping for skills
        const colorClasses = {
            blue: { bg: 'bg-blue-100', text: 'text-blue-600', progress: 'bg-blue-600' },
            green: { bg: 'bg-green-100', text: 'text-green-600', progress: 'bg-green-600' },
            purple: { bg: 'bg-purple-100', text: 'text-purple-600', progress: 'bg-purple-600' },
            yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', progress: 'bg-yellow-600' },
            orange: { bg: 'bg-orange-100', text: 'text-orange-600', progress: 'bg-orange-600' },
            red: { bg: 'bg-red-100', text: 'text-red-600', progress: 'bg-red-600' }
        };
        
        // Load skill cards
        this.config.skills.forEach(skill => {
            const color = colorClasses[skill.color] || colorClasses.blue;
            
            const skillCard = `
                <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
                    <div class="${color.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="${skill.icon} ${color.text} text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">${skill.name}</h3>
                    <p class="text-gray-600">${skill.description}</p>
                    <div class="mt-4">
                        <div class="flex justify-between mb-2 text-sm">
                            <span>Proficiency</span>
                            <span>${skill.level}%</span>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full ${color.progress} rounded-full" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                </div>
            `;
            
            skillsContainer.innerHTML += skillCard;
        });
        
        // Load technical skills (progress bars)
        this.config.technicalSkills.forEach(skill => {
            const color = colorClasses[skill.color] || colorClasses.blue;
            
            const skillBar = `
                <div>
                    <div class="flex justify-between mb-2">
                        <span class="font-medium">${skill.name}</span>
                        <span class="text-gray-600">${skill.level}%</span>
                    </div>
                    <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div class="h-full ${color.progress} rounded-full" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `;
            
            technicalSkillsContainer.innerHTML += skillBar;
        });
    }

    loadProjects() {
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = '';
        
        // Only show featured projects
        const featuredProjects = this.config.projects.filter(project => project.featured);
        
        featuredProjects.forEach(project => {
            // Create tags HTML
            const tagsHtml = project.tags.map(tag => 
                `<span class="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2 inline-block">${tag}</span>`
            ).join('');
            
            const projectCard = `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
                    <div class="h-48 overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold">${project.title}</h3>
                        </div>
                        <p class="text-gray-600 mb-4">${project.description}</p>
                        <div class="mb-6">
                            ${tagsHtml}
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-4">
                                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="text-gray-400 hover:text-blue-600">
                                    <i class="fab fa-github"></i>
                                </a>` : ''}
                                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="text-gray-400 hover:text-blue-600">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>` : ''}
                            </div>
                            <button onclick="portfolioApp.showProjectDetails(${project.id})" class="text-blue-600 font-medium hover:text-blue-800">
                                View Details <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            projectsContainer.innerHTML += projectCard;
        });
    }

    loadExperience() {
        const experienceContainer = document.getElementById('experience-container');
        experienceContainer.innerHTML = '';
        
        this.config.experience.forEach(exp => {
            const expItem = `
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                            <i class="${exp.icon} text-blue-600"></i>
                        </div>
                    </div>
                    <div class="ml-4">
                        <h4 class="text-lg font-bold">${exp.position}</h4>
                        <p class="text-blue-600 font-medium">${exp.company}</p>
                        <p class="text-gray-500 text-sm mb-2">${exp.period}</p>
                        <p class="text-gray-600">${exp.description}</p>
                    </div>
                </div>
            `;
            
            experienceContainer.innerHTML += expItem;
        });
    }

    loadEducation() {
        const educationContainer = document.getElementById('education-container');
        educationContainer.innerHTML = '';
        
        this.config.education.forEach(edu => {
            const eduItem = `
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                            <i class="${edu.icon} text-green-600"></i>
                        </div>
                    </div>
                    <div class="ml-4">
                        <h4 class="text-lg font-bold">${edu.degree}</h4>
                        <p class="text-green-600 font-medium">${edu.institution}</p>
                        <p class="text-gray-500 text-sm mb-2">${edu.period}</p>
                        <p class="text-gray-600">${edu.description}</p>
                    </div>
                </div>
            `;
            
            educationContainer.innerHTML += eduItem;
        });
    }

    loadContactInfo() {
        const personal = this.config.personal;
        const contactDetails = document.getElementById('contact-details');
        const contactMessage = document.getElementById('contact-message');
        
        // Contact message
        contactMessage.textContent = "Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.";
        
        // Contact details
        contactDetails.innerHTML = `
            <div class="flex items-center">
                <div class="bg-white/20 p-3 rounded-lg mr-4">
                    <i class="fas fa-envelope"></i>
                </div>
                <div>
                    <h4 class="font-bold">Email</h4>
                    <p class="text-blue-100">${personal.email}</p>
                </div>
            </div>
            
            <div class="flex items-center">
                <div class="bg-white/20 p-3 rounded-lg mr-4">
                    <i class="fas fa-phone"></i>
                </div>
                <div>
                    <h4 class="font-bold">Phone</h4>
                    <p class="text-blue-100">${personal.phone}</p>
                </div>
            </div>
            
            <div class="flex items-center">
                <div class="bg-white/20 p-3 rounded-lg mr-4">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                    <h4 class="font-bold">Location</h4>
                    <p class="text-blue-100">${personal.location}</p>
                </div>
            </div>
        `;
        
        // About highlights
        const aboutHighlights = document.getElementById('about-highlights');
        aboutHighlights.innerHTML = `
            <div class="flex items-center">
                <div class="bg-blue-100 p-3 rounded-lg mr-4">
                    <i class="fas fa-code text-blue-600"></i>
                </div>
                <div>
                    <h4 class="font-bold">Web Development</h4>
                    <p class="text-sm text-gray-500">Full stack solutions</p>
                </div>
            </div>
            
            <div class="flex items-center">
                <div class="bg-green-100 p-3 rounded-lg mr-4">
                    <i class="fas fa-file-excel text-green-600"></i>
                </div>
                <div>
                    <h4 class="font-bold">Microsoft Excel</h4>
                    <p class="text-sm text-gray-500">Data analysis & automation</p>
                </div>
            </div>
            
            <div class="flex items-center">
                <div class="bg-purple-100 p-3 rounded-lg mr-4">
                    <i class="fas fa-database text-purple-600"></i>
                </div>
                <div>
                    <h4 class="font-bold">PostgreSQL</h4>
                    <p class="text-sm text-gray-500">Database management</p>
                </div>
            </div>
            
            <div class="flex items-center">
                <div class="bg-yellow-100 p-3 rounded-lg mr-4">
                    <i class="fas fa-paint-brush text-yellow-600"></i>
                </div>
                <div>
                    <h4 class="font-bold">UI/UX Design</h4>
                    <p class="text-sm text-gray-500">User-centered design</p>
                </div>
            </div>
        `;
    }

    // ============ EVENT LISTENERS ============

    setupEventListeners() {
        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = menuBtn.querySelector('i');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            });
        }
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.querySelector('i').classList.remove('fa-times');
                menuBtn.querySelector('i').classList.add('fa-bars');
            });
        });
        
        // Back to top button
        const backToTopBtn = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const name = document.getElementById('name-input').value;
                const email = document.getElementById('email-input').value;
                const message = document.getElementById('message-input').value;
                
                // Simple validation
                if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
                submitBtn.disabled = true;
                
                // In a real app, you would send this to a server
                // For now, simulate API call
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    alert(this.config.contact.successMessage);
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            });
        }
        
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        menuBtn.querySelector('i').classList.remove('fa-times');
                        menuBtn.querySelector('i').classList.add('fa-bars');
                    }
                    
                    // Calculate offset for fixed navbar
                    const navbarHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============ HELPER FUNCTIONS ============

    setCurrentYear() {
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }

    showProjectDetails(projectId) {
        const project = this.config.projects.find(p => p.id === projectId);
        
        if (project) {
            const modalHtml = `
                <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-6">
                                <h3 class="text-2xl font-bold">${project.title}</h3>
                                <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-times text-xl"></i>
                                </button>
                            </div>
                            
                            <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-6">
                            
                            <div class="mb-6">
                                <h4 class="font-bold mb-2">Description</h4>
                                <p class="text-gray-600">${project.longDescription}</p>
                            </div>
                            
                            <div class="mb-6">
                                <h4 class="font-bold mb-2">Technologies Used</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${project.tags.map(tag => 
                                        `<span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">${tag}</span>`
                                    ).join('')}
                                </div>
                            </div>
                            
                            <div class="flex space-x-4">
                                ${project.githubUrl ? `
                                    <a href="${project.githubUrl}" target="_blank" class="flex-1 bg-gray-900 text-white py-3 rounded-lg text-center hover:bg-black transition">
                                        <i class="fab fa-github mr-2"></i> View Code
                                    </a>
                                ` : ''}
                                
                                ${project.liveUrl ? `
                                    <a href="${project.liveUrl}" target="_blank" class="flex-1 bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700 transition">
                                        <i class="fas fa-external-link-alt mr-2"></i> Live Demo
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', modalHtml);
        }
    }
}

// Initialize the portfolio app
const portfolioApp = new PortfolioApp();