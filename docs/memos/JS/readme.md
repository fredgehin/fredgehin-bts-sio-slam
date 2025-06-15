
# 📘 Mémo JavaScript – Bases et exemples fondamentaux

JavaScript est un langage de programmation qui permet de rendre les pages web interactives. Ce mémo présente les bases indispensables avec des exemples simples.

---

## 🧱 Insertion de JavaScript

Dans une page HTML :

```html
<script>
  alert("Bienvenue !");
</script>
```

Ou dans un fichier externe :

```html
<script src="script.js"></script>
```

---

## ✍️ Déclaration de variables

```javascript
let nom = "Alice";
const PI = 3.14;
var age = 25;
```

- `let` : variable modifiable (portée bloc)
- `const` : constante (non modifiable)
- `var` : ancienne syntaxe (portée fonction)

---

## 🔢 Types de données

```javascript
let texte = "Bonjour";
let nombre = 42;
let estActif = true;
let rien = null;
let inconnu;
```

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

---

## 🎯 Fonctions

```javascript
function direBonjour(prenom) {
  return "Bonjour " + prenom;
}

console.log(direBonjour("Lucie"));
```

Fonction fléchée :

```javascript
const multiplier = (a, b) => a * b;
```

---

## 📦 Tableaux

```javascript
let fruits = ["pomme", "banane", "kiwi"];
console.log(fruits[1]); // banane

fruits.push("orange"); // ajouter
fruits.pop(); // retirer le dernier
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

---

## 🖱️ Interactions avec le HTML (DOM)

### Sélectionner un élément :

```javascript
let titre = document.getElementById("titre");
```

### Modifier du contenu :

```javascript
titre.textContent = "Nouveau titre";
```

### Gérer un événement :

```javascript
let bouton = document.getElementById("btn");
bouton.addEventListener("click", function () {
  alert("Clic détecté !");
});
```

---

## 🔍 Console de débogage

Utilise `console.log()` pour afficher des messages dans la console du navigateur.

```javascript
console.log("Test de variable :", maVariable);
```

---

## 📌 Bonnes pratiques

- Toujours déclarer ses variables (`let`, `const`)
- Donner des noms clairs aux fonctions et variables
- Tester son code dans la console navigateur
- Isoler les fonctions pour faciliter le débogage

---

💡 Pour aller plus loin, explore la documentation [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript).
