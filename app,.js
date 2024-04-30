
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

