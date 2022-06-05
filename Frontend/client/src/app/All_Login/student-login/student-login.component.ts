import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  model:any={}

  constructor(private login_service:LoginService, private router:Router) { }

  ngOnInit(): void {
  this.model.name="zahid",
  this.model.email="zahid@gmail.com"
  this.model.identitity=0;
  }

  // login(data:any){

  //   this.login_service.studentLogin(data).subscribe(x=>{
  //     this.router.navigate(['/student']);
  //   },(error) => {
  //     console.log(error);
  //     alert('Wrong Credential');
  //   }
  //    )
  // }


  login(data:any){

    this.login_service.studentLogin(data).subscribe(x=>{
      console.log(x);
      this.router.navigate(['/student']);
    },(error) => {
      console.log(error);
      alert('Wrong Credential');
    })
  
  }
    
 
}
