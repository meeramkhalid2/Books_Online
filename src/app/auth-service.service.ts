import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;

  login(email: string, password: string): boolean {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (email === userData.email && password === userData.password) {
        this.isLogged = true;
        return this.isLogged;
      }
    }
    return false;
  }

  logout(): void {
    const storedUserData = localStorage.getItem('userData');
    this.isLogged = false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userData');
  }
  
}
