import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';


const routes: Routes = [
  {path: '', redirectTo: './dashboard',pathMatch: 'full'},
  {path: 'courses', component:CoursesComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'dashboard',component:CourseDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
