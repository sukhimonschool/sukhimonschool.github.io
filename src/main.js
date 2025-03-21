function navopen() {
  document.getElementById('main').classList.add('navslide');
}

function navclose() {
  document.getElementById('main').classList.remove('navslide');
}

document.addEventListener("DOMContentLoaded", function() {
    const halfSchoolElement = document.getElementById("school-name-half");
    halfSchoolElement.textContent = textContent.mainname;

    // Update the paragraph
    const paragraphElement = document.getElementById("paragraph");
    paragraphElement.textContent = textContent.paragraph;
});