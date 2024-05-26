var body   = document.querySelector("body");
var form   = document.createElement("div");
var header = document.createElement("h4");
var container = document.createElement("div");
var box    = document.createElement("input");
var btn    = document.createElement("button");
var show   = document.querySelector("#result");

body.appendChild(form);

form.appendChild(header);
form.appendChild(container);
form.appendChild(show);

container.appendChild(box);
container.appendChild(btn);

body.classList.add("body");

form.classList.add("form");

header.innerText = "Change string to Propercase!";

header.style.color = "";

container.classList.add("container");

box.innerText    = "";

box.classList.add("input");

btn.innerText    = "Click";

btn.classList.add("button");


btn.addEventListener("click",capitalizeFLetter)

function capitalizeFLetter() {
	var string = box.value;
	properCase = string.charAt(0).toUpperCase() + string.slice(1);
    document.getElementById("result").innerHTML = properCase;

        
}
capitalizeFLetter()
