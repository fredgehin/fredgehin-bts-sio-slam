
# 🐘 Mémo PHP – Bases et exemples fondamentaux

PHP est un **langage côté serveur** qui permet de créer des pages web dynamiques. Voici un mémo avec les principales instructions et des **exemples détaillés**.

---

## 🧱 Structure de base

```php
<?php
  echo "Bonjour monde !";
?>
```
👉 Le code PHP est interprété côté serveur et le résultat est renvoyé au navigateur.

---

## ✍️ Déclaration de variables

```php
$nom = "Alice";
$age = 25;
$estActif = true;
```
👉 `$` est obligatoire pour déclarer une variable.

---

## 🔄 Conditions `if`, `else` et `switch`

```php
if ($age >= 18) {
  echo "Majeur";
} else {
  echo "Mineur";
}
```

```php
switch ($role) {
  case "admin":
    echo "Accès admin";
    break;
  case "user":
    echo "Accès utilisateur";
    break;
}
```
👉 `switch` est utile pour tester plusieurs valeurs possibles.

---

## 🔁 Boucles

```php
for ($i = 0; $i < 5; $i++) {
  echo $i;
}
```

```php
$j = 0;
while ($j < 3) {
  echo $j;
  $j++;
}
```
👉 `for` est utilisé quand on connaît le nombre de répétitions. `while` continue tant qu'une condition est vraie.

---

## 📦 Tableaux et `foreach`

```php
$fruits = ["pomme", "banane", "kiwi"];
foreach ($fruits as $fruit) {
  echo $fruit;
}
```
👉 `foreach` parcourt chaque élément d’un tableau.

---

## 🧾 Fonctions

```php
function saluer($nom) {
  return "Bonjour " . $nom;
}
echo saluer("Lucie");
```
👉 Une fonction peut retourner une valeur pour l'affichage ou le traitement.

---

## 📩 Utilisation de `$_POST` et `$_GET`

```php
$nom = $_POST["nom"];
$produit = $_GET["produit"];
```
👉 Permet de récupérer les données envoyées par un formulaire ou passées dans l’URL.

---

## 🧑‍💻 Utilisation des sessions

```php
session_start();
$_SESSION["utilisateur"] = "Alice";
echo $_SESSION["utilisateur"];
```
👉 Les sessions stockent des infos utilisateur de façon persistante entre les pages.

---

## 💾 Connexion à MySQL avec PDO

```php
try {
  $pdo = new PDO("mysql:host=localhost;dbname=ma_base", "root", "");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "Erreur : " . $e->getMessage();
}
```
👉 `PDO` est une interface sécurisée pour se connecter à différentes bases.

```php
$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE id = ?");
$stmt->execute([1]);
$user = $stmt->fetch();
echo $user["nom"];
```
👉 Préférer les requêtes préparées pour éviter les injections SQL.

---
