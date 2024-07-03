import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone:true,
  imports:[CommonModule,FormsModule]

})
export class RegisterComponent {
  name: string='';
  email: string='';
  password: string='';
  hidePassword:boolean=true;
  
  constructor(private route: Router) {}

  onSubmit(form: any) {
      alert('you have registered');
    // Store the form data in local storage, make an obj
    const userData = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    };

    localStorage.setItem('userData', JSON.stringify(userData)); //json to convert obj to string because setitem takes string 
    this.route.navigateByUrl('login');

  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
//Before you save the array in the localStorage, you need to convert it to a string since it can only store strings. (stringify)

//When you retrieve the array from the localStorage, you will get a string, 
//so you need to convert it to an array if you want to manipulate it.(parse)
