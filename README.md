# Exercices sur les fonctions en JavaScript

- Tu peux mettre toutes tes réponses dans le fichier `exercices.js`.
- À chaque exercice _(chaque sous-titre après le titre Exercices dans cet énoncé)_, tu dois faire un commit avec le titre de l'exercice.

## Rappels

- N'hésite pas à consulter vos notes de cours et la documentation en ligne.
- Utilise `console.log` ou le `debugger` de votre outil de développement.

## Thème 🔮🧙‍♂️🧪🪙🍄

- Tu es le sorcier Archibald 🧙‍♂️ et tu gères une petite boutique dans laquelle tu crées et vends des potions 🧪.

## Exercices

### Quel est le titre de la boutique

**Objectif**: Apprendre à sélectionner un élément unique dans le DOM avec querySelector et à récupérer son contenu textuel.

**Instructions**:

- Utilise la méthode `querySelector` sur `document` pour récupérer le titre de la boutique `<h1>` et affecte la à une constante.
- Récupère le texte avec la propriété `textContent` et affiche sa valeur dans la `console`.

**Résultat attendu**: Le texte "Boutique d'Archibald le Sorcier de pacotille 🧙‍♂️" s'affiche dans la console.

### Des informations manquent !

**Objectif**: Apprendre à créer et ajouter des éléments dans le DOM de manière dynamique.

**Instructions**:

- Tu as oublié d'ajouter un paragraphe dans la description de ta boutique.
  - Utilise la méthode `querySelector` sur `document` pour récupérer le noeud HTML parent du paragraphe existant dans le HTML et affecte le à une constante.
  - Crée un nouveau paragraphe avec la méthode `createElement` de `document`.
  - Ajoute le texte suivant `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.` en l'affectant à la propriété `textContent` du paragraphe.
  - Ajoute le paragraphe avec la méthode `appendChild` sur ta constante comportant le noeud HTML du parent.

**Résultat attendu**: Un nouveau paragraphe apparaît sous le texte de bienvenue avec les instructions d'achat.

### Roger, enfoiré !

**Objectif**: Apprendre à supprimer des éléments du DOM.

**Instructions**:
Roger, un collègue sorcier jaloux, a entaché le titre de ta boutique (avec le mot `pacotille`).

- Utilise `querySelector` sur `document` pour récupérer le noeud HTML `<span id="blague_de_roger_le_sorcier">` et supprime-le du DOM avec la méthode `remove`.

**Résultat attendu**: Le texte "de pacotille" disparaît du titre de la boutique.

### Archibald n'est pas là, appelons le !

**Objectif**: Apprendre à gérer les événements de clic et à afficher des alertes.

**Instructions**:

- Utilise `querySelector` sur `document` pour récupérer le bouton et attache un évènement `click` avec la méthode `addEventListener`.
- Depuis la fonction de rappel, utilise `alert` pour afficher `🧙‍♂️ J'arrive, j'arrive Aventurier !`.

**Résultat attendu**: Une alerte apparaît avec le message quand on clique sur le bouton "Appeler Archibald".

### Faisons un peu de magie 🪄

**Objectif**: Apprendre à sélectionner plusieurs éléments et à modifier leurs styles dynamiquement.

**Instructions**:

Le temps que tu arrives, l'Aventurier peut jouer avec des boutons permettant de changer les boîtes de couleur pour patienter.

- Utilise `querySelectorAll` pour récupérer tous les noeuds HTML des boîtes à l'intérieur de la `<div id="boites_magique">`.
- Attache un évènement à chacun des boutons.
- En fonction de chaque bouton, change la couleur de fond des boîtes en utilisant la propriété `style`.

**Résultat attendu**:

- Le bouton rouge change la première boîte en rouge
- Le bouton bleu change les deux premières boîtes en bleu
- Le bouton vert change toutes les boîtes en vert

### Aventurier, voici ma boutique !

**Objectif**: Apprendre à utiliser les templates HTML pour insérer des éléments plus complexes dans le DOM.

**Note**: Vous avez un exemple dans le code HTML d'une carte de potion au niveau de `<section id="liste_potions" class="row">`. Ce code est à supprimer et sert d'exemple visuel.

Récupérez cette liste de potions :

```js
const potions = [
  {
    nom: "Potion de soin",
    description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
    prix: 10,
  },
  {
    nom: "Potion de sommeil",
    description: "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
    prix: 50,
  },
];
```

- Pour chaque potion :
  - Utilise `querySelector` pour récupérer le contenant du noeud HTML de la liste des potions `<div id="liste_potions">`.
  - Les éléments à créer sont plus conséquents avec `createElement`. Nous allons donc plutôt utiliser les `template`. Vous trouverez celui d'une carte de potion dans l'HTML `<template id="template_potion">`
    - Utilise `querySelector` pour récupérer le template avec son id.
    - Clone le contenu dans une constante avec `.content.cloneNode(true);`.
  - À partir d'ici, remplace certains éléments HTML du template avec `querySelector` et `textContent`.
    - `<h5 class="nom_potion">` contient le nom de la potion.
    - `<span class="prix_potion"></span>` contient le prix de la potion.
    - `<p class="card-text description_potion">` contient la description de la potion.

**Résultat attendu**: Les deux cartes des potions sont affichées sous le titre "Les potions de la boutique".

### Plus de potions, nous avons besoin de plus de potions !

**Objectif**: Apprendre à manipuler les formulaires et à réutiliser du code existant pour ajouter dynamiquement du contenu à la page.

Un formulaire a été ajouté pour te permettre d'ajouter plus de potions à la boutique et se faire plus de sous !

- Utilise `querySelector` pour récupérer le formulaire `<form>` et affecte-le à une constante.
- Gère la soumission du formulaire en y attachant un évènement `submit`.
- Utilise l'objet `FormData` pour extraire les valeurs du formulaire.
  - `FormData` se crée avec le mot-clef `new` et tu peux y passer directement un `FormHtmlElement` (le formulaire que tu as affecté à ta constante). Par exemple : `const formData = new FormData(formHtmlElement)`.
  - Utilise la méthode `get` pour récupérer la valeur d'un champ de formulaire.
- Trouve un moyen pour réutiliser le code de l'exercice précédent avec une ou plusieurs fonctions, qui te permettra de rajouter cette nouvelle potion dans la boutique.

**Résultat attendu**: Quand le formulaire est soumis avec des valeurs valides, une nouvelle potion apparaît dans la boutique avec les informations saisies.
