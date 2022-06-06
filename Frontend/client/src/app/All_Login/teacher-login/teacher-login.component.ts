import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  model:any={}


  constructor( private login_ser:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.model.identity=0;
    this.model.name='simon';
    this.model.email='simon@gmail.com';

 
  }

  login(data){
    this.login_ser.teacherLogin(data).subscribe(x=>{
      console.log(x);
      this.router.navigate(['/teacher']);
    },(error) => {
      console.log(error);
      alert('Wrong Credential');
    })
    
  }

}
