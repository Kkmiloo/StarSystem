const canvas = document.querySelector("#canvas1");

export default class CelestialBody {
    constructor({ x, y, radius, color, distance, angle, speed }) {


        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.distance = distance;
        this.angle = angle;
        this.speed = speed;
        this.scale = canvas.height / canvas.width;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        this.scale = canvas.height / canvas.width;
        ctx.arc(this.x, this.y, this.radius * this.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }


    update() {
        this.angle += this.speed * 0.001;
        this.x = canvas.width / 2 + this.distance * Math.cos(this.angle);
        this.y = canvas.height / 2 + this.distance * Math.sin(this.angle);
    }
}