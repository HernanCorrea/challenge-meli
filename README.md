# MELI - Challenge

## Overview

Este proyecto lo desarollé teniendo encuenta 4 pilares, usabilidad, SEO, rendimiento y escalabilidad. Para lograr esto, utilicé una tecnológia mono-repo llamada Nx, que permite manejar multiples apps y librerías en un mismo repositorio. Decidí hacer este challenge dos veces, pero con diferentes tecnologías (Angular y React), ambos abordan diferentes conceptos.

#### Angular

Para angular estoy haciendo uso de Server side rendering (SSR) que permite mejorar el performance, SEO, a fin de que sea rastreable por  los robot de los navegadores. El SSR solo lo utilizo en el "First Content Paint" ya que luego el cliente se encarga de hacer las demas peticiones, también hago uso de "Services workers", que permitiran guardar en cache alguna información que sea poco mutable. Existe otro cache para las peticiones que se hacen tanto en el servidor como el cliente, para que se pueda compartir la data en ambos lados, aunque este cache solo dura mientras la web esta corriendo, una vez se cierre o refresque la página el cache se eliminará.

Hago uso de Ngrx (Redux) para el manejo de estados, aunque es una aplicación sencilla la idea es que sea escalable, de esa forma también Ngrx se encarga de hacer toda la lógica del negocio y mis componentes unicamente se enfocan en pintar la data (que se saca del store) o disparar eventos (dispatch).

En el entorno de desarrollo tenemos los test unitarios con Jest con un coverage de más del 80% del código y los test end to end con cypress que prueban todas las vistas de mi web.

La aplicación maneja los atributos Aria para que también sirva en lectores de pantalla y controles del teclado.

### React

En react lo enfoqué más en lo funcional. Esta es una "Single Page Application" donde podríamos ver diferencia en comparación de Angular. La aplicación también cuenta con un sistema de test (únicamente e2e), además cuenta con features como: mostrar un mensaje en la bandeja en caso de no encontrar el listado de items deseado, la opción de poder hacer zoom al producto al pasar por encima de la imagen y los atributos Aria.

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
// Prod mode
npm run build:all // Test and build for production
npm run api:serve // Express App

npm run client:serve-ssr // Angular App
npm run clientv2:dev // React App
```
```javascript
// Local mode for development
npm run api:dev // Express App

npm run client:dev-ssr // Angular App
npm run clientv2:dev // React App
```

Si quieres contactarme puedes escribirme al correo hernancorrea104@gmail.com
