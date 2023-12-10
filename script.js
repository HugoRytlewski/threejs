document.addEventListener('keydown', function(event) {
    let key = event.key.toLowerCase(); 

 
    if (key === 'g') {
        let gamesSection = document.getElementById('games');
        if (gamesSection) {
            gamesSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    } else if (key === 's') {
        let statsSection = document.getElementById('stats');
        if (statsSection) {
            statsSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    } else if (key === 'd') {
        let donateSection = document.getElementById('donate');
        if (donateSection) {
            donateSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    }
});
