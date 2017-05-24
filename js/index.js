let fight = (fighter, improvedFighter, ...point) => {
    for (let i=0; i < point.length; i++) {
        fighter.hit(improvedFighter, point[i]);
        improvedFighter.hit(fighter, point[i]);

        if (fighter.health <= 0 || improvedFighter.health <= 0) {
            console.log('Result of the game: ' + fighter.health + ' : ' + improvedFighter.health);
            let winner = fighter.health > 0 ? fighter.name : improvedFighter.name;
            console.log('The winner is ' + winner);
            document.getElementsByTagName("button")[0].setAttribute("disabled", "disabled");
            break;
        }
    }
};
