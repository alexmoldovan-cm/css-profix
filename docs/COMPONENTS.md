# Documentación de Componentes

## Estructura de Componentes

### 1. Home Component

#### Template (home.html)
```html
<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="glowing-text">Bine ați venit la compania noastră</h1>
    <p class="animated-text">Soluții inovatoare pentru afacerea ta</p>
    <a routerLink="/contact" class="btn-futuristic">Contact</a>
  </div>
</section>

<section class="features">
  <!-- Feature cards -->
</section>
```

#### TypeScript (home.component.ts)
```typescript
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  features = [
    {
      icon: 'tools',
      title: 'Experiență Profesională',
      description: '...'
    },
    // ...
  ];
}
```

### 2. Portfolio Component

#### Template (portfolio.html)
```html
<div class="portfolio-container">
  <h2 class="section-title">Portofoliu</h2>
  
  <div class="projects-grid">
    @for (project of projects; track project.title) {
      <div class="project-card" tabindex="0">
        <div class="project-image">
          <img [src]="project.image" [alt]="project.title">
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    }
  </div>
</div>
```

#### TypeScript (portfolio.component.ts)
```typescript
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Renovare Completa',
      description: '...',
      image: '/assets/images/work1.jpg'
    },
    // ...
  ];
}
```

### 3. About Component

#### Template (about.html)
```html
<div class="about-container">
  <h2 class="section-title">Despre Noi</h2>

  <div class="mission-vision">
    <div class="mission-vision-card">
      <h3>Misiunea Noastră</h3>
      <p>{{ mission }}</p>
    </div>
    <div class="mission-vision-card">
      <h3>Viziunea Noastră</h3>
      <p>{{ vision }}</p>
    </div>
  </div>

  <div class="team-section">
    <h2 class="section-title">Echipa Noastră</h2>
    <div class="team-grid">
      <!-- Team members -->
    </div>
  </div>
</div>
```

#### TypeScript (about.component.ts)
```typescript
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  mission = '...';
  vision = '...';
  team = [
    {
      name: 'Andrei Popescu',
      position: 'Director General',
      description: '...',
      image: 'assets/images/team1.jpg'
    },
    // ...
  ];
}
```

### 4. Shared Components

#### Navbar
```typescript
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  // Implementación
}
```

#### Footer
```typescript
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
```

## Interacciones y Características

### 1. Navegación
- Uso de `RouterModule` para navegación entre componentes
- Links activos resaltados
- Transiciones suaves

### 2. Imágenes
- Lazy loading de imágenes
- Optimización de resolución
- Efectos de hover y zoom

### 3. Animaciones
- Entrada suave de elementos
- Efectos hover en tarjetas
- Transiciones de estado

### 4. Responsividad
- Diseño mobile-first
- Breakpoints adaptados
- Layouts flexibles

## Estructura de Archivos
```
components/
├── home/
│   ├── home.html
│   ├── home.css
│   └── home.component.ts
├── portfolio/
│   ├── portfolio.html
│   ├── portfolio.css
│   └── portfolio.component.ts
├── about/
│   ├── about.html
│   ├── about.css
│   └── about.component.ts
└── shared/
    ├── navbar/
    └── footer/
```

## Prácticas de Desarrollo

### 1. Componentes Standalone
- Importaciones explícitas
- Mejor tree-shaking
- Módulos independientes

### 2. Tipado Fuerte
- Interfaces para modelos de datos
- Tipos explícitos
- Mejor mantenibilidad

### 3. Optimización
- Lazy loading de módulos
- Optimización de assets
- Minificación de código