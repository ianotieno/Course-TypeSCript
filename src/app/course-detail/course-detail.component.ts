import { Component, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  @Input() course: Course | null = null; // Initialize as null

  constructor() {}
}
