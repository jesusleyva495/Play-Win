document.addEventListener("DOMContentLoaded", () => {
  const scrollToBottom = document.getElementById("btn-ir-arriba");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottom.style.display = "block";
    } else {
      scrollToBottom.style.display = "none";
    }
  });
  scrollToBottom.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const scrollToBottomDown = document.getElementById("contacto");
  scrollToBottomDown.addEventListener("click", () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth",
    });
  });
});
