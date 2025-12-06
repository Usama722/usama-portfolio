// Portfolio Configuration File
// Ye file aap easily update kar saktay hain - sirf yahan changes karen

const portfolioConfig = {
    // ============ PERSONAL INFORMATION ============
    personal: {
        firstName: "Muhammad",
        lastName: "Usama",
        title: "Microsoft Excel Expert with Database",
        bio: "I'm a passionate developer with 3+ years of experience building web applications. I specialize in modern frontend technologies and have a keen eye for design.",
        email: "usamazhar722@gmail.com",
        phone: "+92 307 667 4438",
        location: "Bahawalpur, Pakistan",
        resumeUrl: "assets/docs/resume.pdf",

        // Profile Images
        profileImage: "assets/images/dp.jpeg",  // آپ کی تصویر
        aboutImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },

    // ============ SOCIAL LINKS ============
    social: {
        github: "https://github.com/Usama722",
        linkedin: "https://www.linkedin.com/in/muhammad-usama-50989b305",
        twitter: "https://twitter.com/yourusername",      // Update your username
        instagram: "https://instagram.com/yourusername",  // Update your username
        facebook: "https://facebook.com/yourusername"     // Update your username
    },

    // ============ SKILLS ============
    skills: [
        {
            name: "Frontend",
            description: "HTML, CSS, JavaScript, React",
            icon: "fab fa-html5",
            color: "blue",
            level: 40
        },
        {
            name: "Backend",
            description: "Flask",
            icon: "fas fa-server",
            color: "green",
            level: 40
        },
        {
            name: "Microsoft Excel",
            description: "Data Analysis, Pivot Tables, Formulas, VBA",
            icon: "fas fa-file-excel",
            color: "green",
            level: 95
        },
        {
            name: "PostgreSQL",
            description: "Database Design, SQL Queries",
            icon: "fas fa-database",
            color: "blue",
            level: 60
        },
    ],

    // ============ TECHNICAL SKILLS (Progress Bars) ============
    technicalSkills: [
        { name: "JavaScript", level: 40, color: "blue" },
        { name: "React", level: 30, color: "green" },
        { name: "PostgreSQL", level: 45, color: "blue" },
        { name: "Microsoft Excel", level: 95, color: "green" },
        { name: "Python", level: 40, color: "blue" }
    ],

    // ============ PROJECTS ============
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-featured online shopping platform with cart, payments, and admin dashboard.",
            longDescription: "Built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and order tracking.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            image: "assets/images/project1.jpg",
            githubUrl: "https://github.com/yourusername/ecommerce", // Update username
            liveUrl: "https://ecommerce-demo.com",
            featured: true
        },
        {
            id: 2,
            title: "Data Analysis Dashboard",
            description: "Interactive dashboard for data visualization and analysis using Excel and PostgreSQL.",
            longDescription: "Combines Microsoft Excel for data processing with PostgreSQL for data storage. Features include real-time data updates, interactive charts, and automated reports.",
            tags: ["Microsoft Excel", "PostgreSQL", "Data Analysis", "VBA"],
            image: "assets/images/project2.jpg",
            githubUrl: "https://github.com/yourusername/data-dashboard", // Update username
            liveUrl: "https://data-dashboard.com",
            featured: true
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates.",
            longDescription: "Built with Vue.js and Firebase. Features include team collaboration, real-time updates, file attachments, and deadline tracking.",
            tags: ["Vue.js", "Firebase", "Real-time"],
            image: "assets/images/project3.jpg",
            githubUrl: "https://github.com/yourusername/task-app", // Update username
            liveUrl: "https://taskapp.com",
            featured: true
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "Real-time weather application with forecasts and maps.",
            longDescription: "Uses weather API to provide real-time forecasts, interactive maps, and location-based services. Built with vanilla JavaScript and Chart.js.",
            tags: ["JavaScript", "API", "Chart.js"],
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            githubUrl: "https://github.com/yourusername/weather-app", // Update username
            liveUrl: "https://weatherapp.com",
            featured: false
        }
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            period: "2022 - Present",
            description: "Developed and maintained web applications using React and Node.js. Implemented PostgreSQL databases and optimized queries.",
            icon: "fas fa-briefcase"
        },
        {
            company: "Data Analytics Pro",
            position: "Data Analyst",
            period: "2020 - 2022",
            description: "Created data analysis reports using Microsoft Excel and PostgreSQL. Automated reporting processes and improved data accuracy by 40%.",
            icon: "fas fa-chart-line"
        },
        {
            company: "Web Design Studio",
            position: "UI/UX Designer",
            period: "2019 - 2020",
            description: "Designed user interfaces for web and mobile applications. Created wireframes, prototypes, and design systems.",
            icon: "fas fa-paint-brush"
        }
    ],

    // ============ EDUCATION ============
    education: [
        {
            institution: "University of Karachi",
            degree: "Bachelor of Computer Science",
            period: "2016 - 2020",
            description: "Graduated with honors. Specialized in databases and web development.",
            icon: "fas fa-graduation-cap"
        },
        {
            institution: "Microsoft Certification",
            degree: "Microsoft Excel Expert",
            period: "2021",
            description: "Certified in advanced Excel functions, data analysis, and automation.",
            icon: "fas fa-certificate"
        }
    ],

    // ============ CONTACT FORM ============
    contact: {
        formspreeId: "your-formspree-id", // Optional: for form submissions
        successMessage: "Thank you! Your message has been sent successfully.",
        errorMessage: "Oops! Something went wrong. Please try again."
    },

    // ============ THEME COLORS ============
    theme: {
        primaryColor: "#3b82f6",    // Blue
        secondaryColor: "#8b5cf6",  // Purple
        accentColor: "#f59e0b",     // Amber
        backgroundColor: "#f9fafb",
        textColor: "#1f2937"
    },

    // ============ SEO META DATA ============
    seo: {
        title: "Muhammad Usama - Portfolio",
        description: "Full Stack Developer specializing in modern web technologies, Microsoft Excel, and PostgreSQL.",
        keywords: "web developer, full stack, microsoft excel, postgresql, javascript, react",
        author: "Muhammad Usama"
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
