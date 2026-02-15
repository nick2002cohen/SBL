let players = [
  { name: "Player 1", games: 0, total: 0 },
  { name: "Player 2", games: 0, total: 0 },
  { name: "Player 3", games: 0, total: 0 },
  { name: "Player 4", games: 0, total: 0 },
  { name: "Player 5", games: 0, total: 0 },
  { name: "Player 6", games: 0, total: 0 },
  { name: "Player 7", games: 0, total: 0 },
  { name: "Player 8", games: 0, total: 0 },
  { name: "Player 9", games: 0, total: 0 },
  { name: "Player 10", games: 0, total: 0 }
];

if (localStorage.getItem("players")) {
  players = JSON.parse(localStorage.getItem("players"));
}

function save() {
  localStorage.setItem("players", JSON.stringify(players));
}

function addScore(playerIndex, score) {
  players[playerIndex].games++;
  players[playerIndex].total += score;
  save();
  render();
}

function avg(p) {
  return p.games === 0 ? 0 : (p.total / p.games).toFixed(1);
}

function render() {
  document.querySelectorAll(".standings").forEach(table => {
    table.innerHTML = players
      .sort((a, b) => avg(b) - avg(a))
      .map(p => `<tr><td>${p.name}</td><td>${p.games}</td><td>${avg(p)}</td></tr>`)
      .join("");
  });

  document.querySelectorAll(".stats").forEach(table => {
    table.innerHTML = players
      .map(p => `<tr><td>${p.name}</td><td>${p.games}</td><td>${p.total}</td><td>${avg(p)}</td></tr>`)
      .join("");
  });
}

document.addEventListener("DOMContentLoaded", render);
