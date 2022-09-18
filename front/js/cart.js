//cour: https://www.youtube.com/watch?v=KJU5WM4DX1k&list=PLF88SKt6r7NbipYFd8-xPRAgelSNMTQgm&index=85

// Création de la variable dans laquelle on met les key et les values
// Récupération du localStorage, utilisation de la méthode parse pour transformer le json en objet javascript

let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart)

//cour: https://www.youtube.com/watch?v=VDV6PL0AXd4&list=PLF88SKt6r7NbipYFd8-xPRAgelSNMTQgm&index=87

// Si le localstorage est vide
if (cart === null || cart === 0) {
    positionEmptyCart.textContent = "Votre panier est vide";
} else {
    console.log("Des produits sont présents dans le panier");
}