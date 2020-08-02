### EcmasScript 6
#### Capítulo 1: template literals, spread operators, desestructuración de objetos, let y const

### Template literals.

Son utilizadas para habilitar el uso de expresiones inscustradas en cadenas de texto.
Se denotan por el uso de comillas francesas o tílde invertida, así: ``` `string` ```

##### ¿Qué usos tiene?

En javascript, tiene diferentes comportamientos y propósitos. ¡veámoslo!

##### Multilínea.
Permite escribir multiples cadenas de texto en varias líneas de expresión conservando su formato.

```javascript
const frase = `Esta es una frase
que se será usada con
contenido multilínea.`;
```
Bien, para ver este código en acción, invocamos nuestra vieja amiga la función `console.log` para poder visualizar el valor de la variable `frase`.

```javascript
console.log(frase);
```
Esto sería el resultado en consola al ejecutar la función.

```javascript
Esta es una frase
que se será usada con
contenido multilínea.
```
##### Interpolación de expresiones.
Consiste en enviar argumentos a una función que permite concatenar ambas partes de una cadena de valores (strings y expresiones) formando una unica cadena. ¿eso cómo funciona?

Se definen e inicializan las siguientes variables: nombre, apellido, edad.
```javascript
const nombre = 'pedrito';
const apellido = 'perez';
const edad = 20;
```
Ahora de una manera muy sencilla, se implementa con la función `console.log` para crear la siguiente expresión y poder retornar su valor.
```javascript
console.log(`Hola... soy ${nombre} ${apellido} y tengo ${edad} años`);
```
Se mostrará en consola lo siguiente.

```javascript
Hola... soy pedrito perez y tengo 20 años
```
