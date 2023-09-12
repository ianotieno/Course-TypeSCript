import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSE } from './mock-courses';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 

  constructor(private MessagesService:MessagesService) {
    
   }
   getCourses():Observable<Course[]>{
   this.MessagesService.add('CourseService: fetch course')
    return of (COURSE)
  }
}
