import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentCenterComponent } from './student-center/student-center.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  declarations: [
    StudentCenterComponent,
    CoursesComponent,
    PersonalInfoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
})
export class PathwayModule { }
