class Fighter {
    constructor(name, power=5, health=1000) {
        this.name = name;
        this.power = parseInt(power);
        this.health = parseInt(health);
    }

    setDamage(damage) {
        if (this.health - damage < 0) {
            this.health = 0;
        }
        else {
            this.health = this.health - damage;
        }
        console.log('health: ' + this.health);
    }

    hit(enemy, point) {
        enemy.setDamage(point * this.power);
    }
}

let Lomachenko = new Fighter('Vasyl Lomachenko');
