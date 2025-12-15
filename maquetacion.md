# Maquetación en grid

Sistema multidimensional

Sirve para maquetar como una tabla

## Uso del grid

1. Definimos un contenedor principal para establecer la estructura de la web
2. Definimos los items de la tabla

### Ejemplo del contenedor principal

```css
.container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    grid gap: 10px;
    border: 1px solid black;

    width: 100%;
    height: 99vh;

}
```

Mi `HTML` **seria** <u>el</u> *siguiente*

```html
<div class="container">
    <header> Header </header>
    <main> Main </main>
    <footer> Footer </footer>
</div>
```

## Maquetación del grid por areas

```css
.container {
    display: grid;
    grid-template-areas: "header header header" 
    "aside main main"
     "footer footer footer";

    grid gap: 10px;
    border: 1px solid black;

    width: 100%;
    height: 99vh;

}

.container > header {
    grid-area: header;
}

.container > aside {
    grid-area: aside;
}

.container > main {
    grid-area: main;
}

.container > footer {
    grid-area: footer;
}
```

En los elementos de la tabla definimos el nombre en concreto con la propiedad `grid-area: nombre`

```css
.container > header {
    grid-area: header;
    border: 1px solid black;
}

.container > main {
    grid-area: main;
    border: 1px solid black;
}

.container > aside {
    grid-area: aside;   
    border: 1px solid black;
}

.container > footer {
    grid-area: footer;
    border: 1px solid black;
}
```
