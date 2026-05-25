# Botezuma TikTok Miniapp

Miniapp básica para GitHub Pages y revisión de TikTok Developer.

## Archivos

- `index.html` — Página principal con botón Connect TikTok.
- `callback.html` — Página de retorno OAuth.
- `app.js` — Configuración básica de TikTok Login Kit.
- `styles.css` — Estilos.
- `terms.html` — Terms of Service.
- `privacy.html` — Privacy Policy.

## Configuración

Después de subir los archivos a GitHub Pages, edita `app.js`:

```js
CLIENT_KEY: "TU_CLIENT_KEY_DE_TIKTOK",
REDIRECT_URI: "https://TU_USUARIO.github.io/TU_REPO/callback.html",
```

En TikTok Developer usa:

```txt
Web/Desktop URL:
https://TU_USUARIO.github.io/TU_REPO/

Terms of Service URL:
https://TU_USUARIO.github.io/TU_REPO/terms.html

Privacy Policy URL:
https://TU_USUARIO.github.io/TU_REPO/privacy.html

Redirect URI:
https://TU_USUARIO.github.io/TU_REPO/callback.html
```

## Importante

Esta miniapp en GitHub Pages solo demuestra el Login Kit y el callback.
GitHub Pages no puede guardar el Client Secret ni cambiar el `code` por tokens de forma segura.
Para producción real se necesitará un backend seguro.
