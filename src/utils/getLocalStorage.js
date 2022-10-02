export const getLocalStorage = (key) => {
  let exp = 3600000; // 1 hora
  if (localStorage.getItem(key)) {
    let vals = localStorage.getItem(key); // Obtener el valor del almacenamiento local
    let dataObj = JSON.parse(vals); // Convertir cadena en objeto JSON
    // If (hora actual: la hora en que se configuró el elemento almacenado cuando se creó)> hora de vencimiento

    let isTimed = new Date().getTime() - dataObj.timer > exp;
    if (isTimed) {
      console.log("El almacenamiento ha expirado");
      localStorage.removeItem(key);
      return null;
    }
    return dataObj.val;
  } else {
    return null;
  }
};
