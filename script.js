let score = 0
let record = localStorage.getItem("record") || 0

const btn = document.getElementById("btn")
const restartBtn = document.getElementById("restart")
const scoreText = document.getElementById("score")
const recordText = document.getElementById("record")
const clickSound = document.getElementById("clickSound")

recordText.textContent = record

btn.addEventListener("click", () => {
  if (time === 10) startGame()

  if (time > 0) {
    score++
    scoreText.textContent = score
    if (clickSound) clickSound.play()
  }
})

restartBtn.addEventListener("click", resetGame)

function startGame() {
  timer = setInterval(() => {
    time--
    timeText.textContent = time

    if (time === 0) endGame()
  }, 1000)
}



  if (score > record) {
    record = score
    localStorage.setItem("record", record)
    recordText.textContent = record
  }
}

function resetGame() {
  score = 0
  time = 10
  btn.disabled = false
  restartBtn.disabled = true
  btn.textContent = "CLICAR"

  scoreText.textContent = score
  timeText.textContent = time
}
