import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerifGuard implements CanActivate {
  constructor(private serv:AuthService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    if(this.serv.islogged()==true){
      return true;
    }
    else {

      alert(" please login or register to continue")

this.router.navigate([''])
return false

    }
  }
  
}
