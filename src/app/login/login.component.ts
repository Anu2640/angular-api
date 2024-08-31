import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private _loginService:LoginServiceService,private _router:Router) {}

  login(){
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=> {
        console.log(data)
        alert("Login Success")
        // store the token
        sessionStorage.setItem("token",data.token)
        // go to dashboard
        this._router.navigateByUrl("/dashboard")
      },
      (err:any) => {
        alert("invalid credentials")
      }
    )
  }
}
