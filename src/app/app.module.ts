import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {LoginComponent} from "./auth/login/login.component";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component'
import { RegistreEtudiantComponent } from './auth/registre-etudiant/registre-etudiant.component';

import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,LoginComponent,RegistreEtudiantComponent, MesCoursComponent, CategorieComponent, ContactComponent, AboutComponent, 
  ],
  imports: [CarouselModule,FormsModule,ReactiveFormsModule,
    BrowserModule,MatInputModule,MatExpansionModule,MatFormFieldModule,
    AppRoutingModule,HttpModule, BrowserAnimationsModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
    entryComponents:[AppComponent,LoginComponent,RegistreEtudiantComponent],

  bootstrap: [AppComponent],
})
export class AppModule { }
