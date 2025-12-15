# CSS Flexbox

## Propiedades del Contenedor (Padre)

* **display: flex**: Activa el modelo Flexbox.
* **flex-direction**: Define la dirección de los elementos (row, column).
* **justify-content**: Alinea elementos en el eje principal (start, center, space-between).
* **align-items**: Alinea elementos en el eje transversal (stretch, center, flex-start).
* **flex-wrap**: Controla si los elementos saltan a la siguiente línea.

## Propiedades de los Elementos (Hijos)

* **flex-grow**: Define cuánto crece un elemento respecto a los demás.
* **flex-shrink**: Define cuánto se encoge un elemento si falta espacio.
* **flex-basis**: Establece el tamaño inicial del elemento antes de distribuir espacio.

## Cómo Maquetar

1.  Aplica `display: flex` al contenedor padre.
2.  Usa `flex-direction` para elegir fila o columna.
3.  Usa `justify-content` y `align-items` para posicionar el contenido.
4.  Usa `flex-wrap` si los elementos deben fluir en varias líneas.