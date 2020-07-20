import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GestionService } from 'src/app/services/gestion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordreterminer',
  templateUrl: './ordreterminer.component.html',
  styleUrls: ['./ordreterminer.component.scss']
})
export class OrdreterminerComponent implements OnInit {
  cours: any;
  id: string;

  constructor(private serv:GestionService,private route:ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0,0)

    this.id=this.route.snapshot.paramMap.get("id")
    this.serv.listCours.subscribe(res=>{
      this.cours=res.filter(x=> x._id==this.id)[0]
      console.log(this.cours)
    })
  }

}
