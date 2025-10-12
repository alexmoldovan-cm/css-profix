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
  
  bannerImage = 'assets/images/about-banner.jpg';
}
