import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from '@angular/http'
import { Router } from '@angular/router';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt'
import 'rxjs/add/operator/map' ;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
tab=[]
user
  constructor(private http:Http,private router:Router) { }

  register(user){

    return this.http.post("http://localhost:3000/user/newUser",user).map(res=>{
      return res.json()
    })
  }
  
  login(user){

    return this.http.post("http://localhost:3000/user/auth",user).map(res=>{
      return res.json()
    })
  }

  islogged(){
  
    let token=localStorage.getItem('x-token');
    console.log(tokenNotExpired(token))
    if(!token)
    return false;
    
    let jwtHelper=new JwtHelper();
    let expirationdate=jwtHelper.getTokenExpirationDate(token);
    let isExpiredToken=jwtHelper.isTokenExpired(token)
       console.log("date"+ expirationdate);
       console.log("isexpired"+ isExpiredToken);
       return !isExpiredToken;
  }
  logOut(){
    localStorage.removeItem('x-token');
    this.router.navigate(['']);
  }

}
