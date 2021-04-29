const hexadecimal = document.getElementById("hexadecimal").innerText;
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const option5 = document.getElementById('option5')

let randomColors = []

function generateColor() {
    let random = 0
    for (let i = 0; i < 5; i++) {
        random = (Math.random(i) * (999999 - 100000) + 100000).toFixed(0)
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


window.onload(
  reload()
)


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: Math.floor(parseInt(result[1], 16)),
        g: Math.floor(parseInt(result[2], 16)),
        b: Math.floor(parseInt(result[3], 16))
    } : null;
}

function findRGB() {
    let obj = hexToRgb(randomHexa())
    const rgb = `(${obj.r},${obj.g},${obj.b})`
    return obj.r + obj.g + obj.b
}


function correctAnswer(option) {
    let result = document.getElementById('message-result');

    let score = document.getElementById("resultado")
    let rgb = findRGB()
    let sumrgb = sumRGB(option)
 
    if (rgb == sumrgb) {
        reload()
        score.innerText++
        result.innerText = "Got it!"
    } else {
        reload()
        result.innerText = "Wrong :("
        score.innerText = 0
    }
}

function sumRGB(option) {
    const array = (option.style.backgroundColor.split("rgb")[1].split("(")[1].split(")")[0].split(","))
    const total = Number(array[0]) + Number(array[1]) + Number(array[2])
    return total
}


function reload() {
    randomColors = []
    console.log(randomColors)
    generateColor()
    randomHexa()
    option1.style.backgroundColor = randomColors[4]
    option2.style.backgroundColor = randomColors[3]
    option3.style.backgroundColor = randomColors[2]
    option4.style.backgroundColor = randomColors[1]
    option5.style.backgroundColor = randomColors[0]
}

