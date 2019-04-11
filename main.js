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
    game.playerChoice = event.target.dataset.option;
    hands.forEach(hand => hand.style.color = "");
    event.target.style.color = "#ccdb6b";
}
const startGame = () => {
    if (!game.playerChoice) {
        return alert("Choose hand !!!");
    }
    game.aiChoice = hands[Math.floor(Math.random() * 3)].dataset.option;
}

hands.forEach(hand => hand.addEventListener("click", handSelection));
document.querySelector(".confirm").addEventListener("click", startGame);