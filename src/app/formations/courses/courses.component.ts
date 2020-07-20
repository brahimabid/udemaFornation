import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  id: string;
  cours: any;
  tabChap: [any]
  panelOpenState = false;
nbrvideo:number
nbrchap :number
  tab: any[];
  constructor(private route:ActivatedRoute,private serv:GestionService) { 

  }

  ngOnInit() {
    window.scrollTo(0,0)

    this.serv.listCours.subscribe(res=>{
     this.tab=res
     this.tab.sort()
     console.log(this.tab)
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
    this.tabChap.forEach(element => {
           this.nbrvideo =  this.nbrvideo+element.video.length
        
    });
  }
}
