var color =  ["yellow", "red", "blue"];

function game () {

  document.getElementById('colorBox').style.backgroundColor = color[Math.floor(Math.random() * 3)];
  if (document.getElementById('colorBox').style.backgroundColor == document.getElementById('colorSelect').value ) {
    alert ("You win!");
  }

else {
  alert ("You lose!");
}
}

document.getElementById('bouton').addEventListener("click", game);
