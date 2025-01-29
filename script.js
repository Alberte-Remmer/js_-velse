window.addEventListener("load", sidenVises);

// Oprettelse af konstanter
const snapsElement = document.querySelector("#snaps");
const ølElement = document.querySelector("#øl");
const lemonElement = document.querySelector("#lemon");
const pepsiElement = document.querySelector("#pepsi");

function sidenVises() {
  console.log("sidenVises");
  // Gør knappen klikbar
  document.querySelector("#snaps").addEventListener("click", visAlkohol);
  document.querySelector("#øl").addEventListener("click", visAlkohol);
  document.querySelector("#lemon").addEventListener("click", visAlkoholfri);
  document.querySelector("#pepsi").addEventListener("click", visAlkoholfri);
}

function visAlkohol() {
  console.log("indeholder alkohol");
}

function visAlkoholfri() {
  console.log("alkoholfri");
}
