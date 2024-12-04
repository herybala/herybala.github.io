// Réponses correctes pour chaque niveau
const reponsesCorrectes = {
    1: "There is a secret code",
    2: "mot_de_passe",
    3: "cle_finale"
};

// Fonction pour valider la réponse
function verifierReponse(niveau) {
    const reponse = document.getElementById(`reponse${niveau}`).value;
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
    
    // Masquer le niveau actuel et afficher le suivant
    niveauActuelElem.classList.remove("actif");
    if (niveauSuivantElem) {
        niveauSuivantElem.classList.add("actif");
    }
}

// Fonction pour le défi JavaScript du niveau 3
function obtenirCle() {
    console.log("cle_finale"); // Affiche la clé dans la console
    alert("La clé a été imprimée dans la console. Inspecte-la pour la trouver !");
}
