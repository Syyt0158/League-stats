document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const championName = urlParams.get('name');

    fetch(`https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion/${championName}.json`)
        .then(res => res.json())
        .then(data => {
            const championData = data.data[championName];
            const championImage = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championData.image.full}`;

            document.getElementById("championName").textContent = championData.name;
            document.getElementById("championImage").src = championImage;
            document.getElementById("championTitle").textContent = championData.title;
            document.getElementById("championInfo").textContent = championData.blurb;
        })
        .catch(error => console.log(error));
});
