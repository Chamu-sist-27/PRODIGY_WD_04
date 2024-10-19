const titleText = "Chamundeswari";
const typedTitleElement = document.getElementById('typed-title');
const descriptionElement = document.querySelector('p');
const projectsSection = document.getElementById('projects'); 
let titleIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        typedTitleElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 150);
    } else {
        showDescription();
    }
}

function showDescription() {
    descriptionElement.style.opacity = 1;
    descriptionElement.style.animation = 'textReveal 1s ease-in-out forwards';
    descriptionElement.style.animationDelay = '2s';

    
    setTimeout(() => {
        projectsSection.style.opacity = 1; 
        projectsSection.style.transition = 'opacity 1s'; 
    }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    typeTitle();

    const headings = document.querySelectorAll('.animated-heading');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    headings.forEach(heading => {
        observer.observe(heading);
    });

    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, timelineOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});
