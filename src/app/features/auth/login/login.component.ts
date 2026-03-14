import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,
    private auth:AuthService,
    private router:Router
  ){}
  loginForm= this.fb.group({
    userName:['',Validators.required],
    password:['',Validators.required]
  });
login(){
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return;
  }
  const {userName ,password} =this.loginForm.value;
  if(userName && password && this.auth.login(userName,password)){
    this.router.navigate(['/dashboard']);
  }else{
    alert('Invalid login');
  }
}
}
