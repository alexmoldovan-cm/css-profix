# Documentación de Estilos CSS

## Diseño Global y Variables

### Paleta de Colores
```css
:root {
  --color-olive: #556B2F;
  --color-olive-light: #668B3F;
  --color-yellow: #FFD700;
  --color-gray: #D3D3D3;
  --max-width: 1200px;
}
```

## Componentes Principales

### 1. Navbar
```css
nav {
  background: linear-gradient(to bottom, #668B3F, #556B2F);
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}
```
**Características:**
- Gradiente vertical para profundidad visual
- Sombra suave para elevación
- Posición fija para acceso constante

### 2. Hero Section
```css
.hero {
  background-image: url('/assets/images/hero-bg.jpg');
  background-size: cover;
  min-height: 80vh;
}

.hero-overlay {
  background: linear-gradient(135deg, rgba(85,107,47,0.7), rgba(102,139,63,0.6));
}

.glowing-text {
  animation: glow 2s infinite alternate;
}
```
**Características:**
- Imagen de fondo a pantalla completa
- Overlay con gradiente diagonal
- Texto con efecto de brillo
- Animaciones de entrada suaves

### 3. Portfolio
```css
.project-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(85,107,47,0.1);
  transition: all 0.5s ease;
}

.project-image img {
  transition: transform 0.7s ease;
}

.project-card:hover {
  transform: translateY(-15px);
  border-color: rgba(255,215,0,0.3);
}
```
**Características:**
- Efecto glassmorphism en tarjetas
- Animación de elevación al hover
- Zoom suave en imágenes
- Bordes con brillo dorado

### 4. About
```css
.mission-vision-card {
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(10px);
}

.team-member {
  transition: transform 0.3s ease;
}
```
**Características:**
- Tarjetas con efecto de cristal
- Transiciones suaves
- Layout responsive

### 5. Footer
```css
footer {
  background: linear-gradient(to top, #668B3F, #556B2F);
  box-shadow: 0 -4px 6px rgba(0,0,0,0.2);
}
```
**Características:**
- Gradiente invertido al navbar
- Sombra superior sutil
- Contenido centrado

## Técnicas CSS Utilizadas

### 1. Flexbox
Utilizado para:
- Alineación de elementos en navbar
- Centrado de contenido
- Layouts responsive

### 2. CSS Grid
Utilizado para:
- Grid de proyectos en portfolio
- Grid de equipo en about
- Layouts responsivos complejos

### 3. Animaciones
```css
@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(255,215,0,0.5);
  }
  to {
    text-shadow: 0 0 20px rgba(255,215,0,0.8);
  }
}
```

### 4. Pseudo-elementos
Utilizados para:
- Decoraciones en títulos
- Efectos hover
- Overlays

### 5. Media Queries
```css
@media (max-width: 768px) {
  /* Ajustes responsive */
}
```
Breakpoints principales:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1400px

## Buenas Prácticas Implementadas

1. **Nomenclatura BEM**
   - Block: `.card`
   - Element: `.card__title`
   - Modifier: `.card--featured`

2. **Organización de CSS**
   - Propiedades agrupadas por tipo
   - Comentarios descriptivos
   - Variables CSS reutilizables

3. **Optimización**
   - Uso de transform para animaciones
   - Propiedades que no causan reflow
   - Transiciones optimizadas

4. **Accesibilidad**
   - Contraste adecuado
   - Estados focus visibles
   - Tamaños de texto legibles