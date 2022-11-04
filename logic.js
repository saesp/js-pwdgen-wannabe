// PASSWORD GENERATOR


// chiedere all'utente il suo nome
let nome = prompt("Inserisci il tuo nome");
console.log(nome);

// chiedere il suo cognome
let cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

// chiedere il suo colore preferito
let colore = prompt("Inserisci il tuo colore preferito");
console.log(colore);

// output
document.getElementById("first-title").innerHTML = `${nome}${cognome}${colore}21`;