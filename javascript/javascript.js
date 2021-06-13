// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );


function myFunction() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("change");
  var z = document.getElementById("change");
  if (x.style.display === "none" ) {
    z.style.color = "black";
    x.style.display = "flex";
    y.style.background = "white";
  } else {
    z.style.color = "white";
    x.style.display = "none";
    y.style.background = "black";
  }
}


const d = new Date();
text = d.toDateString();
//   text = text[0] + text[1] + text[2] + text[4] + "day"
document.getElementById("d2").innerHTML = text