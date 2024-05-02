

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".image");
  let index = 0;

  function showImage() {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
    index = (index + 1) % images.length;
  }

  setInterval(showImage, 3000); // Cambia la imagen cada 3 segundos (ajusta según lo desees)
});




 function getMenus(){
    const semanas = 6;
    const dias = ['LU', 'MA', 'MI', 'J', 'V', 'S', 'D']; // Abreviaciones de los días de la semana
    const vectorMenus = [];
    
    for (let semana = 1; semana <= semanas; semana++) {
      const nombreSemana = `S${semana}`;
      const semanaObjeto = {};
    
      for (let dia of dias) {
        const nombreDia = `${nombreSemana}${dia}`;
        semanaObjeto[nombreDia] = {
          "desayuno": {
            "plato_fuerte": ["", ""],
            "acompañamientos": ["", ""],
            "bebidas": ["", ""]
          },
          "almuerzo": {
            "plato_fuerte": ["", ""],
            "acompañamientos": ["", ""],
            "bebidas": ["", ""]
          },
          "cena": {
            "plato_fuerte": ["", ""],
            "acompañamientos": ["", ""],
            "bebidas": ["", ""]
          }
        };
      }
    
      vectorMenus.push(semanaObjeto);
    }
    
    return vectorMenus;

}


export default getMenus;

