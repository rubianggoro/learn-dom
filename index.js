let add = document.getElementById("btn");

add.addEventListener("click", addInput);

function addInput() {
  var data = document.getElementById("input").value;
  var ul = document.createElement("ul");
  var list = document.createElement("li");
  ul.appendChild(list)
  list.innerHTML = data;
  document.body.appendChild(ul);
}