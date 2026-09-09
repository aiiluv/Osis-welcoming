/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");

    screen1.classList.remove("active");

    screen2.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   FINISH LETTER
========================= */

function finishLetter() {

    const screen2 = document.getElementById("screen2");
    const screen3 = document.getElementById("screen3");

    screen2.classList.remove("active");

    screen3.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}