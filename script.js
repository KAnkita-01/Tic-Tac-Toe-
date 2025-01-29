document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const totalBoxes = 9;
    let playableBoxes = [];
    let currentPlayer = "X";

    // Select 5 random playable boxes
    while (playableBoxes.length < 5) {
        let randomIndex = Math.floor(Math.random() * totalBoxes);
        if (!playableBoxes.includes(randomIndex)) {
            playableBoxes.push(randomIndex);
        }
    }

    // Create board
    for (let i = 0; i < totalBoxes; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        
        if (!playableBoxes.includes(i)) {
            box.classList.add("disabled");
        } else {
            box.addEventListener("click", function () {
                if (this.innerText === "") {
                    this.innerText = currentPlayer;
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            });
        }
        
        board.appendChild(box);
    }
});
