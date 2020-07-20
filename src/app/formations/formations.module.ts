import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationsComponent } from './formations.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { PayementComponent } from './payement/payement.component';
import { OrdreterminerComponent } from './ordreterminer/ordreterminer.component';
import { CoursdetailComponent } from './coursdetail/coursdetail.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursApAComponent } from './cours-ap-a/cours-ap-a.component';
import { MatVideoModule } from 'mat-video';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [FormationsComponent, AddtocartComponent, PayementComponent, OrdreterminerComponent, CoursdetailComponent, CoursesComponent, CoursApAComponent],
  imports: [MatExpansionModule,
    CommonModule,
    FormationsRoutingModule,MatVideoModule 
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationsModule { }
