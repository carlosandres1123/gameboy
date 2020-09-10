const playersEl = document.querySelectorAll(".player");
const players = [];
playersEl.forEach(player => {
    players.push(new AudioPlayer(player));
})
