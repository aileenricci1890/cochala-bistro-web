# Cochala Bistro

Sitio de pedidos en React 19 y Vite 8. La interfaz es una SPA de una página: el catálogo y sus secciones se mantienen montados mientras las rutas cliente (`/menu`, `/sabores`, `/promociones`, `/nosotros`, `/cochabamba`, `/ubicaciones`) actualizan la URL y desplazan a la sección correspondiente. El carrito se guarda en `localStorage`; el checkout abre WhatsApp.

## Desarrollo

Requiere Node.js compatible con Vite 8.

```sh
npm install
npm run dev
```

## Verificación y compilación

```sh
npm run lint
npm run build
npm run preview
```

No hay un script de pruebas configurado.

## Despliegue

El workflow de GitHub Actions publica automáticamente en GitHub Pages al subir cambios a `master`. El sitio se sirve desde `/cochala-bistro-web/`; el workflow crea `404.html` para que Pages cargue la SPA en URLs internas directas. Para probar localmente, ejecuta `npm run build` y `npm run preview`.
