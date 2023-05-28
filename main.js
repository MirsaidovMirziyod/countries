function generateCard(data) {
  return `<div class="card">
          <img class="image__flag" src="${data.flag}" alt="">
          <div class="card__text">
            <h3>${data.name}</h3>
            <p>population: ${data.population}</p>
            <p>Region: ${data.region}</p>
            <p>Capital: ${data.capital}</p>
          </div>
          </div>`;
}

const defaultData = [
  { name: "Germany", population: 35 },
  { name: "United States of America", population: 13 },
  // Добавьте здесь еще данные по умолчанию
];

function displayCards(query) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  if (query.trim() === "") {
    // Поле ввода пустое, отображаем данные по умолчанию
    defaultData.forEach((data) => {
      const card = generateCard(data);
      cardContainer.innerHTML += card;
    });
    return;
  }

  const filteredData = countries.filter((data) => {
    const name = data.name.toLowerCase();
    return name.includes(query.toLowerCase());
  });

  if (filteredData.length === 0) {
    // Нет соответствующих данных, не отображать ничего
    cardContainer.innerHTML = "<p>Нет результатов</p>";
  } else {
    filteredData.forEach((data) => {
      const card = generateCard(data);
      cardContainer.innerHTML += card;
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayCards(""); // Отображение данных по умолчанию при загрузке страницы
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (event) => {
  const query = event.target.value;
  displayCards(query);
});
