# Revue de code : Qualité du code

Cette partie de la revue se concentre sur la qualité du code, et non sur ses fonctionnalités.

## Organisation des fichiers

Il y a deux erreurs notables dans l'organisation des fichiers:

1. Présence de fichiers non-nécessaires:

Des artéfacts du projet de base se trouvent encore parmis les fichiers du projet, comme `vue.svg`. Il est important de nettoyer les fichiers non-nécessaires de ses projets pour éviter le "bruit" qui alourdit la taille du projet et rend l'exploration de fichiers plus difficile.

2. Le fichier `main.ts`...

Devrait se trouver dans le dossier `scripts`. Un oubli plutôt embarrassant.

## Les scripts

### `main.ts` et `style.css`

D'abord, `main.ts` importe `style.css`, mais ce dernier n'ajoute qu'une seule classe qui ne modifie qu'une seule propriété... Qui est utilisée une seule fois dans tous les composants. Soit:

1. Retirer `style.css` et ne pas utiliser de classes spécialisées;
2. **OU** utiliser plus de classes spécialisées pour rendre l'existence de ce fichier valide.

### `product.ts`

Semble correct.

## Les composants

### ProductManager

Deux fonctions ont des noms similaires qui rendent la compréhension de leur rôle difficile (`modifyProduct()`+`modifyProductCall()`) et, puisqu'une constante possède le nom `detailProduct`, la méthode `detailProductCall()` brise la norme des noms de fonctions pour ne pas avoir de conflits de nommage. Avoir des règles de nomenclatures plus pointues aurait pû aider (`modifyProduct()`+`setProductToModify()`, `detailedProduct`+`setProductToDetail()`).

Aussi, alors que la `div` globale utilise la classe spécialisée `.main`, l'image logo utilise des modifications de styles. Uniformiser ces choses serait préférable (voir [mes notes sur le script `main.ts`](#main-ts-et-style-css)).

### SearchProducts

Semble correct.

### ProductList

Je ne sais pas s'il y a un moyen de "sauter" un composant pour pouvoir directement transférer un `emit` reçu à son composant parent, mais si cela existe, ce serait utile pour ce composant.

### ProductItem

Le message de rupture de stock devrait être un composant HTML différent de `button`. Rien d'autres de notable sur cette section pour la qualité du code.

### ProductForm

Une fonction `resetProduct()` aurait dû être créée pour réduire la répétion des lignes codes servant au "vidage" des champs d'entrées. La validation des champs d'entrées est très minimale et pourrait bénéficier d'une amélioration.

### ProductDetails

L'utilisation du `v-if` aurait pû être fait sur une `div` contenant tous les champs à la place d'être répétée sur chacun d'entre eux.

### ProductExport

Puisque le code d'exportation a été fait à l'aide d'une source externe, écrire des commentaires pour aider la compréhension des étapes faites aurait été préférable.
