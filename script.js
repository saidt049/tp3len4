document.addEventListener("DOMContentLoaded", function () {
    const inputArchivos = document.getElementById("archivos");
    const cajaDatos = document.getElementById("cajadatos");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");
  
    inputArchivos.addEventListener("change", function () {
      const archivos = inputArchivos.files;
      if (archivos.length === 0) {
        cajaDatos.textContent = "No se seleccionaron archivos";
        return;
      }
      cajaDatos.innerHTML = "";
      const lista = document.createElement("ul");
  
      for (let i = 0; i < archivos.length; i++) {
        const archivo = archivos[i];
        const item = document.createElement("li");
  
        if (archivo.type.startsWith("image/")) {
          const img = document.createElement("img");
          img.src = URL.createObjectURL(archivo);
          img.alt = archivo.name;
  
          item.textContent = archivo.name + " - Imagen valida";
          item.appendChild(document.createElement("br"));
          item.appendChild(img);
  
          const btnVer = document.createElement("button");
          btnVer.textContent = "Ver imagen completa";
          btnVer.className = "ver";
          btnVer.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
          });
  
          item.appendChild(btnVer);
        } else {
          item.textContent = archivo.name + " - No es una imagen";
        }
        lista.appendChild(item);
      }
      cajaDatos.appendChild(lista);
    });
  
    cerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  