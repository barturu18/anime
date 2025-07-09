function showDetail(animeName) {
    alert("Kamu memilih: " + animename + "✨");
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // ganti setiap 4 detik
}
