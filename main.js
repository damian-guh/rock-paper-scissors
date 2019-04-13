const score = {
    wins: 0,
    losses: 0
}
const game = {
    playerChoice: "",
    aiChoice: "",
}
const hands = [...document.querySelectorAll(".items")];

const handSelection = (event) => {
    game.playerChoice = event.target.dataset.option;
    hands.forEach(hand => {
        hand.style.color = "";
        hand.style.transform = ""
    });
    event.target.style.transform = "scale(1.25)";
    event.target.style.color = "#ccdb6b";
}
const endGame = () => {
    document.querySelector(`[data-option="${game.playerChoice}"]`).style.transform = "";
    document.querySelector(`[data-option="${game.playerChoice}"]`).style.color = "";
    game.playerChoice = "";
}
const checkResult = (player, ai) => {

    if (player === ai) {
        score.wins++;
        score.losses++;
        document.querySelector("h1").style.color = "#898382";
        document.querySelector("h1").textContent = "Draw";

    } else if ((player === "paper" && ai === "rock") || (player === "scissors" && ai === "paper") || (player === "rock" && ai === "scissors")) {
        score.wins++;
        document.querySelector("h1").style.color = "#72ef6b"
        document.querySelector("h1").textContent = "Win";

    } else {
        score.losses++;
        document.querySelector("h1").style.color = "#ba3f2c"
        document.querySelector("h1").textContent = "Loss";
    }
    document.querySelector(".score").innerHTML = `<i class="far fa-user"></i> ${score.wins} : ${score.losses} <i class="fas fa-desktop"></i>`;
    endGame();
}

const startGame = () => {
    if (!game.playerChoice) {
        return alert("Choose hand !!!");
    }
    game.aiChoice = hands[Math.floor(Math.random() * 3)].dataset.option;
    const gameResult = checkResult(game.playerChoice, game.aiChoice);
}

hands.forEach(hand => hand.addEventListener("click", handSelection));
document.querySelector(".confirm").addEventListener("click", startGame);