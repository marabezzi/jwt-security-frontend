import { AuthServiceService } from './../auth-service.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.formBuilder.group({
    email: ['', [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(200)]],
    password: ['', [Validators.required]]
  });

  constructor(
   private authService: AuthServiceService,
   private formBuilder: NonNullableFormBuilder,
  ){}


  onLogin(){
    this.authService.login(this.form.value).subscribe(
      (response)=> {
        console.log(response);
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
