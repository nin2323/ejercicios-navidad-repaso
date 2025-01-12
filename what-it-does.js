//ejercicios clase repaso

const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagram', 'tikTok', 'youtube'];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: 'josmidgg',
  facebook: undefined,
  instagram: 'gutufacio',
  tikTok: undefined,
  youtube: 'robustio'
};

function isConnected(network) {
  return CONNECTED_NETWORKS[network];
}

console.log(isConnected('twitter'))



/**
 * 1. Intenta deducir qué hace el código de arriba y escríbelo aquí.
 */
// Devuelve las que estan conectadas con true o false

/**
 * 2. Crea una función que, dado el nombre de una red social, te diga cual es la cuenta del usuario
 */
function nameSocialMedia(nameNetWork) {
  return CONNECTED_NETWORKS_ACCOUNTS[nameNetWork];
}
console.log(nameSocialMedia('youtube'));

/**
 * 3. Crea una función que, dado un array de redes sociales, te devuelva otro array indicando la red,
 * si está conectada y con el nombre de usuario si la red está conectada.
 *
 * Por ejemplo, con el array ['twitter', 'youtube'], debería devolverte un array
 * [{ network: 'twitter', isConnected: true, username: 'josmidgg' }, { network: 'youtube', isConnected: false }]
 */
const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagram', 'tikTok', 'youtube'];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false
};
function isConnected(network) {
  return CONNECTED_NETWORKS[network];
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: 'josmidgg',
  facebook: undefined,
  instagram: 'gutufacio',
  tikTok: undefined,
  youtube: 'robustio'
};
function nameSocialMedia(nameNetWork) {
  return CONNECTED_NETWORKS_ACCOUNTS[nameNetWork];
}


function checkArray(AVAILABLE_NETWORKS) {
    return AVAILABLE_NETWORKS.map(socialMedia =>{
    return {network: socialMedia, isConnected: isConnected(socialMedia), username: nameSocialMedia(socialMedia)}
  });
} 
console.log(checkArray(['twitter', 'facebook', 'instagram', 'tikTok', 'youtube']));


/**
 * 4. modifica la función isConnected y la función del ejercicio 2 para que ignore mayúsculas y salga el
 * mismo resultado si el usuario pone 'twitter' o 'tWiTter'
 */
const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagram', 'tikTok', 'youtube'];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false
};

function isConnected(network) {
  if (network === 'tikTok') {
    return CONNECTED_NETWORKS[network];
  }  
    return CONNECTED_NETWORKS[network.toLowerCase()];  
  }  


const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: 'josmidgg',
  facebook: undefined,
  instagram: 'gutufacio',
  tikTok: undefined,
  youtube: 'robustio'
};

function nameSocialMedia(nameNetWork) {
  return CONNECTED_NETWORKS_ACCOUNTS[nameNetWork];
}

function checkArray(AVAILABLE_NETWORKS) {
  return AVAILABLE_NETWORKS.map(socialMedia => {
    return {network: socialMedia.toLowerCase(), isConnected: isConnected(socialMedia), username: nameSocialMedia(socialMedia)}
  });
} 
console.log(checkArray(['tWitter', 'facebook', 'instagram', 'tikTok', 'youtube']));


/**
 * 5. Crea un objeto cuyas propiedades sean la red social con un nombre correcto para javascript y cuyo valor sea el nombre de la
 * red social. Por ejemplo el valor de la propiedad tikTok sería Tik Tok
 */

const realNameSocialMedia = {
  twitter: 'X',
  facebook: 'Faceboock',
  instagram: 'Instagram',
  tikTok: 'Tik Tok',
  youtube: 'YouTube'
};
function realName(newName) {
  return realNameSocialMedia[newName.toLowerCase()];
}

