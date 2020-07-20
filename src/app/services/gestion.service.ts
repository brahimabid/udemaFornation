import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from '@angular/http'
import { Router } from '@angular/router';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt'
import 'rxjs/add/operator/map' ;
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionService {
tabCours=[]

courses=new BehaviorSubject(this.tabCours)
listCours=this.courses.asObservable()
  constructor(private http:Http) { }

  listFormation(){
    return this.http.get('http://localhost:3000/formation/allFormations').map(res=>{
        return res.json()
    })
  }
  mesChap(id){
    return this.http.get('http://localhost:3000/chappitre/getAllChapp/'+id,this.optionHeader()).map(res=>{
        return res.json()
    })
  }
  optionHeader() : RequestOptions{
    let token=localStorage.getItem('x-token');
    let headers=new Headers();
    headers.append('x-token',token);
    let options=new RequestOptions({ headers :headers});
    return options
  }
}
