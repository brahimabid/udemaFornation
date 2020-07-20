import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formLogin:FormGroup
@Output() user=new EventEmitter()
  message=""
  submitted: boolean;
  constructor(private fb:FormBuilder,private serv:AuthService) { 
    this.formLogin=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],

    })
  }

  ngOnInit() {
  }
get f(){return this.formLogin.controls}

  authentification(){
    this.submitted=true
    if(this.formLogin.valid){
      this.serv.login(this.formLogin.value).subscribe(res=>{
         if(res.status){
           localStorage.setItem('x-token',res.resultat)
           this.user.emit(res)
           localStorage.setItem("user",res.resultat)
         }else{
           this.message = res.resultat
         }
      })
    }
  }
}
