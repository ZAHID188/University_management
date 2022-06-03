import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './All_Login/admin-login/admin-login.component';
import { LoginComponent } from './All_Login/login/login.component';
import { StudentLoginComponent } from './All_Login/student-login/student-login.component';
import { TeacherLoginComponent } from './All_Login/teacher-login/teacher-login.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  // {path:'nav',component:NavComponent},
  {path: '',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'studentlogin',component:StudentLoginComponent},
  {path:'teacherlogin',component:TeacherLoginComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
