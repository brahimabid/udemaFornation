import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrateurComponent } from './administrateur.component';
import { MessageComponent } from './message/message.component';
import { CoursComponent } from './cours/cours.component';

const routes: Routes = [{ path: '', component: AdministrateurComponent },
{ path: 'message', component: MessageComponent },
{ path: 'cours', component: CoursComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrateurRoutingModule { }
