
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

// Create linear gradient
const grad=ctx.createLinearGradient(0,0,280,0);
grad.addColorStop(0, "lightblue");
grad.addColorStop(1, "darkblue");

// Fill outlined text with gradient
ctx.font = "50px Arial";
ctx.strokeStyle = grad;
ctx.strokeText("Hello World",10,80);