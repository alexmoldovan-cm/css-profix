import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class PortfolioComponent {
  projects = [
    {
      id: 1,
      title: 'O nouă lucrare finalizată cu succes!',
      description: 'Demontarea a 33 de poziții de birouri, relocarea lor la un alt etaj și reinstalarea completă a acestora.',
      image: 'assets/images/work1.jpg',
      imageGallery: [
        'assets/images/work1-detail1.jpg',
        'assets/images/work1-detail2.jpg',
        'assets/images/work1-detail3.jpg'
      ]
    },
    {
      id: 2,
      title: 'Fotovoltaice',
      description: 'O lucrare executată corect, un client mulțumit!',
      image: 'assets/images/work2.jpg',
      imageGallery: [
        'assets/images/work2-detail1.jpg',
        'assets/images/work2-detail2.jpg',
        'assets/images/work2-detail3.jpg'
      ]
    },
    {
      id: 3,
      title: 'Restaurare Clădire Istorică',
      description: 'Restaurare minuțioasă a unei clădiri istorice, păstrând elementele arhitecturale originale și adăugând facilități moderne.',
      image: 'assets/images/work3.jpg',
      imageGallery: [
        'assets/images/work3-detail1.jpg',
        'assets/images/work3-detail2.jpg',
        'assets/images/work3-detail3.jpg'
      ]
    },
    {
      id: 4,
      title: 'Amenajare Spațiu Comercial',
      description: 'Transformarea unui spațiu comercial în concept modern, cu accent pe eficiență energetică și design contemporan.',
      image: 'assets/images/work4.jpg',
      imageGallery: [
        'assets/images/work4-detail1.jpg',
        'assets/images/work4-detail2.jpg',
        'assets/images/work4-detail3.jpg'
      ]
    },
    {
      id: 5,
      title: 'Reconversie Loft',
      description: 'Conversie creativă a unui spațiu industrial în locuință modernă, păstrând elementele industriale autentice.',
      image: 'assets/images/work5.jpg',
      imageGallery: [
        'assets/images/work5-detail1.jpg',
        'assets/images/work5-detail2.jpg',
        'assets/images/work5-detail3.jpg'
      ]
    },
    {
      id: 6,
      title: 'Proiect Rezidențial de Lux',
      description: 'Implementare sistem smart home și finisaje premium într-o locuință de lux, cu accent pe confort și tehnologie.',
      image: 'assets/images/work6.jpg',
      imageGallery: [
        'assets/images/work6-detail1.jpg',
        'assets/images/work6-detail2.jpg',
        'assets/images/work6-detail3.jpg'
      ]
    }
  ];
}

