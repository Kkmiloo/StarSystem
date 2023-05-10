
const canvas = document.querySelector("#canvas1");

export default class StartSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.planets = [];
        this.offsetX = 0;
        this.offsetY = 0;
        this.isDragging = false;
    }

    addPlanet(planet) {
        this.planets.push(planet);
    }

    animate() {

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.translate(this.offsetX, this.offsetY);
        this.planets.forEach(planet => {
            planet.update();
            planet.draw(this.ctx);
        });
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);

        requestAnimationFrame(this.animate.bind(this));
    }


    // Evento mousedown para actualizar offsetX y offsetY
    handleMouseDown(event) {
        if (event.button === 1) {
            this.canvas.classList.add('grabbing');
            this.isDragging = true;
            this.startDragX = event.clientX - this.offsetX;
            this.startDragY = event.clientY - this.offsetY;
        }
    }

    // Evento mousemove para mover el contenido del canvas
    handleMouseMove(event) {
        if (this.isDragging) {
            const x = event.clientX - this.startDragX;
            const y = event.clientY - this.startDragY;
            this.offsetX = x;
            this.offsetY = y;

        }
    }

    // Evento mouseup para detener el arrastre
    handleMouseUp(event) {
        if (event.button === 1) {
            this.canvas.classList.remove('grabbing');

            this.isDragging = false;
        }
    }
}