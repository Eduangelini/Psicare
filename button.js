// Visibilidade do botão de compra

window.addEventListener('scroll', function () {
  var scroll = document.getElementById('buyBtn');
  var scrollThreshold = 550;

  if (scroll && window.scrollY > scrollThreshold) {
    scroll.classList.remove("hidden");
    scroll.classList.add("visible");
  } else {
    scroll.classList.remove("visible");
    scroll.classList.add("hidden");
  }
});