import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth-service.service';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true,
  imports:[CommonModule, FormsModule]
  

})
export class LoginComponent {
  email: string='';
  password: string='';
  hidePassword:boolean=true;

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(form: any) {
    if (this.authService.login(form.value.email, form.value.password)) {
      alert('Login successful!');
      this.router.navigate(['search']);
    } 
    else {
      alert('Invalid credentials. Please try again.');
    }
  }


  navigateToUrl(event:any,url:string){
    event.preventDefault()
    this.router.navigateByUrl(url)
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  }

  

