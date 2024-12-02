// Références aux éléments
const btnRecherche = document.getElementById('btn-recherche');
const searchField = document.getElementById('search-field');
const closeIcon = document.getElementById('close-icon');

// Quand le bouton est cliqué
btnRecherche.addEventListener('click', function() {
    // Ajouter la classe active pour afficher le champ de recherche et l'icône
    btnRecherche.classList.add('active');
    // Activer le champ de texte pour permettre la saisie
    searchField.focus();
});

// Quand l'icône de fermeture est cliquée
closeIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Empêcher la propagation du clic vers le bouton
    // Retirer la classe active pour revenir à l'état initial
    btnRecherche.classList.remove('active');
    // Effacer le champ de texte
    searchField.value = '';
});
