import CelestialBody from "./CelestialBody.js";

export default class Planet extends CelestialBody {
    constructor({ x, y, radius, color, distance, angle, speed }) {
        super({ x, y, radius, color, distance, angle, speed });
        this.moons = [];
    }

    addMoon(moon) {
        moon.distance = this.radius + + moon.radius + moon.distance;
        moon.angle = this.angle + Math.random() * Math.PI * 2; // Randomiza el ángulo inicial de la luna
        this.moons.push(moon);
    }


    draw(ctx) {
        super.draw(ctx);
        this.moons.forEach(moon => {
            moon.draw(ctx);
        });
    }

    update() {
        super.update();
        this.moons.forEach(moon => {
            moon.update();
        });
    }
}