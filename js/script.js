// ========================================
// GSAP SETUP
// ========================================

gsap.registerPlugin(ScrollTrigger);


// ========================================
// HERO ANIMATION
// ========================================

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power4.out"
    }
});


heroTimeline
    .from(".hero-label", {
        opacity: 0,
        y: 30,
        duration: 1
    })

    .from(".hero h1", {
        opacity: 0,
        y: 100,
        duration: 1.2
    }, "-=0.6")

    .from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, "-=0.7")

    .from(".hero-actions", {
        opacity: 0,
        y: 25,
        duration: 0.7
    }, "-=0.5")

    .from(".hero-scroll", {
        opacity: 0,
        x: 30,
        duration: 0.8
    }, "-=0.4");


// ========================================
// NAVIGATION
// ========================================

gsap.from(".site-header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


// ========================================
// SECTION LABELS
// ========================================

gsap.utils.toArray(".section-label").forEach((label) => {

    gsap.from(label, {
        scrollTrigger: {
            trigger: label,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },

        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power3.out"
    });

});


// ========================================
// ABOUT ANIMATION
// ========================================

gsap.from(".about-content h2", {

    scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },

    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out"

});


gsap.from(".about-text", {

    scrollTrigger: {
        trigger: ".about-text",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },

    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.15,
    ease: "power3.out"

});


// ========================================
// CERTIFICATIONS ANIMATION
// ========================================

gsap.from(".cert-card", {

    scrollTrigger: {
        trigger: ".certs-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },

    opacity: 0,
    y: 50,
    duration: 0.8,

    stagger: 0.12,

    ease: "power3.out"

});


// ========================================
// STACK ANIMATION
// ========================================

gsap.from(".stack-category", {

    scrollTrigger: {
        trigger: ".stack-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },

    opacity: 0,
    y: 50,
    duration: 0.8,

    stagger: 0.12,

    ease: "power3.out"

});


// ========================================
// PROJECT ANIMATION
// ========================================

gsap.from(".project-card", {

    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },

    opacity: 0,
    y: 70,

    duration: 0.9,

    stagger: 0.15,

    ease: "power3.out"

});


// ========================================
// CONTACT ANIMATION
// ========================================

gsap.from(".contact-content", {

    scrollTrigger: {
        trigger: ".contact-content",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },

    opacity: 0,
    y: 60,

    duration: 1,

    ease: "power3.out"

});


// ========================================
// PROJECT CARD HOVER
// ========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -10,
            duration: 0.4,
            ease: "power2.out"
        });

    });


    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        });

    });

});