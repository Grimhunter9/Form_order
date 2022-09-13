const choose = document.getElementById("toggle");
const one = document.getElementById("singular");
const two = document.getElementById("plural");
const FB = document.getElementById("build");
const form = document.getElementById("Myform");
function panel() {
  document.getElementById("toggle").style.display = "block";
}

function single() {
  one.style.display = "block";
  if (choose.style.display == "block") {
    choose.style.display = "none"
  }
}

function second() {
  two.style.display = "block";
  if (choose.style.display == "block") {
    choose.style.display = "none"
  }
}

function builder() {
  FB.style.display = "block";
  if (one.style.display == "block" || two.style.display == "block") {
    one.style.display = "none"
    two.style.display = "none"
  }
}

function Preview() {
  var div = document.getElementById("Company2");
  var input = document.getElementById("Company");

  var div2 = document.getElementById("name5");
  var input2 = document.getElementById("name4");

  var div3 = document.getElementById("Adress2");
  var input3 = document.getElementById("Adress");

  var div4 = document.getElementById("Ceo2");
  var input4 = document.getElementById("Ceo");

  div.value = input.value;
  div2.value = input2.value;
  div3.value = input3.value;
  div4.value = input4.value;
  form.style.display = "block";
  if (FB.style.display == "block") {
    FB.style.display = "none"
  }
}