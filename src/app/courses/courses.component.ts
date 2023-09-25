import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  public courses:any=[]
  
constructor(private CourseService:CourseService){}
 ngOnInit(){
    this.CourseService.getCourses()
      .subscribe(courses=> this.courses=courses);
    
   }
 }

 
 
