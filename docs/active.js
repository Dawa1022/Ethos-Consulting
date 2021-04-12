window.addEventListener("scroll", function() {
    let sticky_header = document.getElementById("sticky_header");
  
    if (window.pageYOffset > 0) {
      sticky_header.classList.add("is-sticky");
    } else {
      sticky_header.classList.remove("is-sticky");
    }
  });


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});