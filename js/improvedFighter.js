class ImprovedFighter extends Fighter {
    hit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}

let Pacquiao = new ImprovedFighter('Manny Pacquiao');
