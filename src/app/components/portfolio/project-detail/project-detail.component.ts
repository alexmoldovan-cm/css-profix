import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  features: string[];
  completionDate: string;
  client: string;
  location: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectDetail | undefined;
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    // En un caso real, esto vendría de un servicio
    this.project = this.getProjectDetails(projectId);
  }

  // Simulando datos - En un caso real, esto vendría de un servicio
  private getProjectDetails(projectId: string | null): ProjectDetail {
    const projects: Record<string, ProjectDetail> = {
      '1': {
        id: '1',
        title: 'O nouă lucrare finalizată cu succes!',
        description: 'Demontarea a 33 de poziții de birouri, relocarea lor la un alt etaj și reinstalarea completă a acestora.',
        fullDescription: 'Recent am avut parte de o provocare interesantă: demontarea a 33 de poziții de birouri, relocarea lor la un alt etaj și reinstalarea completă a acestora. Totul a fost urmat de montarea unei bucătării noi, pentru ca spațiul să fie complet funcțional și pregătit de lucru. Ne bucurăm că am reușit să oferim clientului un rezultat curat, organizat și eficient — exact așa cum trebuie să fie un spațiu de birouri modern. Mulțumim echipei pentru seriozitate și implicare, iar clientului pentru încredere!',
        images: [
          'assets/images/work1.jpg',
          'assets/images/work1-detail1.jpg',
          'assets/images/work1-detail2.jpg',
          'assets/images/work1-detail3.jpg'
        ],
        features: [
          'Demontarea a 33 de poziții de birouri',
          'Relocarea lor la un alt etaj',
          'Reinstalarea completă a acestora',
        ],
        completionDate: '2025',
        client: '-',
        location: 'Cluj, România'
      },
      '2': {
        id: '2',
        title: 'Fotovoltaice',
        description: 'O lucrare executată corect, un client mulțumit!',
        fullDescription: 'Echipa noastră a finalizat recent instalarea a 14 panouri fotovoltaice, împreună cu cablarea completă, montarea invertorului și racordarea la rețeaua electrică. Energie curată, eficiență și profesionalism – asta livrăm de fiecare dată!',
        images: [
          'assets/images/work2.jpg',
          'assets/images/work2-detail1.jpg',
          'assets/images/work2-detail2.jpg',
          'assets/images/work2-detail3.jpg'
        ],
        features: [
          'Instalare sistem fotovoltaic complet',
          'Conexiuni și verificări complete',
          'Optimizare pentru eficiență maximă'
        ],
        completionDate: '2025',
        client: 'Client Rezidențial',
        location: 'Cluj, România'
      },
      '3': {
        id: '3',
        title: 'Restaurare Clădire Istorică',
        description: 'Restaurare minuțioasă a unei clădiri istorice, păstrând elementele arhitecturale originale.',
        fullDescription: 'Am avut privilegiul de a restaura o clădire istorică importantă, păstrând cu atenție toate elementele arhitecturale originale în timp ce am integrat facilități moderne necesare. Procesul a necesitat o atenție deosebită la detalii și utilizarea tehnicilor tradiționale de restaurare.',
        images: [
          'assets/images/work3.jpg',
          'assets/images/work3-detail1.jpg',
          'assets/images/work3-detail2.jpg',
          'assets/images/work3-detail3.jpg'
        ],
        features: [
          'Restaurare elemente arhitecturale originale',
          'Integrare facilități moderne',
          'Păstrarea autenticității clădirii'
        ],
        completionDate: '2024',
        client: 'Primăria Cluj',
        location: 'Cluj-Napoca, România'
      }
    };

    return projects[projectId || '1'] || projects['1'];
  }
  

  nextImage() {
    if (this.project && this.currentImageIndex < this.project.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  selectImage(index: number) {
    this.currentImageIndex = index;
  }
}