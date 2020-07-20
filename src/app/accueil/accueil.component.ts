import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GestionService } from '../services/gestion.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit ,AfterViewChecked{

  panelOpenState = false
 @ViewChild('carousel',{static:true}) carousel:ElementRef
  slidesStore=[]
  constructor(private serv:GestionService,private router:Router,private serv2:AuthService) { }
ngAfterViewChecked(){
  //console.log(this.carousel)

}
  ngOnInit(): void {
    window.scrollTo(0,0)
       this.serv.listCours.subscribe(x=>{
        this.slidesStore=x
       })
console.log(this.slidesStore)
  }
  left="<i class='icon-left'></i>"
  right="<i class='icon-right' ></i>"

  customOptions: OwlOptions = { 
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [this.left, this.right],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
    

  startDragging($event){
console.log($event)
  }
  enrol(id){
   this.router.navigate(["/courses/coursdetail",id])
    
  }
  
}
