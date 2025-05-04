let gamesData = [];

function displayGames(filter = "") {
  const list = document.getElementById('game-list');
  list.innerHTML = "";
  const filtered = gamesData.filter(game =>
    game.title.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach(game => {
    const div = document.createElement('div');
    div.className = 'game-card';
    div.innerHTML = `
      <img src="public/${game.image}" />
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <a href="public/${game.apk}" download>Download</a>
    `;
    list.appendChild(div);
  });
}

fetch('games.json')
  .then(res => res.json())
  .then(data => {
    gamesData = data;
    displayGames();
    document.getElementById("search").addEventListener("input", (e) => {
      displayGames(e.target.value);
    });
  });