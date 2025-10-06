import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Renovare Completa',
      description: 'Transformăm complet o casă unifamilială în visul modern al clientului nostru. Proiectul include renovarea tuturor camerelor, băilor și bucătăriei.',
      image: 'assets/images/work1.jpg'
    },
    {
      title: 'Design Interior Modern',
      description: 'Un apartament transformat într-un spațiu contemporan cu accent pe funcționalitate și estetică. Materiale premium și iluminat inteligent.',
      image: 'assets/images/work2.jpg'
    },
    {
      title: 'Restaurare Clădire Istorică',
      description: 'Restaurare minuțioasă a unei clădiri istorice, păstrând elementele arhitecturale originale și adăugând facilități moderne.',
      image: 'assets/images/work3.jpg'
    },
    {
      title: 'Amenajare Spațiu Comercial',
      description: 'Transformarea unui spațiu comercial în concept modern, cu accent pe eficiență energetică și design contemporan.',
      image: 'assets/images/work4.jpg'
    },
    {
      title: 'Reconversie Loft',
      description: 'Conversie creativă a unui spațiu industrial în locuință modernă, păstrând elementele industriale autentice.',
      image: 'assets/images/work5.jpg'
    },
    {
      title: 'Proiect Rezidențial de Lux',
      description: 'Implementare sistem smart home și finisaje premium într-o locuință de lux, cu accent pe confort și tehnologie.',
      image: 'assets/images/work6.jpg'
    }
  ];
}

