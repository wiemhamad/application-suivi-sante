import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8081/auth';

  constructor(private http: HttpClient) {}

  // Méthode de connexion
  login(users: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, users, { responseType: 'text' })
      .pipe(
        tap(response => {
          // Stocker le token JWT dans le local storage
          localStorage.setItem('token', response);
        })
      );
  }
  

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Méthode pour récupérer le token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('token');
  }

  //méthode pour l'inscri
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, user);
  }

}


