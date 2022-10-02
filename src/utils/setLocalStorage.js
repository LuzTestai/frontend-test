import { isQuotaExceeded } from "./expiredLocalStorage";

export const setLocalStorage = (key, value) => {
  var curtime = new Date().getTime(); // Obtener la hora actual y convertir a secuencia de cadena JSON
  var valueDate = JSON.stringify({
    val: value,
    timer: curtime,
  });
  try {
    localStorage.setItem(key, valueDate);
  } catch (e) {
    // Compatibilidad
    if (isQuotaExceeded(e)) {
      console.log("Error: el almacenamiento local excede el límite");
      localStorage.clear();
    } else {
      console.log("Error: no se pudo guardar en el almacenamiento local");
    }
  }
};
