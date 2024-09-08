import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccuilleComponent } from './accuille/accuille.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path:'',redirectTo:'accuille',pathMatch:'full'},
  {path:'',component:AccuilleComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
   { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
