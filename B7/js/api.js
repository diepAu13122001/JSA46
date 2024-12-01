// function update data on UI
function updateUI(name, img, bio) {
  // get element from HTML
  const name_element = document.getElementById("pokemon_name");
  const img_element = document.querySelector("#pokemon_img");
  const bio_element = document.getElementById("pokemon_bio");

  //   update data
  name_element.textContent = name.toUpperCase();
  img_element.src = img;
  bio_element.innerText = bio;
}

// function search
function search_pokemon(pokemon_name) {
  // set root url
  const root_url = "https://pokeapi.co/api/v2/pokemon/";
  // call API
  const promise = fetch(root_url + pokemon_name.toLowerCase(), {
    method: "GET",
  });

  promise
    .then(function (json) {
      // chuyen kieu json -> js
      return json.json();
    })
    .then(function (pokemonData) {
      // lay du lieu theo loai
      const name = pokemonData.name;
      const image = pokemonData.sprites.other["official-artwork"].front_default;
      const bio = `Weight: ${pokemonData.weight}`;
      // de du lieu vao UI
      updateUI(name, image, bio);
    })
    .catch(function (error) {
      alert("Khong tim thay nhan vat nay");
    });
}

// bat su kien cho button search
document
  .getElementById("search_btn")
  .addEventListener("click", function (event) {
    // khong cho website load theo mac dinh
    event.preventDefault();
    // lay du lieu tu input
    const pokemon_name = document.getElementById("search_inp").value.trim();
    // neu khong co du lieu
    if (!pokemon_name) {
      alert("Vui long nhap ten nhan vat");
    } else {
      search_pokemon(pokemon_name);
    }
  });
