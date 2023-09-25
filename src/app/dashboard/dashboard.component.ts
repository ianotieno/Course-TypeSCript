import { Component,OnInit } from '@angular/core';
import { CourseService } from './../course.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public courses:any=[]
constructor(private CourseService:CourseService){}
ngOnInit(){
  this.CourseService.getCourses()
    .subscribe(courses=> this.courses=courses);
  
 }
}
