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
      name: 'Gabor Szabolocs',
      phone: '+40 746 628 779',
      email: 'cssprofix@gmail.com'
    },
    {
      name: 'Pop Sabin',
      phone: '+40 725 810 750',
      email: 'cssprofix@gmail.com'
    },
    {
      name: 'Szell Csongor',
      phone: '+40 755 410 422',
      email: 'cssprofix@gmail.com'
    }
  ];

  facebookUrl = 'https://www.facebook.com/profile.php?id=61578599355216';
}
