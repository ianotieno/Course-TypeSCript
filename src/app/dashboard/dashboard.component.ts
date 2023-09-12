import { Component, Input } from '@angular/core';
import { Course } from '../course';
import { COURSE } from '../mock-courses';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  courses: Course[] = COURSE

}
