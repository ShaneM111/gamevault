const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

let snake = [{x: 200, y: 200}]
let dx = 20, dy = 0
let food = {x: 100, y: 100}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") {dx=0;dy=-20}
  if (e.key === "ArrowDown") {dx=0;dy=20}
  if (e.key === "ArrowLeft") {dx=-20;dy=0}
  if (e.key === "ArrowRight") {dx=20;dy=0}
})

function loop() {
  ctx.clearRect(0,0,600,400)
  snake.unshift({x: snake[0].x + dx, y: snake[0].y + dy})
  snake.pop()

  ctx.fillStyle = "#00FF9C"
  snake.forEach(s => ctx.fillRect(s.x,s.y,18,18))
  ctx.fillStyle = "#FF0055"
  ctx.fillRect(food.x,food.y,18,18)

  requestAnimationFrame(loop)
}
loop()
