window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("cover").classList.add("fade-out");
    setTimeout(() => {
      document.getElementById("cover").style.display = "none";
      document.getElementById("startPage").style.display = "block";
    }, 1000);
  }, 1000);
});