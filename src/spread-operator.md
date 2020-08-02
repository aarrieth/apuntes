### EcmasScript 6
#### Capítulo 1: template literals, spread operators, desestructuración de objetos, let y const

### spread operators.
Permite expandir argumentos a una función, elementos para un array, propiedades y valores para objetos.

Aplicar los siguientes casos de usos.

##### Primero caso de uso: Array como argumentos de una función.
se tiene la función `suma()` con los argumentos `x y z `, esta función retornará la suma de estos.
```javascript
function suma(x, y, z) {
    return x + y + z;
}
```
Ahora, toca definir los valores de `x y z `. ¡vamos a ellos!

```javascript
const numeros = [1, 2, 3];
```
Que la magia surja a partir de la siguiente expresión.
```javascript
console.log(suma(...numeros)); 
```
Fácil, ¿verdad? ahora entendamos cómo funcionó esto. 
Al usar spread operator sobre el array `numeros`, este dejó de ser un **objeto iretable a ser elementos literales individuales de argumentos de función**, es decir; `numeros` ya no sería un array de 3 posiciones, si no 3 elementos individuales.  

##### Segundo caso de uso: Elementos para un array.
Se considera un caso muy práctico, ¿por qué? porque no tocaría definir elementos de un array literalmente (insertar elementos de forma manual) o  combinar operaciones como `push` `slice` `concat`. ¡vamos al código!
creamos el siguiente array.
```javascript
const familiaVargas = ['pedro', 'maría', 'juan', 'carlos', 'andrea'];
```
Sucede que es noche buena. La familia Vargas invitará a amigos y demás familiares para compartir. ¿qué toca hacer en este caso? **RTA** crear el array noche buena y vincular todos los miembros. 
```javascript
const nocheBuena = ['francisco', 'juana', 'humberto', 'camila', 'sebastián', 'marcela', 'claudia', ...familiaVargas];
```
Con la función `console.log()` podremos visualizar los valores.
```javascript
console.log(...nocheBuena);
```
¡Listo! de esta manera los miembros de la familia Vargas y demás están vínculados. 
Este sería el código final.
```javascript
const familiaVargas = ['pedro', 'maría', 'juan', 'carlos', 'andrea'];

const nocheBuena = ['francisco', 'juana', 'humberto', 'camila', 'sebastián', 'marcela', 'claudia', ...familiaVargas];

console.log(...nocheBuena);
```
Teniendo la practicidad de este tipo de funcionalidades para manipular elementos, también se pueden copiar y concatenar arrays.

# ¡RETO!
Llegaron a última hora familiares de Pedro y María (cabezas de hogar en la familia Vargas), vecinos y amigos de Juan. 
Tienes como reto asociar los familiares de Pedro y María al grupo familia Vargas sin alterar la estructura original de la cantidad de sus miembros de forma literal; también, vincular los amigos de Juan al grupo de noche Buena.
Además, hay muchos miembros en **nocheBuena**. Divirlo en 2 grupos, amigos y otros familiares.
En **nocheBuena** tienen que aparecer todos los miembros.

##### Tercer caso de uso: propiedades y valores para objetos.
En este caso, se permite realizar una copia de las propiedades enumerables que componen al objeto.

Creamos el objeto `automovil`
```javascript
const automovil = {
    marca: 'mazda',
    color:'negro',
    puertas:4,
    modelo:2018
};
```
Para copiar o clonar el objetvo `automovil` esta sería la sintaxís.
```javascript
const copiaAutomovil = { ...automovil };
```
De esta manera, `copiaAutomovil` tendrá las mismas propiedades y valores de `automovil`

El código resultante sería.
```javascript
const automovil = {
    marca: 'mazda',
    color: 'negro',
    puertas: 4,
    modelo: 2018
};

const copiaAutomovil = {...automovil };

console.log(copiaAutomovil);
```