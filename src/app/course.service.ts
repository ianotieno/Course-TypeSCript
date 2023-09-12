import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSE } from './mock-courses';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses():Observable<Course[]>{
    return of (COURSE)
  }

  constructor() { }
}
