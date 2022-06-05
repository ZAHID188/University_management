import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  model:any={}

  constructor(private login_service:LoginService) { }

  ngOnInit(): void {
  this.model.username="zahid",
  this.model.email="zahid@gmail.com"
  this.model.zero=0;
  }

  login(data:any){

    this.login_service.studentLogin(data).subscribe(x=>{
      console.log(x);
    },(error) => {
      console.log(error);
    }
     )
  }
    
    // if(this.model.username == "admin" && this.model.email=="admin@gmail.com")
    // {
    //   alert("done");
    //   // this.router.navigate[('/admin')];
    // }}

}
