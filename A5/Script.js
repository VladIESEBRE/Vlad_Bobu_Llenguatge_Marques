document.addEventListener("DOMContentLoaded", function () {

  const imagenes = document.querySelectorAll(".foto-alargada");
  const overlay = document.getElementById("overlay-img");
  const overlayImg = document.getElementById("overlay-img-src");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      overlayImg.src = img.src;   // Cargar la imagen clicada
      overlay.style.display = "flex"; // Mostrar overlay
    });
  });

  // Cerrar cuando cliques fuera de la imagen
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });

});


function highlight() {
  const seccio = document.getElementById("seccio");
  const text = document.getElementById("textOcult");

  seccio.style.backgroundColor = "orange";
  seccio.style.color = "white";
  text.style.display = "block";
}

function unhighlight() {
  const seccio = document.getElementById("seccio");
  const text = document.getElementById("textOcult");

  seccio.style.backgroundColor = "lightyellow";
  seccio.style.color = "black";
  text.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

    let segundos = 0;

    function format(num) {
        return num < 10 ? "0" + num : num;
    }

    function actualizarReloj() {
        segundos++;

        let h = Math.floor(segundos / 3600);
        let m = Math.floor((segundos % 3600) / 60);
        let s = segundos % 60;

        document.getElementById("reloj").textContent =
            format(h) + ":" + format(m) + ":" + format(s);
    }

    setInterval(actualizarReloj, 1000);

});

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnRegistrar").addEventListener("click", function () {

        let nom = document.getElementById("nom").value.trim();
        let cognom = document.getElementById("cognom").value.trim();
        let email = document.getElementById("email").value.trim();
        let pass1 = document.getElementById("pass1").value;
        let pass2 = document.getElementById("pass2").value;

        // Validació de camps buits
        if (!nom || !cognom || !email || !pass1 || !pass2) {
            alert("❌ Cal omplir tots els camps.");
            return;
        }

        // Validació email correcte
        if (!email.includes("@") || !email.includes(".")) {
            alert("❌ Introdueix un correu electrònic vàlid.");
            return;
        }

        // Longitud mínima contrasenya
        if (pass1.length < 8) {
            alert("❌ La contrasenya ha de tenir com a mínim 8 caràcters.");
            return;
        }

        // Contrasenyes iguals
        if (pass1 !== pass2) {
            alert("❌ Les contrasenyes no coincideixen.");
            return;
        }

        // Tot correcte
        alert("✔ T’has registrat correctament per al viatge a Barcelona!");
    });

});
