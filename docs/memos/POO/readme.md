
# 🧠 Mémo : Programmation Orientée Objet (POO) en Java et C#

Ce mémo présente les bases de la programmation orientée objet à travers des exemples en **Java** et en **C#**.

---

## 🧱 Définition d'une classe

### Java

```java
public class Personne {
    String nom;
    int age;
}
```

### C#

```csharp
public class Personne {
    public string Nom;
    public int Age;
}
```

---

## 🚀 Constructeurs

### Java

```java
public class Personne {
    String nom;
    int age;

    public Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
}
```

### C#

```csharp
public class Personne {
    public string Nom;
    public int Age;

    public Personne(string nom, int age) {
        Nom = nom;
        Age = age;
    }
}
```

---

## 🧪 Instanciation d’un objet

### Java

```java
Personne p = new Personne("Alice", 25);
```

### C#

```csharp
Personne p = new Personne("Alice", 25);
```

---

## 🔐 Encapsulation avec Getters / Setters

### Java

```java
public class Compte {
    private double solde;

    public double getSolde() {
        return solde;
    }

    public void setSolde(double solde) {
        if (solde >= 0) {
            this.solde = solde;
        }
    }
}
```

### C#

```csharp
public class Compte {
    private double solde;

    public double Solde {
        get { return solde; }
        set {
            if (value >= 0) {
                solde = value;
            }
        }
    }
}
```

---

## 🧠 Méthodes

### Java

```java
public class Calculatrice {
    public int addition(int a, int b) {
        return a + b;
    }
}
```

### C#

```csharp
public class Calculatrice {
    public int Addition(int a, int b) {
        return a + b;
    }
}
```

---

## 🧬 Héritage

### Java

```java
public class Animal {
    public void parler() {
        System.out.println("Je fais du bruit");
    }
}

public class Chien extends Animal {
    public void parler() {
        System.out.println("Wouf !");
    }
}
```

### C#

```csharp
public class Animal {
    public virtual void Parler() {
        Console.WriteLine("Je fais du bruit");
    }
}

public class Chien : Animal {
    public override void Parler() {
        Console.WriteLine("Wouf !");
    }
}
```

---

## 🧩 Polymorphisme

### Java

```java
Animal a = new Chien();
a.parler(); // Affiche "Wouf !"
```

### C#

```csharp
Animal a = new Chien();
a.Parler(); // Affiche "Wouf !"
```

---

## 🧰 Abstraction (classe abstraite)

### Java

```java
public abstract class Forme {
    public abstract double aire();
}
```

### C#

```csharp
public abstract class Forme {
    public abstract double Aire();
}
```

---

## 🔌 Interfaces

### Java

```java
public interface Affichable {
    void afficher();
}
```

### C#

```csharp
public interface IAffichable {
    void Afficher();
}
```

---

## 📌 Bonnes pratiques

- Toujours respecter les conventions de nommage : PascalCase en C#, camelCase en Java pour les attributs.
- Encapsuler les données avec des propriétés (getters/setters).
- Préférer les interfaces pour la flexibilité.
- Utiliser l’héritage uniquement quand cela a du sens.

---

📘 Pour aller plus loin :
- [POO en Java – Oracle Docs](https://docs.oracle.com/javase/tutorial/java/concepts/)
- [POO en C# – Microsoft Learn](https://learn.microsoft.com/fr-fr/dotnet/csharp/fundamentals/object-oriented/)
