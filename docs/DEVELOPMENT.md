# Guía de Desarrollo

## Configuración del Proyecto

### 1. Requisitos Previos
- Node.js (versión 16 o superior)
- Angular CLI (versión 17)
- Git

### 2. Instalación
```bash
# Clonar el repositorio
git clone https://github.com/alexmoldovan-cm/css-profix.git

# Navegar al directorio
cd css-profix

# Instalar dependencias
npm install
```

### 3. Estructura del Proyecto
```
css-profix/
├── src/
│   ├── app/
│   │   ├── components/
│   │   └── app.routes.ts
│   ├── assets/
│   │   └── images/
│   └── styles.css
├── docs/
│   ├── STYLES.md
│   ├── COMPONENTS.md
│   └── DEVELOPMENT.md
├── angular.json
├── package.json
└── README.md
```

## Configuración de Assets

### 1. Imágenes
En `angular.json`:
```json
"assets": [
    "src/favicon.ico",
    "src/assets",
    {
        "glob": "**/*",
        "input": "public"
    }
]
```

### 2. Estilos Globales
En `styles.css`:
```css
:root {
  --color-olive: #556B2F;
  --color-olive-light: #668B3F;
  --color-yellow: #FFD700;
  --color-gray: #D3D3D3;
  --max-width: 1200px;
}
```

## Guías de Desarrollo

### 1. Componentes
- Usar componentes standalone
- Mantener la lógica simple y directa
- Documentar funcionalidades complejas

### 2. Estilos
- Seguir la guía de estilos en STYLES.md
- Mantener consistencia en nombres de clases
- Usar variables CSS para valores repetidos

### 3. Performance
- Optimizar imágenes antes de incluirlas
- Implementar lazy loading donde sea posible
- Minimizar el uso de librerías externas

### 4. Testing
```bash
# Ejecutar tests unitarios
ng test

# Ejecutar tests e2e
ng e2e
```

## Directrices de Código

### 1. TypeScript
- Usar tipos explícitos
- Evitar el tipo `any`
- Documentar funciones complejas

### 2. HTML
- Mantener el markup semántico
- Usar atributos ARIA cuando sea necesario
- Mantener la accesibilidad

### 3. CSS
- Seguir metodología BEM
- Mantener especificidad baja
- Usar propiedades modernas con fallbacks

## Flujo de Trabajo Git

### 1. Branches
- `main`: Producción
- `develop`: Desarrollo
- `feature/*`: Nuevas características
- `fix/*`: Correcciones

### 2. Commits
```bash
# Formato
tipo(scope): descripción

# Ejemplos
feat(portfolio): añadir filtrado de proyectos
fix(navbar): corregir responsive en móvil
```

## Despliegue

### 1. Producción
```bash
# Build de producción
ng build --configuration production

# Los archivos se generan en /dist
```

### 2. Servidor de Desarrollo
```bash
# Iniciar servidor local
ng serve

# Acceder a http://localhost:4200
```

## Mantenimiento

### 1. Actualizaciones
- Mantener Angular actualizado
- Revisar dependencias regularmente
- Actualizar assets cuando sea necesario

### 2. Backups
- Mantener copias de seguridad de assets
- Documentar cambios importantes
- Versionar correctamente

## Recursos

### 1. Documentación
- [Angular Docs](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Tricks](https://css-tricks.com)

### 2. Herramientas
- VS Code con extensiones recomendadas
- Chrome DevTools
- Angular DevTools

## Contacto
Para dudas o sugerencias:
- Email: contact@css-profix.com
- GitHub: @alexmoldovan-cm