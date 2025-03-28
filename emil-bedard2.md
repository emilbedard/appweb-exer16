---
span
---
# Revue de code : Fonctionnalité

Cette partie de la revue se concentre sur la fonctionnalité du code, et non sur la qualité de son code.

## Sections de l'application

### Ensemble de la page

Le titre semble être *légèrement* à droite de l'écran... Juste assez pour être agaçant. L'image du logo et la couleur de décor semblent correctes.

### Recherche

Fonctionne bien, mais le message ***"Il n'y a aucun produit dans cette liste."*** devrait devenir ***"Aucun produit correspond à cette recherche"*** si il y a du texte dans la barre de recherche.

### Liste de produits

Les noms des produits ainsi que tous les autres boutons devraient être alignées. Ce n'est pas complètment clair que l'on doit cliquer le nom d'un produit pour afficher ses détails (peut-être afficher un bouton "détails" ou une icone de loupe?).

La notification de rupture de stock n'est pas claire: au minimum, elle devrait afficher le texte ***"Rupture!"***. De plus, peut-être afficher le stock des produits en manque ou en rupture près du nom?

### Formulaire

Le formulaire, bien qu'il soit passablement sécuritaire, devrait afficher un message d'erreur lorsque les données entrées sont invalides (tel que ***"La description est obligatoire."*** ou ***"Le prix doit être supérieur à 0."***).

### Détails du produit

Cette section manque un peu de "pop"... Des bordures, couleurs ou autres mesures ésthetiques seraient utiles à rendre cette section plus attrayante.

### Exportation

Ce bouton, bien que plus visible, devrait se trouver à un emplacement "fixe". De la manière qu'il est configuré, il va se déplacer lorsqu'un produit va être affiché dans la section "détails", ce qui est un peu étrange.
