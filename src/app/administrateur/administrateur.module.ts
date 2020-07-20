import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrateurRoutingModule } from './administrateur-routing.module';
import { AdministrateurComponent } from './administrateur.component';
import { MessageComponent } from './message/message.component';
import { CoursComponent } from './cours/cours.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { AjoutercoursComponent } from './ajoutercours/ajoutercours.component';
import { UtilisateurprofilComponent } from './utilisateurprofil/utilisateurprofil.component';


@NgModule({
  declarations: [AdministrateurComponent, MessageComponent, CoursComponent, CommentairesComponent, AjoutercoursComponent, UtilisateurprofilComponent],

  imports: [
    CommonModule,
    AdministrateurRoutingModule
  ]
  
})
@NgModule({
  declarations:[ MessageComponent],
  exports:    [  MessageComponent ],
})

export class AdministrateurModule { }
