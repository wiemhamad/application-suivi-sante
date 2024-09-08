import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrl: './inscri.component.css'
})
export class InscriComponent {
  user = { name: '', email: '', password: '' };
  condition=false;

  constructor(private servUserService: LoginService, private router: Router) {}

  onSubmit() {
    this.servUserService.register(this.user).subscribe(
      response => {
        console.log('Inscription réussie!', response);
        this.router.navigate(['user/login']);  // Redirige vers la page de connexion après inscription
      },
      error => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }
}