/**
 * 6. Crea una función que dado un array de redes sociales, te devuelva la misma información del ejercicio 3
 * incluyendo el nombre de la red social.
 */

  const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagram', 'tikTok', 'youtube'];

  const CONNECTED_NETWORKS = {
    twitter: true,
    facebook: false,
    instagram: true,
    tikTok: false,
    youtube: false
  };
  function isConnected(network) {
    if (network === 'tiktok') {
      return CONNECTED_NETWORKS[network];
    } 
    return CONNECTED_NETWORKS[network.toLowerCase()];
  }

  const CONNECTED_NETWORKS_ACCOUNTS = {
    twitter: 'josmidgg',
    facebook: undefined,
    instagram: 'gutufacio',
    tikTok: undefined,
    youtube: 'robustio'
  };
  function nameSocialMedia(nameNetWork) {
    return CONNECTED_NETWORKS_ACCOUNTS[nameNetWork.toLowerCase()];
  }


  function checkArray(AVAILABLE_NETWORKS) {
      return AVAILABLE_NETWORKS.map(socialMedia =>{
      return {network: socialMedia.toLowerCase(), isConnected: isConnected(socialMedia), username: nameSocialMedia(socialMedia), realName: realName(socialMedia)}
    });
  } 
  console.log(checkArray(['tWitter', 'facebook', 'instagram', 'tikTok', 'youtube']));

 /**
 * 7. Crea una función que dado un array de redes sociales, devuelva lo mismo que la función 6 pero solo
 * de las redes que están conectadas sin modificar la función 6.
 */

 const realNameSocialMedia = {
  twitter: 'X',
  facebook: 'Faceboock',
  instagram: 'Instagram',
  tikTok: 'tik Tok',
  youtube: 'YouTube'
};
function realName(newName) {
  if ('twitter' === 'X') {
    return 'X';
  };
  return realNameSocialMedia[newName];
}

 
 const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagram', 'tikTok', 'youtube'];

 const CONNECTED_NETWORKS = {
   twitter: true,
   facebook: false,
   instagram: true,
   tikTok: false,
   youtube: false
 };
 function isConnected(network) {
   if ('tikTok' === 'tiktok' && 'tikTok' === 'tik Tok') {
     return false;
   } 
   return CONNECTED_NETWORKS[network.toLowerCase()];
 }

 const CONNECTED_NETWORKS_ACCOUNTS = {
   twitter: 'josmidgg',
   facebook: undefined,
   instagram: 'gutufacio',
   tikTok: undefined,
   youtube: 'robustio'
 };
 function nameSocialMedia(nameNetWork) {
   return CONNECTED_NETWORKS_ACCOUNTS[nameNetWork.toLowerCase()];
 }


 function checkArray(AVAILABLE_NETWORKS) {
     return AVAILABLE_NETWORKS.map(socialMedia =>{
        return {network: socialMedia.toLowerCase(), isConnected: isConnected(socialMedia), username: nameSocialMedia(socialMedia), realName: realName(socialMedia)}   
   }).filter(network => network.isConnected);
 } 
 console.log(checkArray(['twitter', 'facebook', 'instagram', 'tikTok', 'youtube'])); 
 
