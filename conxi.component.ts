import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
@Component({
  selector: 'app-conxi',
  templateUrl: './conxi.component.html',
  styleUrl: './conxi.component.css'
})

export class ConxiComponent  {

  errorMessage: string = '';
  users = { userName: '', password: '' };  // Typage des objets utilisateurs
  condition = true;

  constructor(private router: Router, private authService: LoginService) {}

  onSubmit(): void {
    this.authService.login(this.users).subscribe({
      next: () => {
        // Rediriger vers la page de profil si la connexion réussit
        this.router.navigate(['user/profil']);
      },
      error: (err) => {
        // Gérer les erreurs de connexion
        this.errorMessage = 'Username ou mot de passe incorrect';
        console.error(err);
      }
    });
  }
}

