import { Component, OnInit } from '@angular/core';
import { CourseService } from './../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
  public courses:any=[]
  constructor(private CourseService:CourseService){}
  ngOnInit(){
    this.CourseService.getCourses()
      .subscribe(courses => this.courses = courses);
    
   }
}
