document.getElementById('scriptHubButton').addEventListener('click', function() {
    var scriptMenu = document.getElementById('scriptMenu');
    var overlay = document.getElementById('overlay');

    // Détecter la largeur du menu dynamiquement
    var menuWidth = scriptMenu.offsetWidth || 800;

    // Basculer l'affichage du menu
    if (scriptMenu.style.right === '0px') {
        scriptMenu.style.right = `-${menuWidth}px`;  // Hors écran
        overlay.classList.remove('show');  
    } else {
        scriptMenu.style.right = '0px';  // À l'écran
        overlay.classList.add('show');   
    }
});

// Fermer le menu en cliquant sur l'overlay
document.getElementById('overlay').addEventListener('click', function() {
    var scriptMenu = document.getElementById('scriptMenu');
    var overlay = document.getElementById('overlay');

    var menuWidth = scriptMenu.offsetWidth || 800;
    scriptMenu.style.right = `-${menuWidth}px`;  
    overlay.classList.remove('show');  
});
