import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  partners = [
    {
      name: 'Alexandru Popescu',
      phone: '+40 123 456 789',
      email: 'alexandru@css-profix.com'
    },
    {
      name: 'Maria Ionescu',
      phone: '+40 987 654 321',
      email: 'ana@css-profix.com'
    },
    {
      name: 'Ion Dumitrescu',
      phone: '+40 456 789 123',
      email: 'ion@css-profix.com'
    }
  ];

  facebookUrl = 'https://facebook.com/css-profix';
}
