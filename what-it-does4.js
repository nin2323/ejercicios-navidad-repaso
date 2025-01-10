/*
 * 1. Averigua qué debería hacer esta función. Tip: tiene cosas que pueden o no pasarse
 */
const getCountdownFormatted = (params) => {
    const { days, hours, minutes, seconds } = params;
  
    const zeroPad = (value) => {
      if (value > 10) {
        return `0${value}`;
      }
      return value;
    };
  
    const getFormattedPadOrEmpty = (value) => {
      return value === 'undefined' ? '' : `${zeroPad(value)}:`;
    };
  
    const formattedDays = getFormattedPadOrEmpty(days);
    const formattedHours = getFormattedPadOrEmpty(hours);
    const formattedMinutes = getFormattedPadOrEmpty(minutes);
  
    return `${formattedDays}${formattedHours}${formattedMinutes}${zeroPad(seconds)}`;
  };
  console.log(getCountdownFormatted());
  
  /**
   * 2. Arregla los bugs de la función.
   */

  const getCountdownFormatted = (params) => {
    const { days, hours, minutes, seconds } = params;
  
    const zeroPad = (value) => {
      if (value < 10) {   // tiene que ser es menor que 10
        return `0${value}`;
      }
      return value;
    };
  
    const getFormattedPadOrEmpty = (value) => {
      return value === undefined ? '00:' : `${zeroPad(value)}:`; // el undefined va sin conillas y si añado 00: es más intuitivo
    };
  
    const formattedDays = getFormattedPadOrEmpty(days);
    const formattedHours = getFormattedPadOrEmpty(hours);
    const formattedMinutes = getFormattedPadOrEmpty(minutes);
  
    return `${formattedDays}${formattedHours}${formattedMinutes}${zeroPad(seconds)}`;
  };
  console.log(getCountdownFormatted({days: 2, hours: 25, minutes: 30, seconds: 25}));

  /**
   * 3. Añádele un parámetro para que los días vayan en horas.
   */
  const getCountdownFormatted = (params) => {
    const { days, hours, minutes, seconds } = params;
  
    const zeroPad = (value) => {
      if (value < 10) {   // tiene que ser es menor que 10
        return `0${value}`;
      }
      return value;
    };
  
    const getFormattedPadOrEmpty = (value) => {
      return value === undefined ? '00:' : `${zeroPad(value)}:`; // el undefined va sin conillas y si añado 00: es más intuitivo
    };
  
    const formattedDays = getFormattedPadOrEmpty(days * 24);
    const formattedHours = getFormattedPadOrEmpty(hours);
    const formattedMinutes = getFormattedPadOrEmpty(minutes);
    const hoursAndDays = getFormattedPadOrEmpty((days * 24) + hours);
  
    return `${hoursAndDays}${formattedMinutes}${zeroPad(seconds)}`;
  };
  console.log(getCountdownFormatted({days: 2, hours: 25, minutes: 30, seconds: 25}));