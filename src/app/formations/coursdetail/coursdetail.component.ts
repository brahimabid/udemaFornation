import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-coursdetail',
  templateUrl: './coursdetail.component.html',
  styleUrls: ['./coursdetail.component.scss']
})
export class CoursdetailComponent implements OnInit {
  id: string;
  cours: any;
  tabChap: [any]
  panelOpenState = false;
nbrvideo:number
nbrchap :number
  constructor(private route:ActivatedRoute,private serv:GestionService) { 

  }

  ngOnInit() {
    window.scrollTo(0,0)

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
    this.tabChap.forEach(element => {
           this.nbrvideo =  this.nbrvideo+element.video.length
        
    });
  }
}
