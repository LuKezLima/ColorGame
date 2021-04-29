const hexadecimal = document.getElementById("hexadecimal").innerText;
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const option5 = document.getElementById('option5')

const randomColors = []

function generateColor() {
    let random = 0
    for (let i = 0; i < 5; i++) {
        random = (Math.random(i) * 1000000).toFixed(0)
        randomColors.push(random)
    }
    return

}

function randomHexa() {
    let hexadecimal = document.getElementById("hexadecimal")
    const randomhexa = randomColors[Math.floor(Math.random() * randomColors.length)];
    hexadecimal.innerText = `#${randomhexa}`
    return randomhexa
}

generateColor()
randomHexa()

option1.style.backgroundColor = randomColors[4]
option2.style.backgroundColor = randomColors[3]
option3.style.backgroundColor = randomColors[2]
option4.style.backgroundColor = randomColors[1]
option5.style.backgroundColor = randomColors[0]



function formatRGB(option) {
    const color = option.style.backgroundColor.split("rgb(")[1].split(")")[0].split(",")
    return color[0] + color[1] + color[2]
}

console.log(formatRGB(option1))


function rgbToHex() {

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

console.log(hexToRgb(912363))



