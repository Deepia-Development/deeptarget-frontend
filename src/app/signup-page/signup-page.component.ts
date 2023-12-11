import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthLoginService } from '../_services/auth-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  constructor(
    private authService: AuthLoginService
  ){}

  createAccount(newAccount: NgForm){
    this.authService.signUpUser(newAccount.value).subscribe((res: any) =>{
      if(res.success == true){
        Swal.fire({
          toast: true,
          icon: 'success',
          title: res.message,
          animation: true,
          position: 'top',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })     
      }else{
        Swal.fire({
          toast: true,
          icon: 'error',
          title: res.message,
          animation: true,
          position: 'top',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })      
      }
    })
  }
}
