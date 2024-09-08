import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { InscriComponent } from './inscri/inscri.component';
import { ConxiComponent } from './conxi/conxi.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from '../header/header.component';


const routes: Routes = [{ path: '', redirectTo:'login',pathMatch:'full'},
  {path:"login",component:ConxiComponent},
  {path:"inscri",component:InscriComponent},
  {path:"profil",component:ProfilComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
