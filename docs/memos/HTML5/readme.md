
# 📘 Mémo HTML5 – Bases et balises essentielles

Ce mémo présente les **balises HTML5 les plus courantes** utilisées pour structurer une page web. Chaque section contient une description et un exemple de code.

---

## 🧱 Structure de base d'une page HTML

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>Titre de la page</title>
  </head>
  <body>
    <h1>Bienvenue sur mon site</h1>
    <p>Ceci est un paragraphe.</p>
  </body>
</html>
```

---

## 🗂️ Titres et paragraphes

- `<h1>` à `<h6>` : Titres de niveau 1 à 6
- `<p>` : Paragraphe de texte

```html
<h1>Titre principal</h1>
<h2>Titre secondaire</h2>
<p>Ceci est un paragraphe de texte.</p>
```

---

## 🔗 Liens et images

- `<a>` : Lien hypertexte
- `<img>` : Image

```html
<a href="https://www.example.com">Visiter un site</a>
<img src="logo.png" alt="Logo du site" width="150">
```

---

## 📃 Listes

- `<ul>` : Liste non ordonnée
- `<ol>` : Liste ordonnée
- `<li>` : Élément de liste

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>

<ol>
  <li>Étape 1</li>
  <li>Étape 2</li>
</ol>
```

---

## 📐 Mise en page et sections

- `<div>` : Conteneur générique
- `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>` : Balises sémantiques

```html
<header>
  <h1>Mon site</h1>
</header>

<nav>
  <a href="#accueil">Accueil</a>
  <a href="#contact">Contact</a>
</nav>

<section>
  <h2>À propos</h2>
  <p>Description...</p>
</section>

<footer>
  &copy; 2025 - Tous droits réservés
</footer>
```

---

## 📝 Formulaires

- `<form>` : Formulaire
- `<input>`, `<label>`, `<textarea>`, `<button>`, `<select>`

```html
<form action="/traitement.php" method="post">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom"><br><br>

  <label for="message">Message :</label><br>
  <textarea id="message" name="message" rows="4" cols="30"></textarea><br><br>

  <button type="submit">Envoyer</button>
</form>
```

---

## 🔣 Éléments de texte enrichi

- `<strong>` : Texte important
- `<em>` : Texte en emphase
- `<br>` : Saut de ligne

```html
<p><strong>Important :</strong> Lisez bien les consignes.</p>
<p>Texte avec <em>mise en valeur</em>.</p>
<p>Première ligne<br>Deuxième ligne</p>
```

---

## ✅ Attributs globaux utiles

- `id` : identifiant unique
- `class` : nom de classe CSS
- `style` : style en ligne
- `title` : info-bulle

```html
<p id="intro" class="paragraphe" style="color:blue;" title="Texte d’introduction">Bonjour !</p>
```

---

## 📌 Remarques

- HTML5 est **non sensible à la casse** (`<p>` = `<P>`)
- Les balises doivent toujours être **fermées** correctement
- Le HTML peut être enrichi avec **CSS** et **JavaScript** pour l’apparence et l’interactivité

---

💡 Ce mémo est une base pour débuter : chaque balise peut être explorée plus en détail via la documentation [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/HTML).
