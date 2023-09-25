
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CourseInterface } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 
private _url:string="/assets/data/course.json"
  constructor(private http: HttpClient) { }
   getCourses():Observable<CourseInterface[]>{
   return this.http.get<CourseInterface[]>(this._url)
    
  }
}
