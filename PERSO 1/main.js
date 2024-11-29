// Activer ou désactiver le mode sombre 
const toggleButton = document.getElementById("darkModeToggle");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Mode Clair";
        } else {
            toggleButton.textContent = "Mode Sombre";
        }
    });
}

// J'ajouter un effet sur les images quand la souris passe dessus
// Quand la souris passe sur l'image, on agrandit l'image et on ajoute une ombre        
// Quand la souris quitte l'image, on remet l'image à sa taille normale et on enlève l'ombre

const images = document.querySelectorAll("#imageContainer img");

if (images.length > 0) {
    images.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.2)";
            img.style.transition = "transform 0.3s ease";
            img.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });
    });

}

// Valider les informations du formulaire de connexion - page : "Se connecter"
// Message d'erreur ou de succès
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const statusMessage = document.getElementById("statusMessage"); 

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const pseudo = document.getElementById("pseudo").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const newpassword = document.getElementById("newpassword").value;

            let errors = [];

            if (pseudo.length < 6) {
                errors.push("• Le champ pseudo doit contenir au moins 6 caractères.");}
            if (!email) {
                errors.push("• Le champ email ne peut pas être vide.");}

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{10,}$/;
            if (!passwordRegex.test(password)) {
                errors.push(
                    "• Le mot de passe doit faire 10 caractères minimum, contenir une minuscule, une majuscule, un chiffre et un caractère spécial.");}

            if (newpassword !== password) {
                errors.push("• Les mots de passe ne correspondent pas.");}

            if (errors.length > 0) {
                statusMessage.classList.add("error");
                statusMessage.classList.remove("success");
                statusMessage.innerHTML = errors.join("<br>");
                statusMessage.style.display = "block";
            } else {
                statusMessage.classList.add("success");
                statusMessage.classList.remove("error");
                statusMessage.innerHTML = "Connexion réussie !";
                statusMessage.style.display = "block";

                console.log("Formulaire valide !");}
        });
    } 
});


// Les Tabs pour la page "Mentions légales" 
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("tab-active")); 
        contents.forEach((c) => c.classList.remove("active")); 

        tab.classList.add("tab-active"); 
        document.getElementById(tab.dataset.tab).classList.add("active"); 
    });
});