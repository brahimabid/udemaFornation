import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {

  id: string;
  cours: any;

  constructor(private route:ActivatedRoute,private serv:GestionService) { }

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
