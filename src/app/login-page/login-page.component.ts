import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../_services/auth-login.service';
import { Users } from '../_models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

    user = {};

    constructor(
      private authService: AuthLoginService,
      private router: Router
    ) { }

    signIn(loginForm: NgForm){
      this.authService.signInUser(loginForm.value).subscribe((res: any) =>{
        localStorage.setItem('token', res.token);
          if(!res.success == true){
            console.log("No puedes estar aqui apa");            
          } else{
            console.log("Hola pa");            
          }        
        })
      }   
}
