window.addEventListener("scroll", function() {
    let sticky_header = document.getElementById("sticky_header");
  
    if (window.pageYOffset > 0) {
      sticky_header.classList.add("is-sticky");
    } else {
      sticky_header.classList.remove("is-sticky");
    }
  });