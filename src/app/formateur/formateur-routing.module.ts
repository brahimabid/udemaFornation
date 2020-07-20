import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormateurComponent } from './formateur.component';
import { RegistreFormateurComponent } from './registre-formateur/registre-formateur.component';
import { LoginFormateurComponent } from './login-formateur/login-formateur.component';

const routes: Routes = [
  { path: '', component: FormateurComponent ,children:[
    { path: 'RegistreFormateur', component: RegistreFormateurComponent },
    { path: 'login', component: LoginFormateurComponent  },
    {path:'',redirectTo:'login',pathMatch:'full'}


  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
