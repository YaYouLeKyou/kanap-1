//cour DOM: https://www.youtube.com/watch?v=_TLmWaaJPV4&list=PLeHV46kDFIhK6NlpLJqLxjVanTWMast_8&index=7
//cour Fetch: https://www.youtube.com/watch?v=b0dPBK37-M8&list=PLeHV46kDFIhK6NlpLJqLxjVanTWMast_8&index=15
//API-meteo: https://www.youtube.com/watch?v=mYGwt0Vyovw&list=PLeHV46kDFIhK6NlpLJqLxjVanTWMast_8&index=17
//FS JS de A a Z: https://www.youtube.com/watch?v=9OJLxDxyNg4
//Projet similaire: https://www.youtube.com/watch?v=5_itnizDhxc&list=PLCdVnVTnpzNSd2Wvsf-8TnVXxBQ9iyIb9&index=3
//JS cheat sheet: https://htmlcheatsheet.com/js/
//Kanar: https://www.youtube.com/watch?v=ezLUX3dWBxo&list=PLe46jh8yO3BBIYh66Dsi60I9FmYJK59_8&index=1


// Récupération des données de l'API via la méthode fetch

fetch("http://localhost:3000/api/products/")
  .then(function (response) { //Version courte : .then((response) => response.json())
    if (response.ok) {
      return response.json();
    }
  })
  // Création d'une liste des produits à partir des données de l'API

  .then(function (products) {
    console.log(products)

    //Intégration des différents produits dans la page d'accueil
    //On boucle les produits

    for (let product of products) {
      let i = 0;
      i < product.length;
      i++;

      //On selectionne les produits par leurs id
      //On intègre le template html dans les backticks
      //On identifie de façon dynamique l' objet et la clé de la valeur souhaité grace a ${}

      document.getElementById("items").innerHTML += `<a href="./product.html?id=${product._id}">
                                                      <article>
                                                        <img src="${product.imageUrl}" alt="${product.altTxt}">
                                                        <h3 class="productName">${product.name}</h3>
                                                        <p class="productDescription">${product.description}</p>
                                                      </article>
                                                    </a>`
    }
  })
  // En cas d'échec de récupération des données de l'API
  .catch(function (error) {
    alert(error)
  });