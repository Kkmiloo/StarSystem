import CelestialBody from "./CelestialBody.js";


export default class Sun extends CelestialBody {
    constructor({ x, y, radius, color, distance, angle, speed }) {
        super({ x, y, radius, color, distance, angle, speed });
        this.planets = [];
    }

    addPlanet(planet) {
        planet.distance += this.radius + planet.radius;
        planet.angle = this.angle;
        this.planets.push(planet);
    }

    draw(ctx) {
        super.draw(ctx);
        this.planets.forEach(planet => {
            planet.draw(ctx);
        });
    }

    update() {
        super.update();
        this.planets.forEach(planet => {
            planet.update();
        });
    }
}
