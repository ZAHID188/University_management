import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url='https://localhost:7187/api/Teachers'

  constructor(private http:HttpClient) { }

  addTeacher(data:any){
    return this.http.post(this.url,data)
  }

  updateTeacher(id :number,data:any){
    return this.http.put(this.url+'/'+id,data );

  }

  delTeacher(id :number){
    return this.http.delete(this.url+'/'+id );
  }
}
