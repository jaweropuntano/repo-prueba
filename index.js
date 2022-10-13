const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");


console.log (input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})
h1.innerHTML = "Mi Web";
h1.setAttribute("class", "Rojo");
input.value = "456";
const img = document.createElement("img");
img.setAttribute("src", "https://www.pequeocio.com/wp-content/uploads/2009/05/el-patito-feo-1.jpg");
 console.log(img);
pid.append(img);

