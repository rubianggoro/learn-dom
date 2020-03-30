let add = document.getElementById("btn");

add.addEventListener("click", addInput);

function addInput() {
  document.getElementById("list").innerHTML += document.getElementById(
    "input"
  ).value;
}
