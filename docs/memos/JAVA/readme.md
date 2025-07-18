
# ☕ Mémo Java – Bases et syntaxe essentielle

Java est un langage de programmation orienté objet, largement utilisé pour le développement d'applications robustes. Voici un mémo couvrant les bases indispensables avec des exemples.

---

## 🧱 Structure d'un programme Java

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Bonjour, Java !");
    }
}
```
👉 Le point d’entrée d’un programme Java est la méthode `main`.

---

## ✍️ Déclaration de variables et types

```java
int age = 20;
double temperature = 36.5;
boolean actif = true;
char lettre = 'A';
String nom = "Alice";
```
👉 Java est un langage fortement typé.

---

## 🔁 Structures conditionnelles

### if / else

```java
if (age >= 18) {
    System.out.println("Majeur");
} else {
    System.out.println("Mineur");
}
```

### switch

```java
int jour = 3;

switch (jour) {
    case 1:
        System.out.println("Lundi");
        break;
    case 2:
        System.out.println("Mardi");
        break;
    default:
        System.out.println("Autre jour");
}
```

---

## 🔄 Boucles

### for

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

### while

```java
int i = 0;
while (i < 3) {
    System.out.println(i);
    i++;
}
```

### do while

```java
int j = 0;
do {
    System.out.println(j);
    j++;
} while (j < 2);
```

---

## 🧮 Tableaux

```java
int[] notes = {12, 15, 18};
System.out.println(notes[1]); // Affiche 15
```

---

## 🎯 Méthodes

```java
public static int addition(int a, int b) {
    return a + b;
}
```

👉 Appel : `int resultat = addition(2, 3);`

---

---

## 📦 Import de classes et packages

```java
import java.util.Scanner;
```

👉 L'instruction `import` permet d'inclure des **classes** provenant d'autres **packages Java**.  
Cela évite d’avoir à écrire leur chemin complet dans le code. Par exemple :

```java
java.util.Scanner sc = new java.util.Scanner(System.in); // sans import
```

devient simplement :

```java
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
```

---

## 🖨️ Entrée utilisateur avec Scanner

La classe `Scanner` permet de lire les entrées clavier dans un programme console.

```java
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Entrez votre nom : ");
String nom = sc.nextLine();
System.out.println("Bonjour " + nom);
```

### Autres utilisations de `Scanner`

```java
System.out.print("Entrez un âge : ");
int age = sc.nextInt();

System.out.print("Entrez un prix : ");
double prix = sc.nextDouble();
```

### Fermer le Scanner à la fin

```java
sc.close();
```

👉 Fermer le scanner libère les ressources. À faire une fois toutes les lectures terminées.

---

## 📌 Bonnes pratiques

- Le nom des classes commence par une **majuscule**.
- Le fichier `.java` porte le **même nom que la classe publique**.
- Toujours fermer les ressources (`Scanner`, `Files`, etc.) avec `close()`.

---

📘 Pour aller plus loin : [Documentation Java – Oracle](https://docs.oracle.com/javase/8/docs/)
