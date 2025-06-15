
# 🐘 Mémo PHP – Bases et exemples fondamentaux

PHP est un langage de script côté serveur, principalement utilisé pour créer des sites web dynamiques. Voici les bases indispensables du langage PHP.

---

## 🧱 Structure de base d'un script PHP

```php
<?php
  echo "Bonjour monde !";
?>
```

---

## ✍️ Déclaration de variables

```php
$nom = "Alice";
$age = 25;
$estActif = true;
```

- Les variables commencent par `$`
- Pas de typage strict (mais PHP 7+ permet le typage optionnel)

---

## 🔄 Conditions

### `if` / `else`

```php
if ($age >= 18) {
  echo "Majeur";
} else {
  echo "Mineur";
}
```

### `switch`

```php
$role = "admin";

switch ($role) {
  case "admin":
    echo "Accès administrateur";
    break;
  case "user":
    echo "Accès utilisateur";
    break;
  default:
    echo "Rôle inconnu";
}
```

---

## 🔁 Boucles

```php
// Boucle for
for ($i = 0; $i < 5; $i++) {
  echo $i . "<br>";
}

// Boucle while
$j = 0;
while ($j < 3) {
  echo $j;
  $j++;
}
```

---

## 📦 Tableaux

```php
$fruits = ["pomme", "banane", "kiwi"];
echo $fruits[1]; // banane

// Parcours avec foreach
foreach ($fruits as $fruit) {
  echo $fruit . "<br>";
}
```

---

## 🧾 Fonctions

```php
function saluer($nom) {
  return "Bonjour " . $nom;
}

echo saluer("Lucie");
```

---

## 📩 Superglobales `$_GET` et `$_POST`

```php
// Exemple formulaire en POST
$nom = $_POST["nom"];
echo "Bonjour " . htmlspecialchars($nom);
```

```php
// Exemple URL en GET : page.php?produit=ordinateur
$produit = $_GET["produit"];
echo "Produit sélectionné : " . htmlspecialchars($produit);
```

---

## 🧑‍💻 Utilisation des sessions

```php
session_start(); // Démarrer la session

$_SESSION["utilisateur"] = "Alice";

echo $_SESSION["utilisateur"];
```

---

## 💾 Connexion à une base de données avec PDO

```php
try {
  $pdo = new PDO("mysql:host=localhost;dbname=ma_base", "root", "");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connexion réussie";
} catch (PDOException $e) {
  echo "Erreur : " . $e->getMessage();
}
```

### Requête préparée (INSERT)

```php
$stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, email) VALUES (?, ?)");
$stmt->execute(["Jean", "jean@example.com"]);
```

### Requête SELECT

```php
$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE id = ?");
$stmt->execute([1]);
$user = $stmt->fetch();
echo $user["nom"];
```

---

## 📌 Bonnes pratiques

- Toujours utiliser `htmlspecialchars()` pour afficher les données utilisateurs
- Préférer PDO à `mysqli` pour sa flexibilité et sécurité
- Séparer la logique PHP du HTML avec des fichiers dédiés
- Utiliser les sessions pour les données de connexion
- Fermer les balises PHP uniquement si du HTML suit

---

📘 Pour aller plus loin : [PHP – Documentation officielle](https://www.php.net/manual/fr/)
