document.addEventListener("DOMContentLoaded", function () {
  let championsData;

function displayChampions(champions) {
  const championInfoDiv = document.getElementById("championInfo");
  let championHTML = "<div class='row row-cols-md-6 g-4'>";

  for (const champion in champions) {
      const championData = champions[champion];
      const championName = championData.name;
      const championImage = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championData.image.full}`;
      const championTitle = championData.title;
      const championInfo = championData.blurb;

      championHTML += `
          <div class='col'>
              <a href='championinfo.html?name=${championName}'>
                  <img src='${championImage}' class='img-fluid' alt='${championName}'>
              </a>
          </div>
      `;
  }

  championHTML += "</div>";
  championInfoDiv.innerHTML = championHTML;
}


  function filterChampions(searchTerm) {
    const filteredChampions = {};
    for (const champion in championsData) {
      const championData = championsData[champion];
      if (championData.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        filteredChampions[champion] = championData;
      }
    }
    return filteredChampions;
  }

  fetch("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
    .then(res => res.json())
    .then(data => {
      championsData = data.data;
      displayChampions(championsData);
    })
    .catch(error => console.log(error));

  const searchForm = document.querySelector("form[role='search']");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = searchForm.querySelector("input[type='search']").value;
    const filteredChampions = filterChampions(searchTerm);

    displayChampions(filteredChampions);
  });
});

