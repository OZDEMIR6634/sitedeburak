
// ==========================================
// MODE SOMBRE
// ==========================================

const darkModeButton = document.getElementById("darkMode");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeButton.textContent = "☀️ Mode clair";

    } else {

        darkModeButton.textContent = "🌙 Mode sombre";

    }

});


// ==========================================
// MENU TELEPHONE
// ==========================================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {

    menu.classList.toggle("active");

});


// Fermer le menu lorsqu'on clique sur un lien

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("active");

    });

});


// ==========================================
// ANIMATION DES SECTIONS
// ==========================================

const sections = document.querySelectorAll(".section");

function afficherSections() {

    sections.forEach(function(section) {

        const position =
            section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            section.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", afficherSections);

afficherSections();


// ==========================================
// ANIMATION DES BARRES DE COMPETENCES
// ==========================================

const barres = document.querySelectorAll(".progression");

let barresAnimees = false;

function animerCompetences() {

    const sectionCompetences =
        document.getElementById("competences");

    const position =
        sectionCompetences.getBoundingClientRect().top;

    if (
        position < window.innerHeight - 100 &&
        !barresAnimees
    ) {

        document.querySelector(".progression.html").style.width = "80%";

        document.querySelector(".progression.css").style.width = "70%";

        document.querySelector(".progression.javascript").style.width = "40%";

        barresAnimees = true;

    }

}

window.addEventListener("scroll", animerCompetences);


// ==========================================
// BOUTON RETOUR EN HAUT
// ==========================================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// FORMULAIRE DE CONTACT
// ==========================================

const form = document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


form.addEventListener("submit", function(event) {

    // Empêche la page de se recharger

    event.preventDefault();


    const nom =
        document.getElementById("nom").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Vérification du nom

    if (nom === "") {

        formMessage.textContent =
            "❌ Merci d'indiquer ton nom.";

        formMessage.style.color = "red";

        return;

    }


    // Vérification de l'email

    if (email === "") {

        formMessage.textContent =
            "❌ Merci d'indiquer ton email.";

        formMessage.style.color = "red";

        return;

    }


    // Vérification du message

    if (message === "") {

        formMessage.textContent =
            "❌ Merci d'écrire un message.";

        formMessage.style.color = "red";

        return;

    }


    // Tout est correct

    formMessage.textContent =
        "✅ Merci " + nom + " ! Ton message est prêt à être envoyé.";

    formMessage.style.color = "green";


    // On vide le formulaire

    form.reset();

});
