/**
 * 1. Averigüa qué debería hacer esta función
 */
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getCountdownShapeFromSeconds = (seconds) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS); // segundos entre segundos que hay en un dia (86400)
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS); 

  return {
    days: days,
    hours: hours,
    minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS), // obtener el resto de las horas y dividirlo por los segundos que hay en un minuto
    seconds: Math.floor(seconds % 60)
  };
};
console.log(getCountdownShapeFromSeconds(122475));

/**
 * 2. La función no está funcionando bien, averigua qué está fallando y arréglalo.
 */
// los minutoa no estan funcionando 


/**
 * 3. Añade un parámetro a la función para que el usuario pueda elegir si quiere que salgan los días como horas.
 */

const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getCountdownShapeFromSeconds = (seconds, format = false) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  } else if (format) {
    const hours = Math.floor(seconds / HOUR_IN_SECONDS);
    return {
      hours: hours,
      minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS), // obtener el resto de las horas y dividirlo por los segundos que hay en un minuto
      seconds: Math.floor(seconds % 60)
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS); // segundos entre segundos que hay en un dia (86400)
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS); 

  return {
    days: days,
    hours: hours,
    minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS), // obtener el resto de las horas y dividirlo por los segundos que hay en un minuto
    seconds: Math.floor(seconds % 60)
  };
};
console.log(getCountdownShapeFromSeconds(122475, true));

