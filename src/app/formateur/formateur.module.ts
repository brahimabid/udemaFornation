import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormateurRoutingModule } from './formateur-routing.module';
import { FormateurComponent } from './formateur.component';
import { RegistreEtudiantComponent } from './registre-etudiant/registre-etudiant.component';
import { RegistreFormateurComponent } from './registre-formateur/registre-formateur.component';
import { LoginFormateurComponent } from './login-formateur/login-formateur.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [FormateurComponent, RegistreEtudiantComponent, RegistreFormateurComponent, LoginFormateurComponent],
  imports: [
    CommonModule,MatInputModule,
    FormateurRoutingModule,MatExpansionModule,MatFormFieldModule
  ],
})
export class FormateurModule { }
