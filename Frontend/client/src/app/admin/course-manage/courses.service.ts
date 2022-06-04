import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url='https://localhost:7187/api/Courses'

  constructor(private http:HttpClient) { }

  addCourse(data:any){
    return this.http.post(this.url,data);
  }

  updateCourse(id:number,data:any){
    return this.http.put(this.url+'/'+id,data);
  }

  deleteCourse(id:number){
    return this.http.delete(this.url+'/'+id);
  }
}
