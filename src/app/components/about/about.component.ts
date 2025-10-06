import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  mission = 'Misiunea noastră este de a oferi servicii de construcții și renovare de cea mai înaltă calitate, depășind așteptările clienților noștri prin excelență în muncă și atenție la detalii.';
  
  vision = 'Să fim recunoscuți ca lideri în sectorul construcțiilor și renovărilor, remarcându-ne prin inovație, calitate și angajamentul față de satisfacția clientului.';

  team = [
    {
      name: 'Andrei Popescu',
      position: 'Director General',
      description: 'Peste 15 ani de experiență în sectorul construcțiilor.',
      image: 'assets/images/team1.jpg'
    },
    {
      name: 'Elena Ionescu',
      position: 'Director de Proiecte',
      description: 'Specialistă în managementul și coordonarea proiectelor de mare anvergură.',
      image: 'assets/images/team2.jpg'
    },
    {
      name: 'Mihai Constantinescu',
      position: 'Director Tehnic',
      description: 'Expert în inovație și noi tehnologii în construcții.',
      image: 'assets/images/team3.jpg'
    }
  ];
}
