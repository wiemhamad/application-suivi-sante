import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { HealthMentalComponent } from './health-mental/health-mental.component';
import { FitnessComponent } from './fitness/fitness.component';
import { DietComponent } from './diet/diet.component';
import { MedicalFolderComponent } from './medical-folder/medical-folder.component';
import { DoctorsComponent } from './doctors/doctors.component';


const routes: Routes = [{ path: '', component: TasksComponent },
{path:'mental',component:HealthMentalComponent
},{path:'fitness',component:FitnessComponent},
{path:'diet',component:DietComponent},
{path:'dossi',component:MedicalFolderComponent},
{path:"doctor",component:DoctorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
