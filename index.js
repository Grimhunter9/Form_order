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
  if(choose.style.display == "block"){
    choose.style.display = "none"
  }
}

function second() {
  two.style.display = "block";
if(choose.style.display == "block"){
    choose.style.display = "none"
  }
}

function builder(){
    FB.style.display = "block";
    if(one.style.display == "block" || two.style.display == "block" ) {
    one.style.display = "none"
    two.style.display = "none"
  }
}

function Preview(){
    form.style.display = "block";
    if(FB.style.display == "block"){
        FB.style.display = "none"
    }
}