//cour: https://www.youtube.com/watch?v=KJU5WM4DX1k&list=PLF88SKt6r7NbipYFd8-xPRAgelSNMTQgm&index=85

// Création de la variable dans laquelle on met les key et les values
// Récupération du localStorage, utilisation de la méthode parse pour transformer le json en objet javascript

let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart)

//cour: https://www.youtube.com/watch?v=VDV6PL0AXd4&list=PLF88SKt6r7NbipYFd8-xPRAgelSNMTQgm&index=87


const itemsCart = document.getElementById("cart__items");
// Si le localstorage est vide
if (cart === null || cart === 0) {
  itemsCart.textContent = "Votre panier est vide";
} else {
  console.log(cart.length + " produit(s) dans le panier");
  let cartStructure = [];

  // Si le localstorage contient des produits
  for (i = 0; i < cart.length; i++) {
    console.log(cart[i].name)

    cartStructure += `<article class="cart__item" data-id="${cart[i].id}" data-color="${cart[i].color}">
    <div class="cart__item__img">
        <img src="${cart[i].img}" alt="${cart[i].altTxt}">
    </div>
    <div class="cart__item__content">
        <div class="cart__item__content__description">
            <h2>${cart[i].name}</h2>
            <p>${cart[i].color}</p>
            <p>Prix unitaire: ${cart[i].price}€</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
              <p id="quantité">
                Qté : <input data-id= ${cart[i].id} data-color= ${cart[i].color} type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${cart[i].quantity}>
              </p>
         
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
    itemsCart.innerHTML = cartStructure
  }
}