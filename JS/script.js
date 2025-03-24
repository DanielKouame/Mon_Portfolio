window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#4682b4"; // Couleur secondaire
        header.style.transition = "0.5s";
    } else {
        header.style.backgroundColor = "#2e8b57"; // Couleur primaire
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".infos, .project, .Competence, .form");

    function revealSections() {
        sections.forEach((section) => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Pour activer dès le chargement
});



// Sélectionner le bouton par son ID
let button = document.getElementById("hoverButton");

// Ajouter un effet lorsque la souris entre dans le bouton
button.addEventListener("mouseover", function() {
    button.style.transform = "translateY(-10px)"; // Déplacer le bouton vers le haut
});

// Ajouter un effet lorsque la souris sort du bouton
button.addEventListener("mouseout", function() {
    button.style.transform = "translateY(0)"; // Retour à la position initiale
});


// Gestion de l'envoi du formulaire
document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value;

    if (!prenom || !nom || !sujet || !message) {
        alert("Veuillez remplir tous les champs avant de soumettre le formulaire.");
    } else {
        alert("Merci pour votre message, " + prenom + " " + nom + " !");
    }
});