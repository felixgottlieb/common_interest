// const urlParams = new URLSearchParams(window.location.search);
// const Color = urlParams.get("Color");

const url = "https://naturalwinedata-1fc5.restdb.io/rest/naturalwine?";

const options = {
  headers: {
    "x-apikey": "61387a0c43cedb6d1f97ee32",
  },
};

// Adding the dynamic data for wine categories
// const url = "https://naturalwinedata-1fc5.restdb.io/rest/naturalwine?" + Color;

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return respone.json();
  })
  .then((data) => {
    handleWinelist(data);
  })
  .catch((e) => {
    console.error("An error occured", e.message);
  });

function handleWinelist(data) {
  console.log(data);
  data.forEach(showWines);
}

function showWines(naturalwine) {
  const template = document.querySelector(".wine_template");

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = naturalwine.Title;
  copy.querySelector("img").src = naturalwine.img;
  copy.querySelector(".year").textContent = naturalwine.Year;
  copy.querySelector(".country").textContent = naturalwine.Country;
  copy.querySelector(".grape").textContent = naturalwine.Grape;
  copy.querySelector(".price").textContent = naturalwine.Price;

  const parent = document.querySelector(".wine_container");

  parent.appendChild(copy);
}
