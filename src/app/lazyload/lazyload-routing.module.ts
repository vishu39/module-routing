import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../lazyload/list/list.component';
import { LoginComponent } from '../lazyload/login/login.component';

const routes: Routes = [
{
  path:'login',component:LoginComponent
},
{
  path:'list',component:ListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadRoutingModule { }
