// Step 13: Add smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Check for the "View Projects" button
            if (this.textContent.includes('View Projects')) {
                e.preventDefault();
                
                // Scroll to the projects section
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            
            // Note: If you add functionality to the "Download CV" button, 
            // you should handle it here (e.g., using window.open or a simple link).
        });
    });
});
