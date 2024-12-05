// Réponses correctes pour chaque niveau
const reponsesCorrectes = {
    1: "180",
    2: "cybersécurité",
    3: "solution_123",
    4: "11"
};

// Temps restant (en secondes)
let tempsRestant = 360;

// Fonction pour démarrer le chronomètre
function demarrerTimer() {
    const timerElement = document.getElementById("temps");
    const interval = setInterval(() => {
        if (tempsRestant > 0) {
            tempsRestant--;
            timerElement.textContent = tempsRestant;
        } else {
            clearInterval(interval);
            alert("Temps écoulé ! Essayez à nouveau.");
            location.reload(); // Recharge la page
        }
    }, 1000);
}

// Fonction pour valider la réponse
function verifierReponse(niveau) {
    const reponse = document.getElementById(`reponse${niveau}`).value.trim();
    if (reponse === reponsesCorrectes[niveau]) {
        alert("Bonne réponse !");
        passerAuNiveauSuivant(niveau);
    } else {
        alert("Mauvaise réponse, essaie encore.");
    }
}

// Fonction pour passer au niveau suivant
function passerAuNiveauSuivant(niveauActuel) {
    const niveauActuelElem = document.getElementById(`niveau${niveauActuel}`);
    const niveauSuivantElem = document.getElementById(`niveau${niveauActuel + 1}`);
    
    niveauActuelElem.classList.remove("actif");
    if (niveauSuivantElem) {
        niveauSuivantElem.classList.add("actif");
    } else {
        // Si aucun niveau suivant, afficher le résultat final
        document.getElementById("fin").classList.add("actif");
        document.getElementById("tempsFinal").textContent = tempsRestant;
    }
}

// Fonction pour afficher la clé dans la console (niveau 3)
function inspecterConsole() {
    console.log("solution_123"); // Imprime la clé dans la console
    // alert("Regardez la console pour trouver la solution !");
}

// Initialiser le jeu
document.addEventListener("DOMContentLoaded", () => {
    demarrerTimer();
});
