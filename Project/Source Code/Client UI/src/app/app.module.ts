import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanvasModulesComponent } from './canvas-modules/canvas-modules.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { CoursesComponent } from './pathway/courses/courses.component'
import { PathwayModule } from './pathway/pathway.module';
import { AnnouncementsComponent } from './dashboard/announcements/announcements.component';
import { AssignmentsComponent } from './dashboard/assignments/assignments.component';
import { DiscussionsComponent } from './dashboard/discussions/discussions.component';
import { GradesComponent } from './dashboard/grades/grades.component';
import { CourseHomeComponent } from './dashboard/course-home/course-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CanvasModulesComponent,
    SidebarComponent,
    DashboardComponent,
    AnnouncementsComponent,
    AssignmentsComponent,
    DiscussionsComponent,
    GradesComponent,
    CourseHomeComponent,
    //CoursesComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    WavesModule,
    PathwayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
