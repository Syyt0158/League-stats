fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    data.forEach(user => {
      const markup = `<li>${user.champion}</li>`;

      document.querySelector('championInfo').insertAdjacentHTML('beforeend', markup);
    });
  })
  .catch(error => console.log(error));


  //2e 

  fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(err))

  //3e

  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
      .then(res => res.json())
      .then(data => {
        const champions = data.data;
        const championInfoDiv = document.getElementById("championInfo");
        let championHTML = "<ul>";
        for (const champion in champions) {
          championHTML += `<li>${champions[champion].name}</li>`;
        }
        championHTML += "</ul>";
        championInfoDiv.innerHTML = championHTML;
      })
      .catch(error => console.log(error));
  });

  //THIS IS IMPORTANT!!

  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
      .then(res => res.json())
      .then(data => {
        const champions = data.data;
        const championInfoDiv = document.getElementById("championInfo");
        let championHTML = "<ul>";
        for (const champion in champions) {
          const championData = champions[champion];
          const championName = championData.name;
          const championImage = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championData.image.full}`;
          const championTitle = championData.title;
          const championInfo = championData.blurb;
  
          championHTML += `
            <li>
              <img src="${championImage}" alt="${championName}"> 
              <h3>${championName}</h3>
              <p><strong>Title:</strong> ${championTitle}</p>
              <p><strong>Info:</strong> ${championInfo}</p>
            </li>
          `;
        }
  
        championHTML += "</ul>";
        championInfoDiv.innerHTML = championHTML;
      })
      .catch(error => console.log(error));
  });
  
//even more important!!

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
      .then(res => res.json())
      .then(data => {
        const champions = data.data;
        const championInfoDiv = document.getElementById("championInfo");
  
        // Maak een HTML-string met de champion-gegevens
        let championHTML = "<div class='row row-cols-1 row-cols-md-5 g-4'>";
  
        // Loop door alle champions en voeg ze toe aan de HTML-string
        for (const champion in champions) {
          const championData = champions[champion];
          const championName = championData.name;
          const championImage = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championData.image.full}`;
          const championTitle = championData.title;
          const championInfo = championData.blurb;
  
          // Voeg een Bootstrap-card toe voor elke kampioen
          championHTML += `
            <div class='col'>
              <div class='card'>
                <img src='${championImage}' class='card-img-top' alt='${championName}'>
                <div class='card-body'>
                  <h5 class='card-title'>${championName}</h5>
                  <p class='card-text'><strong>Title:</strong> ${championTitle}</p>
                  <p class='card-text'><strong>Info:</strong> ${championInfo}</p>
                </div>
              </div>
            </div>
          `;
        }
  
        championHTML += "</div>";
        championInfoDiv.innerHTML = championHTML;
      })
      .catch(error => console.log(error));
  });
  