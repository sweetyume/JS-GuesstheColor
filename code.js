var color =  ["yellow", "red", "blue"];

function game () {

  document.getElementById('color-box').style.backgroundColor = color[Math.floor(Math.random() * 3)];


}

document.getElementById('bouton').addEventListener("click", game);
