
# 📊 Mémo Excel – Utilisation de base et cas d’usage

Microsoft Excel est un tableur permettant de manipuler des données sous forme de cellules organisées en lignes et colonnes. Il est très utilisé pour les calculs, l’analyse de données, la gestion de budgets ou encore la création de graphiques.

---

## 🧱 1. Structure d’un fichier Excel

- **Classeur** : fichier contenant une ou plusieurs feuilles.
- **Feuille** : une grille de cellules (colonnes A, B, C… / lignes 1, 2, 3…).
- **Cellule** : l’unité de base, identifiée par son adresse (ex : `A1`, `B2`).

---

## ✍️ 2. Saisie et formatage

- Tapez un texte ou un nombre dans une cellule.
- Appuyez sur `Entrée` ou `Tab` pour valider.
- Utilisez les options de l’onglet **Accueil** pour :
  - Mettre en gras, italique, souligné
  - Modifier la taille, la couleur du texte
  - Formater en monnaie, pourcentage, date, etc.
  - Appliquer des bordures et couleurs de fond

---

## ➗ 3. Formules de base

Une formule commence toujours par `=`

| Formule        | Description                            |
|----------------|----------------------------------------|
| `=A1+B1`       | Additionne les valeurs de A1 et B1     |
| `=A1*B1`       | Multiplie A1 par B1                    |
| `=A1/B1`       | Divise A1 par B1                       |
| `=MOYENNE(A1:A10)` | Moyenne d’une plage de cellules     |
| `=SOMME(A1:A10)`   | Somme d’une plage                   |
| `=SI(A1>10; "OK"; "Non OK")` | Test conditionnel         |

---

## 🔁 4. Fonctions utiles

- `=AUJOURDHUI()` : affiche la date du jour
- `=NB(A1:A10)` : compte le nombre de cellules contenant des nombres
- `=NBVAL(A1:A10)` : compte les cellules non vides
- `=RECHERCHEV(valeur; tableau; colonne; [faux])` : recherche verticale
- `=CONCATENER(A1; " "; B1)` ou `=A1 & " " & B1` : concatène du texte

---

## 📊 5. Création de graphiques

1. Sélectionner les données
2. Onglet **Insertion** > choisir un type de graphique :
   - Histogramme
   - Courbe
   - Camembert
   - Nuage de points
3. Personnaliser : légende, titre, axes, couleurs

---

## 📎 6. Mise en forme conditionnelle

Permet de colorer automatiquement des cellules selon un critère :
- Onglet **Accueil** > **Mise en forme conditionnelle**
- Exemples :
  - Cellules > 50 en vert
  - Valeurs en double
  - Barres de données, échelles de couleur

---

## 🔒 7. Figer les volets / Protection

- **Figer les volets** : pour garder les en-têtes visibles
  - Onglet **Affichage** > **Figer les volets**
- **Protéger une feuille** : pour empêcher les modifications
  - Onglet **Révision** > **Protéger la feuille**

---

## 📁 8. Enregistrement et formats

- `.xlsx` : format standard
- `.xls` : format ancien
- `.csv` : format texte séparé par virgules
- `.pdf` : export en lecture seule

---

## 💡 Exemples d’utilisation d’Excel

- Suivi de budget personnel
- Planning d’activités ou de tâches
- Suivi de notes d’élèves
- Facturation et devis
- Calculs de TVA ou remises
- Analyse de résultats sportifs
- Répertoire de contacts
- Gestion de stock
- Tableaux croisés dynamiques
- Visualisation de données par graphiques

---

## 📚 Ressources pour aller plus loin

- [Support Microsoft Excel](https://support.microsoft.com/fr-fr/excel)
- [Formules les plus courantes – Microsoft Learn](https://learn.microsoft.com/fr-fr/training/modules/perform-calculations-excel/)
