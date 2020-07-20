import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationsComponent } from './formations.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { PayementComponent } from './payement/payement.component';
import { OrdreterminerComponent } from './ordreterminer/ordreterminer.component';
import { CoursdetailComponent } from './coursdetail/coursdetail.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursApAComponent } from './cours-ap-a/cours-ap-a.component';
import { VerifGuard } from '../services/verif.guard';

const routes: Routes = [
  { path: 'payement/:id', canActivate:[VerifGuard],component: PayementComponent },
  { path: 'addTocard/:id',canActivate:[VerifGuard],component: AddtocartComponent },
{ path: 'coursdetail/:id',component:CoursdetailComponent },
{ path: 'all', component:CoursesComponent },
{ path: 'cours/:id/:titre',canActivate:[VerifGuard],component:CoursApAComponent },
{ path: 'ordreterminer/:id', canActivate:[VerifGuard],component:OrdreterminerComponent },

]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { }
