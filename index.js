const clearNotif = document.querySelector(".clear-notif");
const unread = document.querySelectorAll(".unread");
const dot = document.querySelectorAll(".dot");
const counter = document.querySelector(".notif-counter");
console.log(counter.textContent);

clearNotif.addEventListener("click", () => {
  unread.forEach((ele) => {
    ele.classList.remove("unread");
  });
  dot.forEach((ele) => {
    const afterDot = window.getComputedStyle(ele, "::after");
    //
    // afterDot.removeProperty("display");
    ele.style.setProperty("--after", "transparent");
    counter.textContent = 0;
  });
});

unread.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.classList.contains("unread")) {
      counter.textContent--;
      ele.style.setProperty("--after", "transparent");
      ele.classList.remove("unread");
    }
  });
});
