const urlParams = new URLSearchParams(window.location.search);
const Color = urlParams.get("Color");

const url = `https://naturalwinedata-1fc5.restdb.io/rest/naturalwine?q={"Color": "${Color}"}`;

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

  const copy = template.cloneNode(true).content;

  document.querySelector(".color_headline").textContent = naturalwine.Color;

  copy
    .querySelector("a")
    .setAttribute("href", "productpage.html?id=" + naturalwine._id);

  copy.querySelector("h3").textContent = naturalwine.Title;
  copy.querySelector("img").src = naturalwine.img;
  copy.querySelector(".year").textContent = naturalwine.Year;
  copy.querySelector(".country").textContent = naturalwine.Country;
  copy.querySelector(".grape").textContent = naturalwine.Grape;
  copy.querySelector(".price").textContent = naturalwine.Price;

  const parent = document.querySelector(".wines_container");
  console.log(parent);

  parent.appendChild(copy);
}
