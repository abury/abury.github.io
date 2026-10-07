"use strict";

// Headline: swap the two phrases between rows every few seconds,
// animating each word from its old position to its new one.
function headlineSwap(h1) {
  if (!h1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var rows = h1.querySelectorAll(".hl-row");
  if (rows.length < 2) return;
  var ease = "cubic-bezier(0.65, 0, 0.35, 1)";

  setInterval(function () {
    var a = rows[0].querySelector(".hl-phrase");
    var b = rows[1].querySelector(".hl-phrase");
    if (!a || !b) return;

    var els = Array.prototype.slice.call(h1.querySelectorAll(".hl-word, .hl-phrase"));
    var first = els.map(function (e) { return e.getBoundingClientRect(); });

    rows[0].appendChild(b);
    rows[1].appendChild(a);

    var last = els.map(function (e) { return e.getBoundingClientRect(); });

    els.forEach(function (e, i) {
      e.style.transition = "transform 0s, color .6s " + ease;
      e.style.transform = "translate(" + (first[i].left - last[i].left) + "px, " + (first[i].top - last[i].top) + "px)";
    });

    void h1.offsetWidth; // force reflow so the next transition runs

    els.forEach(function (e) {
      e.style.transition = "transform .6s " + ease + ", color .6s " + ease;
      e.style.transform = "translate(0px, 0px)";
    });
  }, 2600);
}

// Carousels: on narrow screens the card grids scroll sideways;
// keep the dots under each one in step with the scroll position.
function swipeDots() {
  document.querySelectorAll(".work-grid").forEach(function (grid) {
    var holder = grid.nextElementSibling;
    if (!holder || !holder.classList.contains("swipe-dots")) return;
    var dots = holder.querySelectorAll("span");

    function update() {
      var card = grid.children[0];
      if (!card) return;
      var step = card.getBoundingClientRect().width + 16;
      var n = Math.round(grid.scrollLeft / step);
      if (grid.scrollLeft >= grid.scrollWidth - grid.clientWidth - 2) n = dots.length - 1;
      n = Math.max(0, Math.min(dots.length - 1, n));
      dots.forEach(function (dot, i) { dot.classList.toggle("on", i === n); });
    }

    grid.addEventListener("scroll", update, { passive: true });
    update();
  });
}

headlineSwap(document.querySelector(".hl"));
swipeDots();
