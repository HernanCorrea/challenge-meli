# MELI - Challenge

## Overview

Este proyecto se enfocó en resolver 4 pilares principales, los cuales son; Usabilidad, SEO, Rendimiento y Escalabilidad. Para con cumplir con esto, decidí utilizar una tecnológia mono-repo llamada Nx, que me permite manejar multiples apps y librerías en un mismo repositorio. Decidí hacer este challenge dos veces, pero con diferentes tecnologías (Angular y React), ambos abordan diferentes conceptos.

#### Angular

Para angular estoy haciendo uso de Server side rendering (SSR) que permite mejorar el performance y SEO, ya que sin esto mi aplicación sería irrastreable para los robot de los navegadores. El SSR solo lo utilizo en el "First Content Pain" ya que luego el cliente se encarga de hacer las demas peticiones, también hago uso de "Services workers", que permitiran guardar en cache alguna información que sea poco mutable , existe otro cache para las peticiones que se hacen tanto en el servidor como el cliente, para que se pueda compartir la data en ambos lados, aunque este cache solo dura mientras la web esta corriendo, una vez se cierre o refresque la página el cache se eliminará.

Hago uso de Ngrx (Redux) para el manejo de estados, aunque es una aplicación sencilla la idea es que sea escalable, de esa forma también Ngrx se encarga de hacer toda la lógica del negocio y mis componentes unicamente se enfocan en pintar la data (que se saca del store) o disparar eventos (dispatch).

En el entorno de desarrollo tenemos los test unitarios con Jest con un coverage de más del 80% del código y los test end to end con cypress que me abarca todo las vistas de mi web.

La aplicación maneja los atributos Aria para que también sirva en lectores de pantalla, y permitiendo definir los controles del teclado.

### React

En react se enfocó más en lo funcional, esta es una "Single Page Application" donde podríamos ver diferencia en comparación de Angular. La aplicación también cuenta con un sistema de test (únicamente e2e), además cuenta con features cómo, mostrar un mensaje en la bandeja en caso de no encontrar el listado de items deseado, la opción de poder hacer zoom al producto al pasar por encima de la imagen y los atributos Aria. (Aunque no se requiere hacer dos aplicaciones decidí hacer esta por gusto).

## ✨Funcionalidades

- Listado de items
- Detalles del item
- Barra de busqueda de items
- Busqueda de items por el navegador
- Zoom al pasar por la imagen
- Listado de categorias
- Aria-atributes para lectores de pantalla
- Diseño responsive
- Animaciones
- Testing e2e
- Unit Testing
- SSR with PWA
- Caching Request

## Este proyecto fue realizado con las siguientes tecnologías:

- Express: ^4.15.2
- Angular: ~13.2.0
- React: 18.0.0
- TypeScript: ~4.5.2
- npm: 6.14.14
- Jest: 27.2.3
- Cypress: 9.1.0
- Nx (Monorepo): 13.9.6

## Instalación

Para ejecutar el proyecto en ambiente local o producción, deberás correr los siguientes comandos en la carpeta raiz.

```node
npm install
```

```javascript
// DEV mode
npm run prod:all
// Prod mode
npm run serve:all
```

```javascript
// TODO: ALL COMMANDS
api:dev
api:test
api:build
api:test
client:test
client:test
client:test
client:dev
client:build
client:serve
client:prerender
clientv2:test
clientv2:dev
clientv2:build
serve:all
client:serve-ssr
node dist/apps/api/main.js",
```

Si quieres contactarme puedes escribirme al correo hernancorrea104@gmail.com
