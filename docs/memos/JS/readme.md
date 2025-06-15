
# 📘 Mémo JavaScript – Bases et exemples fondamentaux

JavaScript est un langage de programmation **côté client**, utilisé pour rendre les pages web interactives. Ce mémo vous présente les bases avec des **exemples commentés**.

---

## 🧱 Insertion de JavaScript dans une page HTML

```html
<script>
  alert("Bienvenue !");
</script>
```
👉 Ce script affiche une boîte de dialogue dès le chargement de la page.

---

## ✍️ Déclaration de variables

```javascript
let nom = "Alice";
const PI = 3.14;
var age = 25;
```
- `let` : variable modifiable, visible dans le bloc courant.
- `const` : constante non modifiable.
- `var` : ancienne méthode, à éviter si possible.

---

## 🔢 Types de données

```javascript
let texte = "Bonjour";
let nombre = 42;
let estActif = true;
let rien = null;
let inconnu;
```
👉 JavaScript est faiblement typé : une variable peut changer de type dynamiquement.

---

## 🔄 Conditions

```javascript
let age = 20;

if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
```
👉 Permet d'exécuter un code selon une condition vraie ou fausse.

---

## 🔁 Boucles

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Tour n°", i);
}

let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}
```
👉 Utilisées pour répéter des instructions un nombre déterminé (`for`) ou indéterminé (`while`).

---

## 🎯 Fonctions

```javascript
function direBonjour(prenom) {
  return "Bonjour " + prenom;
}

console.log(direBonjour("Lucie"));
```
👉 Une fonction permet de réutiliser un bloc de code. Ici, on personnalise un message.

---

## 📦 Tableaux

```javascript
let fruits = ["pomme", "banane", "kiwi"];
console.log(fruits[1]); // Affiche "banane"

fruits.push("orange"); // Ajoute à la fin
fruits.pop(); // Supprime le dernier élément
```

---

## 🧾 Objets

```javascript
let personne = {
  nom: "Jean",
  age: 30,
  saluer: function () {
    return "Bonjour, je suis " + this.nom;
  }
};

console.log(personne.saluer());
```
👉 Les objets regroupent des données et des fonctions associées.

---

## 🖱️ Interactions avec HTML (DOM)

```javascript
let bouton = document.getElementById("btn");
bouton.addEventListener("click", function () {
  alert("Clic détecté !");
});
```
👉 On détecte un clic sur un bouton HTML et on affiche une alerte.

---

## 🔍 Console de débogage

```javascript
console.log("Test de variable :", maVariable);
```
👉 Très utile pour afficher des messages pendant l'exécution.

---
