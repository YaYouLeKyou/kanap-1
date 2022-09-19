//cour: https://www.youtube.com/watch?v=KJU5WM4DX1k&list=PLF88SKt6r7NbipYFd8-xPRAgelSNMTQgm&index=85

// Création de la variable dans laquelle on met les key et les values
// Récupération du localStorage, utilisation de la méthode parse pour transformer le json en objet javascript

let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart)

//cour: https://www.youtube.com/watch?v=VDV6PL0AXd4&list=PLF88SKt6r7NbipYFd8-xPRAgelSNMTQgm&index=87

// Variable pour stocker les Id de chaque articles présent dans le panier (utilisés pour créer la commande)
let products = [];

// Récupération des produits de l'API
async function getProductById(productId) {

  return fetch("http://localhost:3000/api/products/" + productId)
    .then(function (res) {
      return res.json();
    })
    .catch((err) => {
      // Erreur serveur
      console.log("erreur");
    })
    .then(function (response) {
      return response;
    });
}
displayCart();

// Affichage du contenu du panier
async function displayCart() {
  const cartItems = document.getElementById("cart__items");
  let cartArray = [];

  // Si le localstorage est vide
  if (cart === null || cart === 0) {
    cartItems.textContent = "Votre panier est vide";
  } else {
    console.log(cart.length + " produit(s) sont dans le panier");
  }

  // Si le localstorage contient des produits
  for (i = 0; i < cart.length; i++) {
    const product = await getProductById(cart[i].id);
    console.log(getProductById(cart[i].id))
    const totalPriceItem = (product.price *= cart[i].quantity);
    cartArray += `<article class="cart__item" data-id="${cart[i].id}" data-color="${cart[i].color}">
                  <div class="cart__item__img">
                      <img src="${product.imageUrl}" alt="${product.altTxt}">
                  </div>
                  <div class="cart__item__content">
                      <div class="cart__item__content__description">
                          <h2>${product.name}</h2>
                          <p>${cart[i].color}</p>
                          <p>Prix unitaire: ${product.price}€</p>
                      </div>
                      <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                            <p id="quantité">
                              Qté : <input data-id= ${cart[i].id} data-color= ${cart[i].color} type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${cart[i].quantity}>
                            </p>
                            <p id="sousTotal">Prix total pour cet article: ${totalPriceItem}€</p> 
                        </div>
                        <div class="cart__item__content__settings__delete">
                          <p data-id= ${cart[i].id} data-color= ${cart[i].color} class="deleteItem">Supprimer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </article>`;
  }
  if (i == cart.length) {
    //Extraire les données à l'aide de DOMParser
    //Déclarez une instance de DOMParser.
    const parser = new DOMParser();
    //Analysez le document à l'aide de la fonction .parseFromString(). Il prend deux arguments, la chaîne à analyser et le type de document. 
    const displayBasket = parser.parseFromString(cartArray, "text/html");
    //Déployer en ajoutant des enfants
    cartItems.appendChild(displayBasket.body);

  }
}