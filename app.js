const parentEl = document.querySelector(".parent");

parentEl.addEventListener("click", (e) => {
  let circleEl = document.createElement("div");
  circleEl.className = "circle";
  circleEl.style.left = e.pageX + "px";
  circleEl.style.top = e.pageY + "px";
  parentEl.append(circleEl);
});
