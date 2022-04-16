# MELI - Challenge

## Overview
Este proyecto se enfocó en resolver 4 nichos principales, Usabilidad, SEO, Rendimiento y Escalabilidad, para poder llegar a esto, decidí utilizar una tecnológia mono-repo llamada Nx, que me permite manejar multiples apps y librerías en un mismo repositorio. Decidí hacer este challenge dos veces, pero con diferentes tecnologías (Angular y React), aunque para esta presentación preferiría irme por Angular porque esta cumple con todo lo requerido.

Para angular estoy haciendo uso de Server side rendering (SSR) que me permite mejorar el performance y SEO, ya que sin esto mi aplicación sería irrastreable para los robot de los navegadores. El SSR solo trabaja en el "First Content Pain" ya que luego es el cliente que se encarga de hacer las demas peticiones aunque esto puede bajar mi rendimiento hago uso de "Progresive Web App" para hacer uso también de los "Services workers", las peticiones que hacen tanto por el lado de servidor como del client en mi FrontEnd se cachean para que se pueda compartir esta información en ambos lados, aunque este cache solo dura mientras la web esta corriendo una vez cerrada el cache se borra y todo vuelve a empezar de nuevo.

Hago uso de Ngrx (Redux) para el manejo de estados, aunque es una aplicación sencilla la idea es que sea escalable, de esa forma también Ngrx se encarga de hacer toda la lógica del negocio y mis componentes unicamente se enfocan en pintar la data (que se saca del store) o disparar eventos (dispatch).

Para la parte de testing, decidí utilizar las librerías Jest y Jasmin y para el e2e utilizo cypress.
## ✨Funcionalidades
- Listado de items
- Detalles del item
- Barra de busqueda de items
- Busqueda de items por el navegador
- Zoom al pasar el mouse por la imagen
- Listado de categorias
- Aria-atributes para lectores de pantalla
- Diseño responsive
- Animaciones
- Testing e2e
- Unit Testing
- SSR with PWA
- Caching Request



## Este proyecto fue realizado con las siguientes tecnologías:
* Express: 12.3
* Angular: 12.3
* React: 12.3
* npm: 12.3
* Nx (Monorepo): 12.3

## Instalación
MeliChallenge esta usando un mono-repo para el manejo de multiples paquetes. Para ejecutar el proyecto en ambiente local o producción, deberás correr los siguientes comando en la carpeta raiz.

```node
npm install
```
```javascript
// DEV mode
npm run serve:all
// Prod mode
npm run prod:all
```
```javascript
// E2E Test
npm run test:api
// Client 1
npm run test:client
// Client 2 
npm run test:client
```

Please make sure to update tests as appropriate.
