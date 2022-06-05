import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://localhost:7187/api/auth/StudentLogin'

  constructor(private http:HttpClient) { }

  studentLogin(data:any){
    return this.http.post(this.url,data)
  }
}
