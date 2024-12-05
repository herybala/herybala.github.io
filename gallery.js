document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const gallery = document.getElementById("gallery");

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                gallery.innerHTML = `
                    <img src="${e.target.result}" alt="Image chargée" class="image-galerie">
                    <p>Nom de fichier : ${file.name}</p>
                `;
            };

            reader.readAsDataURL(file);
        } else {
            gallery.innerHTML = "<p>Aucune image chargée.</p>";
        }
    });
});
