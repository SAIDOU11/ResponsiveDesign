let width = document.getElementById("width");
const onresize = function () {
  width.innerText = document.body.clientWidth;
  width.classList.add("display-width");
  setTimeout(() => {
    width.classList.remove("display-width");
  }, 2000);
};
window.addEventListener("resize", onresize);
