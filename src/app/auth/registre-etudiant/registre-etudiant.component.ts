import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre-etudiant',
  templateUrl: './registre-etudiant.component.html',
  styleUrls: ['./registre-etudiant.component.scss']
})
export class RegistreEtudiantComponent implements OnInit {
formLogin:FormGroup
  connected: boolean;
  submitted: boolean;
  message='';
  constructor(private serv:AuthService,private fb:FormBuilder) { }
@Output() user=new EventEmitter()
  ngOnInit() {
    window.scrollTo(0,0)

    this.formLogin=this.fb.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      username:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],


    })
  }
  get f(){return this.formLogin.controls}

     register(){
       this.submitted=true
       this.serv.register(this.formLogin.value).subscribe(res=>{
         console.log(res)
         if(res.status){
          this.connected=true

           this.user.emit(res)
           localStorage.setItem("user",res.resultat)

         }else{
          this.message = res.resultat
        }
       })
     }
}
