import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://localhost:7187/api/auth/';
  private _isLoggedIn=new BehaviorSubject<boolean>(false);
  isLoggedIn=this._isLoggedIn.asObservable();

  constructor(private http:HttpClient) {

    const  token=localStorage.getItem('login_Info');
    this._isLoggedIn.next(!!token);

   }

  // studentLogin(data:any){
  //   return this.http.post(this.url,data)
  // }


  studentLogin(data:any){
    return this.http.post(this.url+'StudentLogin',data).pipe(
      tap((response:any)=>{ 
        this._isLoggedIn.next(true);
        localStorage.setItem('login_Info',response.token);
        console.log(response.token);
      })
    )
  }

  teacherLogin(data:any){
    return this.http.post(this.url+'TeacherLogin',data).pipe(
      tap((response:any)=>{ 
        this._isLoggedIn.next(true);
        localStorage.setItem('login_Info',response.token);
        console.log(response.token);
      })
    )
  }
}
