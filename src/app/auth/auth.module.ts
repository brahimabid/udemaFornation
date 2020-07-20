import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistreEtudiantComponent } from './registre-etudiant/registre-etudiant.component';
import { RegistreFormateurComponent } from './registre-formateur/registre-formateur.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistreEtudiantComponent, RegistreFormateurComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
