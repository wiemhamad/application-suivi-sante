import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';

import { HealthMentalComponent } from './health-mental/health-mental.component';
import { DietComponent } from './diet/diet.component';
import { FitnessComponent } from './fitness/fitness.component';
import { MedicalFolderComponent } from './medical-folder/medical-folder.component';


@NgModule({
  declarations: [
    TasksComponent,

    HealthMentalComponent,
    DietComponent,
    FitnessComponent,
    MedicalFolderComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
