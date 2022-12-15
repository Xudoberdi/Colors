const body = document.querySelector("body");
const btn = document.querySelector("button");

function gradient() {
  const random = Math.trunc(Math.random() * 255 + 1);
  return random;
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.background = `linear-gradient(246deg, 
  rgba(${gradient()},${gradient()},${gradient()} ) ,
  rgba(${gradient()},${gradient()},${gradient()} ) ,
  rgba(${gradient()},${gradient()},${gradient()}  ))`;
});
