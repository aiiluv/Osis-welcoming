/* =========================
   DATA
========================= */

let agentData = {
    name: "",
    className: "",
    division: ""
};


/* =========================
   CHANGE SCREEN
========================= */

function nextScreen(screenNumber) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document
        .getElementById(`screen${screenNumber}`)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   CONFIRM IDENTITY
========================= */

function confirmIdentity() {

    const name = document.getElementById("name").value.trim();
    const className = document.getElementById("class").value.trim();
    const division = document.getElementById("division").value.trim();

    const error = document.getElementById("error");

    if (!name || !className || !division) {

        error.style.display = "block";

        return;
    }

    error.style.display = "none";


    // Simpan data
    agentData.name = name;
    agentData.className = className;
    agentData.division = division;


    // Masukkan nama ke welcome screen
    document.getElementById("welcomeName").textContent = name;


    // Pindah ke screen 3
    nextScreen(3);
}


/* =========================
   SHOW AGENT CARD
========================= */

function showCard() {

    // Nama
    document.getElementById("cardNameTitle").textContent =
        agentData.name;

    document.getElementById("cardName").textContent =
        agentData.name;

    // Kelas
    document.getElementById("cardClass").textContent =
        agentData.className;

    // Divisi
    document.getElementById("cardDivision").textContent =
        agentData.division;


    // Pindah ke card
    nextScreen(4);
}


/* =========================
   DOWNLOAD CARD
========================= */

function downloadCard() {

    const card = document.getElementById("agentCard");

    html2canvas(card, {
        scale: 2,
        backgroundColor: "#ffffff"
    }).then(canvas => {

        const link = document.createElement("a");

        // Nama file berdasarkan nama agent
        const cleanName = agentData.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-");

        link.download = `osis-agent-${cleanName}.png`;

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

}