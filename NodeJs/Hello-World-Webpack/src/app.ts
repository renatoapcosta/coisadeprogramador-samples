import {NinjaTurtle, INinjaTurtle, NinjasTurtles} from "./ninjaTurtle";
import $ = require('jquery');

$(() => {
    NinjasTurtles.start();
    setInterval(() => NinjasTurtles.start(), 5000);
});
