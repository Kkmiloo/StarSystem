/** @type {HTMLCanvasElement} */

import CelestialBody from "./class/CelestialBody.js"
import Moon from "./class/Moon.js";
import Planet from "./class/Planet.js"
import StartSystem from "./class/StarSystem.js";

import StarSystem from "./class/StarSystem.js";
import Sun from "./class/Sun.js";
const canvas = document.querySelector("#canvas1");
const starSystem = new StarSystem(canvas, 0, 0);
const btnAdd = document.querySelector("#addSun")
const htmlPanel = document.getElementById("panel")

const propertyPanel = document.getElementById("propertyPanel")

const container = canvas.parentElement;
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

const system = { star: {}, planets: [] }
const data = { id: 2, name: "hola", system: system }




btnAdd.addEventListener('click', e => {

    let sunInfo = { x: canvas.width / 2, y: canvas.height / 2, radius: 500, color: "yellow", distance: 0, angle: 0, speed: 0, id: window.crypto.randomUUID() }
    let sun = new Sun(sunInfo);
    starSystem.addPlanet(sun);
    starSystem.animate();

    system.star.name = "sun"
    system.star.id = window.crypto.randomUUID();
    system.star = sunInfo

    const info = { ...sunInfo, name: "sun", id: system.star.id }
    updateLocalStorage();
    addToPanel(info, sun)
})


canvas.addEventListener('mousedown', function (e) {
    e.preventDefault();

    starSystem.handleMouseDown(e);
});

canvas.addEventListener('mouseup', function (e) {
    starSystem.handleMouseUp(e)
});

canvas.addEventListener('mousemove', function (e) {
    starSystem.handleMouseMove(e)
});



function addToPanel(item, planet) {

    console.log(item);
    const div = document.createElement('div')

    const title = document.createElement('h4')
    title.innerHTML = item.name;

    div.appendChild(title)

    div.addEventListener('click', () => showInfoPropertyPanel(planet))
    htmlPanel.appendChild(div)

}


function showInfoPropertyPanel(planet) {

    clearPorpertyPanel()
    const div = document.createElement('div')
    div.classList.add("d-flex", "flex-column")

    for (const [key, value] of Object.entries(planet)) {

        const label = document.createElement('label')
        const input = document.createElement('input')
        label.innerHTML = key;
        input.value = value
        input.name = key;

        input.addEventListener('change', (e) => {
            input.value = e.target.value;
            let value = parseFloat(e.target.value)
            if (!isNaN(value)) {

                planet[e.target.name] = parseFloat(e.target.value)
            } else {

                planet[e.target.name] = e.target.value
            }

            console.log(planet)
        })

        div.appendChild(label)
        div.appendChild(input)
    }

    propertyPanel.appendChild(div)

}


function clearPorpertyPanel() {

    while (propertyPanel.firstChild) {
        propertyPanel.removeChild(propertyPanel.firstChild)
    }
}



function updateLocalStorage() {

    localStorage.setItem("document", JSON.stringify(data))
}




/* 
let earthInfo = { x, y, radius, color, distance, angle, speed }
let earth = new Planet(canvas.width / 2, canvas.height / 2, 10, "blue", 20, 0, 10);


let moonInfo = {x, y, radius, color, distance, angle, speed, parentPlanet}
let moon = new Moon(0, 0, 3, "gray", 1, 0, 100, earth);
let moon2 = new Moon(0, 0, 3, "red", 10, 0, 200, earth);


earth.addMoon(moon);
earth.addMoon(moon2);



sun = new Sun(canvas.width / 2, canvas.height / 2, 50, "#FDB813", 0, 0, 1);
sun.addPlanet(earth)
starSystem.addPlanet(sun);
 */


