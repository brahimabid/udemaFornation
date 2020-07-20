import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GestionService } from './services/gestion.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prj2';
 @ViewChild('exampleModalCenter',{static:true}) myModal:ElementRef

connected=false
  closeResult: string;
  user: any;
 constructor(private serv:GestionService,private serv2:AuthService,
      private modalService: NgbModal){}

    ngOnInit(){
      this.serv.listFormation().subscribe(res=>{
        this.serv.courses.next(res.resultat)
        console.log()
      })

      if(this.serv2.islogged()){
        this.connected=true
      }
      this.user=this.serv2.user
    }

  

      userConnected(event){
        if(event.status){
          this.connected=true
          this.user=event.resultat
         //this.myModal.nativeElement.onclose()
        }

      }

      logout(){
        this.serv2.logOut()
      }
}
