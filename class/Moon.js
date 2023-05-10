import CelestialBody from "./CelestialBody.js";

export default class Moon extends CelestialBody {
    constructor({ x, y, radius, color, distance, angle, speed, parentPlanet }) {
        super({ x, y, radius, color, distance, angle, speed });
        this.parentPlanet = parentPlanet;
    }

    update() {
        this.angle += this.speed * 0.001;
        this.x = this.parentPlanet.x + (this.distance * Math.cos(this.angle));
        this.y = this.parentPlanet.y + (this.distance * Math.sin(this.angle));
    }
}