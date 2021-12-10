import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { ListComponent } from '../user/list/list.component';
const routes: Routes = [
  {
    path:'user' ,children:[
     {path:'login',component:LoginComponent},
      {path:'list',component:ListComponent}
]
    }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
