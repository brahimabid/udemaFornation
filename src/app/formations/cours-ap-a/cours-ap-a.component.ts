import { Component, OnInit, ViewChild, Renderer2, AfterViewChecked } from '@angular/core';
import { MatVideoComponent } from 'mat-video/lib/video.component';
import { ActivatedRoute } from '@angular/router';
import { GestionService } from 'src/app/services/gestion.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-cours-ap-a',
  templateUrl: './cours-ap-a.component.html',
  styleUrls: ['./cours-ap-a.component.scss']
})
@Pipe({
  name: 'safe'
})
export class CoursApAComponent implements OnInit ,PipeTransform{
  
  //@ViewChild('video',{static:true}) matVideo: MatVideoComponent;
  video: HTMLVideoElement;
 src

 id: string;
 cours: any;
 tabChap: [any]
 panelOpenState = false;
nbrvideo:number
nbrchap :number
 constructor(private sanitizer: DomSanitizer,private route:ActivatedRoute,private serv:GestionService) { 

 }
 transform(src) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(src);
}
 ngOnInit() {

   this.id=this.route.snapshot.paramMap.get("id")
   this.serv.listCours.subscribe(res=>{
     this.cours=res.filter(x=> x._id==this.id)[0]
     console.log(this.cours)
   })
   this.serv.mesChap(this.id).subscribe(res=>{
     this.tabChap=res.resultat
     console.log(this.tabChap)
     this.countvideo()

   })
 }

 countvideo(){
   this.nbrchap = this.tabChap.length
   this.nbrvideo=0
   let url="https://www.youtube.com/watch?v=VAkio68d51A"
   let tex=url.split('v=')[1].split('&')[0];
   this.src=this.transform("https://www.youtube.com/embed/"+tex)

   this.tabChap.forEach(element => {
          this.nbrvideo =  this.nbrvideo+element.video.length
       
   });
 }
  
  change(src){
    let url=src+""
    let tex=url.split('v=')[1].split('&')[0];
    this.src=this.transform("https://www.youtube.com/embed/"+tex)
//this.matVideo.autoplay=true
console.log(src)
  }

}
