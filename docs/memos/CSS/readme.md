
# 🎨 Mémo CSS – Bases et propriétés essentielles

Ce mémo présente les **fondamentaux de CSS (Cascading Style Sheets)**, utilisés pour styliser les pages HTML. Chaque section contient des exemples pratiques.

---

## 🧱 Syntaxe de base

```css
sélecteur {
  propriété: valeur;
}
```

Exemple :

```css
p {
  color: blue;
  font-size: 16px;
}
```

---

## 🎯 Sélecteurs courants

- `*` : tous les éléments
- `p` : tous les paragraphes `<p>`
- `.maClasse` : tous les éléments avec `class="maClasse"`
- `#monId` : l’élément avec `id="monId"`
- `div p` : les `<p>` à l’intérieur des `<div>`

```css
* {
  margin: 0;
}

#header {
  background-color: grey;
}

.article p {
  line-height: 1.5;
}
```

---

## 🎨 Propriétés de texte

```css
h1 {
  color: darkred;
  font-family: Arial, sans-serif;
  font-size: 24px;
  text-align: center;
  text-decoration: underline;
}
```

---

## 📦 Boîte et espacement

```css
div {
  width: 300px;
  height: 150px;
  padding: 20px;
  margin: 10px;
  border: 2px solid black;
  box-sizing: border-box;
}
```

- `margin` : espace extérieur
- `padding` : espace intérieur
- `border` : bordure
- `box-sizing` : détermine comment taille et padding sont calculés

---

## 🧭 Positionnement

```css
.container {
  position: relative;
}

.element {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

- `static` (défaut), `relative`, `absolute`, `fixed`, `sticky`

---

## 📐 Flexbox (mise en page moderne)

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

Propriétés utiles :
- `justify-content`: aligne horizontalement
- `align-items`: aligne verticalement
- `flex-direction`: `row` (par défaut), `column`

---

## 🎞️ Arrière-plan et images

```css
body {
  background-color: #f0f0f0;
  background-image: url("fond.jpg");
  background-size: cover;
  background-position: center;
}
```

---

## 🖱️ Effets de survol (hover)

```css
a:hover {
  color: red;
  text-decoration: underline;
}
```

---

## ✨ Transitions simples

```css
.button {
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}
```

---

## 📌 Bonnes pratiques

- Regrouper les styles communs
- Séparer CSS du HTML (fichier `.css`)
- Commenter le code si nécessaire : `/* commentaire */`

---

## 🔗 Exemple de lien avec une feuille CSS externe

Dans le fichier HTML :

```html
<link rel="stylesheet" href="style.css">
```

---

📘 Pour aller plus loin, explorez les [MDN Web Docs – CSS](https://developer.mozilla.org/fr/docs/Web/CSS).