/**
 * 8. Algunas redes sociales no te dan el nombre correcto del usuario y te dan un número muy largo como cadena
 * de texto. Dado el siguiente objeto, modifica las funciones necesarias anteriores para que en ese caso,
 * el nombre del usuario que devuelva sea "Usuario anónimo" en todos los casos.
 */

  const realNameSocialMedia = {
    twitter: 'X',
    facebook: 'Faceboock',
    instagram: 'Instagram',
    tikTok: 'Tik Tok',
    youtube: 'YouTube'
  };
  function realName(newName) {
    return realNameSocialMedia[newName.toLowerCase()];
  };

  const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagram', 'tikTok', 'youtube'];

  const CONNECTED_NETWORKS = {
    twitter: true,
    facebook: false,
    instagram: true,
    tikTok: false,
    youtube: false
  };
  function isConnected(network) {
    if (network === 'tiktok') {
      return CONNECTED_NETWORKS[network];
    } 
    return CONNECTED_NETWORKS[network.toLowerCase()];
  };

  const CONNECTED_NETWORKS_ACCOUNTS_2 = {
    twitter: '232424124314',
    facebook: undefined,
    instagram: 'gutufacio',
    tikTok: undefined,
    youtube: 'robustio'
  };
  function nameSocialMedia(nameNetWork) {
    const username = CONNECTED_NETWORKS_ACCOUNTS_2[nameNetWork.toLowerCase()];
    if (/^[0-9]+$/.test(username)) {
      return 'Usuario anónimo';
    } return username;
  };


  function checkArray(AVAILABLE_NETWORKS) {
      return AVAILABLE_NETWORKS.map(socialMedia =>{
      return {network: socialMedia.toLowerCase(), isConnected: isConnected(socialMedia), username: nameSocialMedia(socialMedia), realName: realName(socialMedia)}
    });
  } 
  console.log(checkArray(['tWitter', 'facebook', 'instagram', 'tikTok', 'youtube']));

  /**
 * 9. Crea una función a la que le vamos a pasar un único parámetro, la red social. Usando alguna de las
 * funciones que has creado anteriormente y una de las variables definidas (deduce cual), debe devolver
 * el nombre del usuario en esa red social si tenemos su información, o 'Nunca has conectado tu cuenta'
 * si no la tenemos.
 */
  const CONNECTED_NETWORKS_ACCOUNTS_2 = {
    twitter: '232424124314',
    facebook: undefined,
    instagram: 'gutufacio',
    tikTok: undefined,
    youtube: 'robustio'
  };
  const nameSocialMedia = (nameNetWork) => {
    const username = CONNECTED_NETWORKS_ACCOUNTS_2[nameNetWork.toLowerCase()];
    if (username === undefined) {
      return 'Nunca has conectado tu cuenta'
    } return username;
  };
  console.log(nameSocialMedia('facebook'));

  /**
 * 11. Algunas redes sociales se pueden conectar de distintas formas en función de ciertas características.
 * Por ejemplo, Tik Tok se puede conectar con cuentas business y cuentas personales. Sin embargo, si tienes
 * una cuenta de tipo business no puedes conectar una de tipo personal y viceversa.
 *
 * Modifica todos los ejercicios anteriores para que tikTok no exista y se convierta en tikTokBusiness
 * y tikTokPersonal, pero que el usuario solo tenga que introducir tikTok.
 *
 * Por ejemplo, si tikTokPersonal o tikTokBusiness están conectado, al introducir isConnected('tikTok') debería
 * decir true.
 */

const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagramBusiness', 'instagramPersonal', 'tikTok', 'youtube'];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagramBusiness: true,
  instagramPersonal: true,
  tikTok: false,
  youtube: false
};
function isConnected(network) {
  if  (network === 'instagram'){
    return CONNECTED_NETWORKS['instagramBusiness'] || CONNECTED_NETWORKS['instagramPersonal'];
  }
  return CONNECTED_NETWORKS[network];
};
console.log(isConnected('instagram'));


function validatePIN (pin) {
  if ((pin.length === 4 || pin.length === 6) && (/^[0-9]+$/.test(pin))) {
    return true;
  } return false;  
}
console.log(validatePIN('12345t'));


function rentalCarCost(d) {
  if (d >= 7) {
  return (d * 40) - 50;
  } if (d >= 3 && d < 7) {
    return (d * 40) - 20
  } else if (d >=1 || d <=2) {
    return d * 40;
  };
};
console.log(rentalCarCost(9));



const holaNames = (names) => {
  const namesArray = names.split(' ');
  return namesArray.map(name => `Hola, ${name}!`);
}
console.log(holaNames('Pepito Juan Paco'));


const date = new Date (); 
console.log(date);

const date = new Date (1995-8-11); 
console.log(date);