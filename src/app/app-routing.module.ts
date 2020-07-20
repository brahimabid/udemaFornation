import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { VerifGuard } from './services/verif.guard';



const routes: Routes = [
 {path:'',component:AccueilComponent},
  { path: 'courses', loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule) },
 { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
 { path: 'formateur', loadChildren: () => import('./formateur/formateur.module').then(m => m.FormateurModule) },
 { path: 'administrateur', loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurModule) },
 {path:'myCourses',canActivate:[VerifGuard], component:MesCoursComponent},
 {path:'category',component:CategorieComponent},
 {path:'contact',component:ContactComponent},
 {path:'about',component:AboutComponent},
 {path:'',redirectTo:'',pathMatch:'full'},
 {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
