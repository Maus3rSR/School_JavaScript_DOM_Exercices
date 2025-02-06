/**
 * Quel est le titre de la boutique
 */
const titre_boutique_HTML = document.querySelector("h1");
console.log(`Nom de la boutique est : ${titre_boutique_HTML.textContent}`);

/**
 * Des informations manquent !
 */
const description_boutique_HTML = document.querySelector("#description_boutique");
const paragraph_aide_achat_HTML = document.createElement("p");

paragraph_aide_achat_HTML.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter";

description_boutique_HTML.appendChild(paragraph_aide_achat_HTML);

/**
 * Roger, enfoiré !
 */
const blague_de_roger_HTML = document.querySelector("#blague_de_roger_le_sorcier");
blague_de_roger_HTML.remove();

/**
 * Archibald n'est pas là, appelons le !
 */
const bouton_sonnette_HTML = document.querySelector("#call_archibald");

bouton_sonnette_HTML.addEventListener("click", function () {
  alert("J'arrive, j'arrive Aventurier !");
});

/**
 * Faisons un peu de magie
 */
// J'utilise Array.from pour transformer le type itérable NodeList => Array
// Pour accéder aux méthodes de l'objet Array qui sont pratiques
const boites = Array.from(document.querySelectorAll("#boites_magique .boite"));
// Marche également : toutes les div enfant direct de #boites_magique
// document.querySelectorAll("#boites_magique > div")
const peindreBoite = (boite, color) => (boite.style.backgroundColor = color);

const bouton_rouge = document.querySelector("#btn_change_red");
bouton_rouge.addEventListener("click", () => peindreBoite(boites.at(0), "red"));

const bouton_bleu = document.querySelector("#btn_change_blue");
bouton_bleu.addEventListener("click", () => {
  boites.filter((_, index) => index < 2).forEach((boite) => peindreBoite(boite, "blue"));
});

const bouton_vert = document.querySelector("#btn_change_green");
bouton_vert.addEventListener("click", () => {
  boites.forEach((boite) => peindreBoite(boite, "green"));
});

/**
 * Aventurier, voici ma boutique !
 */
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

const template_carte_potion_HTML = document.querySelector("#template_potion");
const contenant_liste_potions_HTML = document.querySelector("#liste_potions");

const ajouteCarteDansHtml = (cartePotionHtml) => contenant_liste_potions_HTML.appendChild(cartePotionHtml);
const fabriqueCartePotionHtml = (potion) => {
  const carte_potion_HTML = template_carte_potion_HTML.content.cloneNode(true);
  const nom_potion_HTML = carte_potion_HTML.querySelector(".nom_potion");
  const prix_potion_HTML = carte_potion_HTML.querySelector(".prix_potion");
  const description_potion_HTML = carte_potion_HTML.querySelector(".description_potion");

  nom_potion_HTML.textContent = potion.nom;
  prix_potion_HTML.textContent = potion.prix;
  description_potion_HTML.textContent = potion.description;

  return carte_potion_HTML;
};

function construitListeDesPotions(potions) {
  contenant_liste_potions_HTML.textContent = "";
  potions.map(fabriqueCartePotionHtml).forEach(ajouteCarteDansHtml);
}

construitListeDesPotions(potions);

/**
 * Plus de potions, nous avons besoin de plus de potions !
 */
const formNouvellePotion = document.querySelector("form");

formNouvellePotion.addEventListener("submit", (event) => {
  // Désactivation du comportement par défaut du navigateur
  event.preventDefault();

  const data = new FormData(formNouvellePotion);

  potions.push({
    nom: data.get("nom"),
    prix: data.get("prix"),
    description: data.get("description"),
  });

  construitListeDesPotions(potions);

  formNouvellePotion.reset();
});
