import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  url='https://localhost:7187/api/Students';
  

  constructor(private http:HttpClient) { }


  addStudent(data:any){

   return this.http.post(this.url,data);

  }

  updateStudent(id:number,data:any){
    return this.http.put(this.url+'/'+id,data);

  }
  deleteStudent(id:number){
    return this.http.delete(this.url+'/'+id);
  }


}
