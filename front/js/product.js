// Récupération de l'ID du produit
const getProductId = () => {
    return new URL(location.href).searchParams.get("id");
  };
  const productId = getProductId();

//ajout de l' ID a la l'adresse http

  fetch(`http://localhost:3000/api/products/${productId}`)
  .then((response) => {
    return response.json();
  })

  .then((product) => {
    console.log(product)
    selectedProduct(product);
  })
  .catch((error) => {
    alert(error);
  });

  // Fonction qui récupère les données de la promesse .then(product) pour injecter les valeurs dans le fichier Html
let selectedProduct = (product) => {
    // Intégration des données du produit sélectionné dans la page HTML
    document.querySelector("head > title").textContent = product.name;
    document.querySelector(".item__img")
    .innerHTML += `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
    document.querySelector("#title").textContent += product.name;
    document.querySelector("#price").textContent += product.price;
    document.querySelector("#description").textContent += product.description;
  };