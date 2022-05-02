import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasModulesComponent } from './canvas-modules/canvas-modules.component';
import { CourseHomeComponent } from './dashboard/course-home/course-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './pathway/courses/courses.component';
import { PersonalInfoComponent } from './pathway/personal-info/personal-info.component';
import { StudentCenterComponent } from './pathway/student-center/student-center.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'modules', component: CanvasModulesComponent },
  {
    path: 'pathway/student-center',
    component: StudentCenterComponent,
  },
  { path: 'pathway/student-center/courses', component: CoursesComponent },
  { path: 'pathway/student-center/personal-Info', component: PersonalInfoComponent },
  { path: 'courses', component: CourseHomeComponent },
  { path: 'faculty', component: FacultyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
