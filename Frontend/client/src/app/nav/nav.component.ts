import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../All_Login/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(public login_service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }




  onSubmit(){
    const x=localStorage.removeItem('login_Info');
    this.login_service.isLoggedIn=null;
    this.router.navigate(['']);

  }


}
