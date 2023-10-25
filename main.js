const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Inserisci il tuo cognome");
const colorePreferito = prompt("Qual è il tuo colore preferito?");

const password = nome + cognome + colorePreferito + "#23";

document.getElementById("passwordOutput").innerHTML = "La tua password è " + password;

