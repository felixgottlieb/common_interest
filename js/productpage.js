const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://naturalwinedata-1fc5.restdb.io/rest/naturalwine/" + id;

const options = {
  headers: {
    "x-apikey": "61387a0c43cedb6d1f97ee32",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    showWine(data);
  })
  .catch((e) => {
    console.error("An error occured", e.message);
  });

function showWine(naturalwine) {
  document.querySelector("h2").textContent = naturalwine.Title;

  document.querySelector("img").src = naturalwine.img;
  document.querySelector("iframe").src = naturalwine.shop_map_link;

  document.querySelector(".Year").textContent = naturalwine.Year;
  document.querySelector(".Country").textContent = naturalwine.Country;
  document.querySelector(".Produced").textContent = naturalwine.Producer;
  document.querySelector(".Size").textContent = naturalwine.Bottle_size;
  document.querySelector(".Price").textContent = naturalwine.Price;
  document.querySelector(".Proof").textContent = naturalwine.Alcohol_percentage;
  document.querySelector(".shop").textContent = naturalwine.Shop;
  document.querySelector(".Characteristics").textContent =
    naturalwine.Description;
  document.querySelector(".Grape").textContent = naturalwine.Grape;
}
