const score = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}
const game = {
    playerChoice: "",
    aiChoice: "",
}
const hands = [...document.querySelectorAll(".far")];

const handSelection = (event) => {
    game.playerChoice = event.dataset;
    console.log(handSelection.dataset);
}

hands.forEach(hand => hand.addEventListener("click", handSelection));