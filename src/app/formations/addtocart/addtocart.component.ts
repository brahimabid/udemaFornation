import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  id: string;
  cours: any;

  constructor(private route:ActivatedRoute,private router:Router,private serv:GestionService) { }

  ngOnInit() {
    window.scrollTo(0,0)

    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
    this.serv.listCours.subscribe(res=>{
      this.cours=res.filter(x=> x._id==this.id)[0]
      console.log(this.cours)
    })
  }
 

}
