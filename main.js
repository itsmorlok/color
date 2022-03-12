onload = randomizeColor();

function randomizeColor() {
    let hex = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
    document.getElementById("hex").innerHTML = hex;
    document.body.style.backgroundColor = hex;
}