import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string, password:string):boolean{
    if(username=="admin"&& password=="admin"){
      localStorage.setItem("token","12345");
      return true;
    }
    return false;
  }

  isLoggedIn(){
     return localStorage.getItem("token") !==null;
    //return !!localStorage.getItem("token"); //same
  }

  logout(){
    localStorage.removeItem("token");
  }
}
