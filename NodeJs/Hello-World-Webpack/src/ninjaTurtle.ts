import $ = require('jquery');

export interface INinjaTurtle {
    name: string;
    greeter(): void;
}

export class NinjaTurtle implements INinjaTurtle {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    greeter() {
        return "Cowabunga, ".concat(this.name);
    }

    getImage() {
        return './images/'.concat(this.name.toLowerCase(), '.jpg');
    }
}

export class NinjasTurtles {
    private static turtles = ['Michelangelo', 'Donatello', 'Raphael', 'Leonardo'];
    private static index: number = 0;

    static start() {
        if (this.index > this.turtles.length - 1) {
            this.index = 0;
        }

        let ninjaTurtle = new NinjaTurtle(this.turtles[this.index]);

        $('#message').html(ninjaTurtle.greeter());
        $('#picture').attr("src", ninjaTurtle.getImage());

        this.index++;
    }
}