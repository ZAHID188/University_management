import { Component, OnInit } from '@angular/core';
import { LoginService } from '../All_Login/login/login.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public login_service:LoginService) { }

  ngOnInit(): void {
  }

}
