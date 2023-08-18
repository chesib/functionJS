// ------------------desafio pintar----------

// function pintar() {
// 	ele.style.backgroundColor = "yellow";
// }
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);
// ele.addEventListener("click", (color) => {
// 	if (ele.style.backgroundColor == "green") {
// 		ele.style.backgroundColor = "yellow";
// 	} else {
// 		ele.style.backgroundColor = "green";
// 	}
// });
const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";
const pintar = (color) => {
	if (ele.style.backgroundColor == "green") {
		ele.style.backgroundColor = color;
	} else {
		ele.style.backgroundColor = "green";
	}
};
ele.addEventListener("click", () => {
	pintar("yellow");
});

// --------------desafio4coloores------------

// const blue = document.getElementById("azul");
// const red = document.getElementById("rojo");
// const green = document.getElementById("verde");
// const yellow = document.getElementById("amarillo");

const changeColor = (e) => {
	e.target.style.backgroundColor = "black";
};

// blue.addEventListener("click", changeColor);
// red.addEventListener("click", changeColor);
// green.addEventListener("click", changeColor);
// yellow.addEventListener("click", changeColor);

["azul", "rojo", "verde", "amarillo"].forEach((id) => {
	const colorClick = document.getElementById(id);
	colorClick.addEventListener("click", changeColor);
});

// ----------------------------------------desafio 4 keydown ------------------
const key = document.querySelector("#key");

document.addEventListener("keydown", (event) => {
	if (event.key === "a") {
		key.style.backgroundColor = "pink";
	} else if (event.key === "s") {
		key.style.backgroundColor = "orange";
	} else if (event.key === "d") {
		key.style.backgroundColor = "skyblue"; //blue
	} else {
		console.log(`no se reconoce la tecla ${event.key}`);
	}
});

// // ----------------------------- desfio 4.2 keydown newdiv create----------------
const fatherEle = document.querySelector("#father");

document.addEventListener("keydown", (e) => {
	const newDiv = document.createElement("div");
	newDiv.style.width = "200px";
	newDiv.style.margin = "10px";
	newDiv.style.height = "200px";
	newDiv.style.backgroundColor = "white";
	newDiv.style.border = "2px solid black";

	if (e.key === "q") {
		newDiv.style.backgroundColor = "purple";
		fatherEle.appendChild(newDiv);
	} else if (e.key === "w") {
		newDiv.style.backgroundColor = "grey";
		fatherEle.appendChild(newDiv);
	} else if (e.key === "e") {
		newDiv.style.backgroundColor = "brown";
		fatherEle.appendChild(newDiv);
	} else {
		fatherEle.removeChild(fatherEle.lastChild);
	}
});
