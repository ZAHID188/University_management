import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loggedin: boolean;

  constructor() {}
  ngOnInit() {}
}
