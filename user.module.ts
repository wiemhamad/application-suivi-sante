
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { InscriComponent } from './inscri/inscri.component';
import { ConxiComponent } from './conxi/conxi.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DoctorsComponent } from '../tasks/doctors/doctors.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    UserComponent,
    InscriComponent,
    ConxiComponent,
    ProfilComponent,
    DoctorsComponent, 
   
 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule
    
  ]
})
export class UserModule { }
