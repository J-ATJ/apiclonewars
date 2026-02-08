function setupParticles() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = document.getElementById("particles");
    if (!container) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createParticles();
                observer.disconnect();
            }
        });
    });
    observer.observe(document.querySelector("body"));
}

function createParticles() {
    const container = document.getElementById("particles");
    const total = window.innerWidth < 768 ? 25 : 50;

    for (let i = 0; i < total; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = Math.random() * 6 + 3 + "s";
        container.appendChild(particle);
    }
}

setupParticles();
