tarea 22

/* Paso 1:
En vez de crear robots manualmente, vamos a crear una
fábrica que los genere automáticamente.

Creamos una función llamada createRobot, que recibe dos
parámetros: modelo y esMovil.

Devuelve un objeto que contiene:
- una propiedad modelo con el valor recibido.
- una propiedad movil con el valor recibido.
- un método emitirSonido que imprime 'Beep Boop' en consola.
*/

const createRobot = (modelo, esMovil) => {
  const robot = {
    modeloAsignado: modelo,
    movilidad: esMovil,
    emitirSonido: () => {
      console.log('Beep Boop');
    }
  };
  return robot;
};


/* Paso 2:
Usamos la función de fábrica para crear una instancia
del robot. Llamamos a la variable contenedora 'boteLata'.
Le pasamos como valores: 'P-500' y true.
*/

const boteLata = createRobot('P-500', true);


/* Paso 3:
Verificamos qué puede hacer nuestro robot.

Llamamos al método emitirSonido para probar el sonido.
Debería mostrarse "Beep Boop" en consola.
*/

boteLata.emitirSonido();
