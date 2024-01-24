let ap = document.querySelector(".ap");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let minprogress = document.querySelector(".minprogress");
let hrprogress = document.querySelector(".hrprogress");
let secprogress = document.querySelector(".secprogress");
let hrdot = document.querySelector(".hrdot");
let mindot = document.querySelector(".mindot");
let secdot = document.querySelector(".secdot");

setInterval(function () {
  let h =
    new Date().getHours() >= 12
      ? new Date().getHours() - 12
      : new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  minutes.textContent = m;
  seconds.textContent = s;
  hours.textContent = h;
  minprogress.style.strokeDashoffset = `${616 - (616 * m) / 60}`;
  secprogress.style.strokeDashoffset = `${616 - (616 * s) / 60}`;
  mindot.style.transform = `rotate(${m * 6}deg)`;
  secdot.style.transform = `rotate(${s * 6}deg)`;

  hrprogress.style.strokeDashoffset = `${616 - (616 * h) / 12}`;
  hrdot.style.transform = `rotate(${h * 30})`;

  if (h >= 12) {
    h -= 12;
  } else {
    ap.textContent = "am";
  }
});
